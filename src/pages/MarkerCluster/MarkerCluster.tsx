import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import L, {
  type LatLngTuple,
  type LeafletEvent,
  type LeafletKeyboardEvent,
} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Supercluster from 'supercluster';
import type { BBox, Point } from 'geojson';
import getCrsRd from '@/utils/getCrsRd';
import { toGeoJSON } from '@/utils/toGeoJSON';
import styles from './styles.module.css';
import data from './data.json';
import createClusterIcon from './utils/createClusterIcon';

const CLUSTER_STYLES = {
  default: styles.markerCluster,
  small: styles.markerClusterSmall,
  medium: styles.markerClusterMedium,
  large: styles.markerClusterLarge,
};

type MockDataType = {
  id: string;
  geometry: Point;
};

type MockProperties = Omit<MockDataType, 'geometry'>;

const MarkerCluster = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const [markersInstance, setMarkersInstance] =
    useState<L.GeoJSON<MockProperties> | null>(null);
  const createdMapInstance = useRef(false);

  const [center, setCenter] = useState<LatLngTuple>([52.370216, 4.895168]);
  const [zoom, setZoom] = useState(7);
  const initialCenterRef = useRef(center);
  const initialZoomRef = useRef(zoom);

  const clusterIndex = useMemo(() => {
    const index = new Supercluster<MockProperties>({
      // Enable 'log' for console.logs with the timing to build each cluster
      log: false,
      radius: 40,
      extent: 3000,
      nodeSize: 64,
      maxZoom: 13,
    });

    index.load(toGeoJSON<MockDataType>(data as MockDataType[]).features);

    return index;
  }, []);

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
    [clusterIndex, mapInstance]
  );

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
      minZoom: 7, // TODO in ARM this is 3?
      crs: getCrsRd(),
      maxBounds: [
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ],
    });

    map.attributionControl.setPrefix(false);

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
      createdMapInstance.current = false;
      markers.off();
      markers.remove();
      map.remove();
    };
  }, []);

  useEffect(() => {
    if (markersInstance && mapInstance) {
      // Clear any already rendered clusters/markers
      markersInstance.clearLayers();
      markersInstance.off();

      // Get the current map bounds to prevent clustering every data record
      const bounds = mapInstance.getBounds();
      const bbox: BBox = [
        bounds.getWest(),
        bounds.getSouth(),
        bounds.getEast(),
        bounds.getNorth(),
      ];

      // Return any map data within the current bounds
      const clusterMarkers = clusterIndex.getClusters(
        bbox,
        mapInstance.getZoom()
      );

      if (markersInstance && clusterMarkers.length) {
        // Render the cluster(s) and marker(s) to the map
        clusterMarkers.forEach(m => markersInstance?.addData(m));

        // Add event listeners to enable dynamic clustering
        markersInstance.on('click', onMarkerClick);
        markersInstance.on('keyup', onKeyup);
      }
    }
  }, [
    center,
    clusterIndex,
    mapInstance,
    markersInstance,
    onKeyup,
    onMarkerClick,
    zoom,
  ]);

  return <div className={styles.container} ref={containerRef} />;
};

export default MarkerCluster;
