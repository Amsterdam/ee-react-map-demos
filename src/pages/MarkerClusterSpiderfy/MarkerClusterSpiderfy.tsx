import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import L, { LatLngTuple, LeafletKeyboardEvent, LeafletEvent } from 'leaflet';
import getCrsRd from '@/utils/getCrsRd';
import styles from './styles.module.css';
import createClusterIcon from './utils/createClusterIcon';
import getMapData from './getMapData';
import processFeatures from './processFeatures';
import { CLUSTER_OPTIONS, CLUSTER_STYLES, lineStyles } from './mapStyles';
import type { ClusterOptions, MapSuperClusterFeature } from './types';
import { GeoJsonObject } from 'geojson';

interface MarkerClusterSpiderProps {
  clusterOptions?: ClusterOptions;
}

const MarkerClusterSpider: FunctionComponent<MarkerClusterSpiderProps> = ({
  clusterOptions = CLUSTER_OPTIONS,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const [markersInstance, setMarkersInstance] = useState<L.GeoJSON | null>(
    null
  );
  const [spiderLinesInstance, setSpiderLinesInstance] =
    useState<L.GeoJSON | null>();
  const createdMapInstance = useRef(false);

  const [center, setCenter] = useState<LatLngTuple>([52.370216, 4.895168]);
  const [zoom, setZoom] = useState(7);

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

  const onClick = useCallback(onMarkerClick, [mapInstance]);

  const onKeyup = useCallback(
    (event: LeafletKeyboardEvent) => {
      if (event.originalEvent.key === 'Enter') {
        onMarkerClick(event);
      }
    },
    [onClick]
  );

  // Set the Leaflet map and Amsterdam base layer
  useEffect(() => {
    if (containerRef.current === null || createdMapInstance.current !== false) {
      return;
    }

    const map = new L.Map(containerRef.current, {
      center,
      zoom,
      layers: [
        L.tileLayer('https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png', {
          attribution: '',
          subdomains: ['t1', 't2', 't3', 't4'],
          tms: true,
        }),
      ],
      zoomControl: false,
      maxZoom: 16,
      minZoom: 6,
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
      setZoom(map.getZoom());
      setCenter([map.getCenter().lat, map.getCenter().lng]);
    });

    return () => {
      if (mapInstance) mapInstance.remove();

      if (markersInstance) {
        markersInstance.off();
        markersInstance.remove();
      }
    };
  }, []);

  const clusterFeatures = useMemo(() => {
    if (!mapInstance) {
      return {
        clusterItems: [],
        spiderLines: [],
      };
    }

    return processFeatures(
      mapInstance,
      getMapData(mapInstance) as MapSuperClusterFeature[],
      clusterOptions
    );
  }, [mapInstance, zoom, center]);

  useEffect(() => {
    if (mapInstance) {
      // Clear any already rendered clusters/markers
      markersInstance?.clearLayers();
      markersInstance?.off();

      spiderLinesInstance?.clearLayers();
      spiderLinesInstance?.off();

      if (markersInstance && clusterFeatures.clusterItems.length) {
        // Render the cluster(s) and marker(s) to the map
        markersInstance?.addData(
          clusterFeatures.clusterItems as unknown as GeoJsonObject
        );
        spiderLinesInstance?.addData(
          clusterFeatures.spiderLines as unknown as GeoJsonObject
        );

        // Add event listeners to enable dynamic clustering
        markersInstance?.on('click', onClick);
        markersInstance?.on('keyup', onKeyup);
      }
    }
  }, [mapInstance, zoom, center]);

  return <div className={styles.container} ref={containerRef} />;
};

export default MarkerClusterSpider;
