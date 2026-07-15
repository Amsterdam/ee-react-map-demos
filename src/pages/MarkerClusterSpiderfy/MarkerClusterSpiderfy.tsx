import { useCallback, useEffect, useRef, useState } from 'react';
import L, {
  type LatLngTuple,
  type LeafletEvent,
  type LeafletKeyboardEvent,
} from 'leaflet';
import getCrsRd from '@/utils/getCrsRd';
import styles from './styles.module.css';
import createClusterIcon from './utils/createClusterIcon';
import getMapData from './getMapData';
import processFeatures from './processFeatures';
import { CLUSTER_OPTIONS, CLUSTER_STYLES, lineStyles } from './mapStyles';
import type { ClusterOptions, DataRecord } from './types';
import type { GeoJsonObject } from 'geojson';
import rawData from './data.json';

interface MarkerClusterSpiderProps {
  clusterOptions?: ClusterOptions;
}

const MarkerClusterSpider = ({
  clusterOptions = CLUSTER_OPTIONS,
}: MarkerClusterSpiderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const [markersInstance, setMarkersInstance] = useState<L.GeoJSON | null>(
    null
  );
  const [spiderLinesInstance, setSpiderLinesInstance] =
    useState<L.GeoJSON | null>();
  const createdMapInstance = useRef(false);

  const initialCenterRef = useRef<LatLngTuple>([52.370216, 4.895168]);
  const initialZoomRef = useRef(7);
  const [mapViewVersion, setMapViewVersion] = useState(0);

  const onMarkerClick = useCallback(
    (event: LeafletEvent) => {
      const { feature } = event.propagatedFrom;

      if (feature.properties.cluster && feature.properties.cluster_id) {
        // We must be dealing with a cluster click
        mapInstance?.setZoomAround(
          event.propagatedFrom.getLatLng(),
          feature.properties.expansion_zoom
        );
      } else if (feature.properties.id) {
        // We must be dealing with a marker click
        alert(`Marker click ID ${feature.properties.id}`);
      }
    },
    [mapInstance]
  );

  const onClick = onMarkerClick;

  const onKeyup = useCallback(
    (event: LeafletKeyboardEvent) => {
      if (event.originalEvent.key === 'Enter') {
        onMarkerClick(event);
      }
    },
    [onMarkerClick]
  );

  // Set the Leaflet map and Amsterdam base layer
  useEffect(() => {
    if (containerRef.current === null || createdMapInstance.current !== false) {
      return;
    }

    const map = new L.Map(containerRef.current, {
      center: initialCenterRef.current,
      zoom: initialZoomRef.current,
      layers: [
        L.tileLayer('https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png', {
          attribution: '',
          subdomains: ['t1', 't2', 't3', 't4'],
          tms: true,
        }),
      ],
      zoomControl: false,
      maxZoom: 16,
      minZoom: 7,
      crs: getCrsRd(),
      maxBounds: [
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ],
    });

    map.attributionControl.setPrefix(false);

    // Empty Layer Group that will receive the clusters data on the fly.
    const markers = L.geoJSON(null, {
      pointToLayer: (...args) => createClusterIcon(...args, CLUSTER_STYLES),
    }).addTo(map);
    const lines = L.geoJSON(null, {
      style: lineStyles,
    }).addTo(map);

    createdMapInstance.current = true;
    setMapInstance(map);
    setMarkersInstance(markers);
    setSpiderLinesInstance(lines);

    // Listen for map changes to know when to update the clusters
    map.on('moveend', () => {
      setMapViewVersion(currentVersion => currentVersion + 1);
    });

    return () => {
      createdMapInstance.current = false;
      markers.off();
      markers.remove();
      lines.off();
      lines.remove();
      map.remove();
    };
  }, []);

  useEffect(() => {
    if (!mapInstance || !markersInstance || !spiderLinesInstance) {
      return;
    }

    const clusterFeatures = processFeatures(
      mapInstance,
      getMapData(mapInstance, rawData as DataRecord[]),
      clusterOptions
    );

    // Clear any already rendered clusters/markers
    markersInstance.clearLayers();
    markersInstance.off();

    spiderLinesInstance.clearLayers();
    spiderLinesInstance.off();

    if (clusterFeatures.clusterItems.length) {
      // Render the cluster(s) and marker(s) to the map
      markersInstance.addData(
        clusterFeatures.clusterItems as unknown as GeoJsonObject
      );
      spiderLinesInstance.addData(
        clusterFeatures.spiderLines as unknown as GeoJsonObject
      );

      // Add event listeners to enable dynamic clustering
      markersInstance.on('click', onClick);
      markersInstance.on('keyup', onKeyup);
    }
  }, [
    clusterOptions,
    mapInstance,
    mapViewVersion,
    markersInstance,
    onClick,
    onKeyup,
    spiderLinesInstance,
  ]);

  return <div className={styles.container} ref={containerRef} />;
};

export default MarkerClusterSpider;
