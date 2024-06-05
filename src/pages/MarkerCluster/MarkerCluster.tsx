import { useCallback, useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import L, { LatLngTuple, LeafletKeyboardEvent, LeafletEvent } from 'leaflet';
import Supercluster from 'supercluster';
import type { BBox, GeoJsonObject } from 'geojson';
import getCrsRd from '@/utils/getCrsRd';
import { toGeoJSON } from '@/utils/toGeoJSON';
import styles from './styles.module.css';
import { DataRecord } from './types';
import data from './data.json';
import createClusterIcon from './utils/createClusterIcon';

const CLUSTER_STYLES = {
  default: styles.markerCluster,
  small: styles.markerClusterSmall,
  medium: styles.markerClusterMedium,
  large: styles.markerClusterLarge,
};

const MarkerCluster: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const [markersInstance, setMarkersInstance] = useState<L.GeoJSON | null>(
    null
  );
  const createdMapInstance = useRef(false);

  const [center, setCenter] = useState<LatLngTuple>([52.370216, 4.895168]);
  const [zoom, setZoom] = useState(7);

  const clusterIndex = new Supercluster({
    // Enable this for console.logs with the timing to build each cluster
    log: false,
    radius: 40,
    extent: 3000,
    nodeSize: 64,
    maxZoom: 13,
  });

  const onMarkerClick = useCallback(
    (event: LeafletEvent) => {
      const { feature } = event.propagatedFrom;

      if (feature.properties.cluster && feature.properties.cluster_id) {
        // We must be dealing with a cluster click
        mapInstance?.setZoomAround(
          event.propagatedFrom.getLatLng(),
          clusterIndex.getClusterExpansionZoom(feature.properties.cluster_id)
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
      minZoom: 6, // TODO in ARM this is 3?
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

    createdMapInstance.current = true;
    setMapInstance(map);
    setMarkersInstance(markers);

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

  useEffect(() => {
    if (mapInstance) {
      // Clear any already rendered clusters/markers
      markersInstance?.clearLayers();
      markersInstance?.off();

      // Parse any API data to GeoJSON
      const parsedGeoJson = toGeoJSON(data as DataRecord[]);

      // Load the parsed GeoJSON data into the cluster index
      clusterIndex.load(parsedGeoJson.features);

      // Get the current map bounds to prevent clustering every data record
      const bounds = mapInstance.getBounds();
      const bbox = [
        bounds.getWest(),
        bounds.getSouth(),
        bounds.getEast(),
        bounds.getNorth(),
      ];

      // Return any map data within the current bounds
      const clusterMarkers = clusterIndex.getClusters(
        bbox as BBox,
        mapInstance.getZoom()
      );

      if (markersInstance && parsedGeoJson.features.length) {
        // Render the cluster(s) and marker(s) to the map
        markersInstance?.addData(clusterMarkers as unknown as GeoJsonObject);

        // Add event listeners to enable dynamic clustering
        markersInstance?.on('click', onClick);
        markersInstance?.on('keyup', onKeyup);
      }
    }
  }, [mapInstance, zoom, center]);

  return <div className={styles.container} ref={containerRef} />;
};

export default MarkerCluster;