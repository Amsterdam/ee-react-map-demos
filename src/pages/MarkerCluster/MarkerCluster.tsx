import { useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import L from 'leaflet';
import Supercluster from 'supercluster';
import getCrsRd from '@/utils/getCrsRd';
import { toGeoJSON } from '@/utils/toGeoJSON';
import styles from './styles.module.css';
import { Record } from './types';
import data from './data.json';
import { BBox, Feature, Point } from 'geojson';
import './marker-cluster.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createClusterIcon = (feature: Feature<Point, any>, latlng: L.LatLng) => {
  if (!feature.properties.cluster) return L.marker(latlng);

  const count = feature.properties.point_count;
  const size = count < 100 ? 'small' : count < 1000 ? 'medium' : 'large';
  const icon = L.divIcon({
    html: `<div><span>${feature.properties.point_count_abbreviated}</span></div>`,
    className: `marker-cluster marker-cluster-${size}`,
    iconSize: L.point(40, 40),
  });

  return L.marker(latlng, {
    icon: icon,
  });
};

const MarkerCluster: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const [, setClusterInstance] = useState<L.Marker | null>(null);
  const [markersInstance, setMarkersInstance] = useState<L.GeoJSON | null>(
    null
  );
  const createdMapInstance = useRef(false);

  const clusterIndex = new Supercluster({ radius: 40, maxZoom: 16 });

  // Set the Leaflet map and Amsterdam base layer
  useEffect(() => {
    if (containerRef.current === null || createdMapInstance.current !== false) {
      return;
    }

    const map = new L.Map(containerRef.current, {
      center: L.latLng([52.357754799388815, 4.944979424099163]),
      zoom: 12,
      layers: [
        L.tileLayer('https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png', {
          attribution: '',
          subdomains: ['t1', 't2', 't3', 't4'],
          tms: true,
        }),
      ],
      zoomControl: false,
      maxZoom: 16,
      minZoom: 3,
      crs: getCrsRd(),
      maxBounds: [
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ],
    });

    map.attributionControl.setPrefix(false);

    // Empty Layer Group that will receive the clusters data on the fly.
    const markers = L.geoJSON(null, {
      pointToLayer: createClusterIcon,
    }).addTo(map);

    createdMapInstance.current = true;
    setMapInstance(map);
    setMarkersInstance(markers);

    return () => {
      if (mapInstance) mapInstance.remove();
    };
  }, []);

  useEffect(() => {
    if (mapInstance) {
      const parsedGeoJson = toGeoJSON(data as Record[]);
      console.log({ parsedGeoJson });
      clusterIndex.load(parsedGeoJson.features);

      const bounds = mapInstance.getBounds();
      const bbox = [
        bounds.getWest(),
        bounds.getSouth(),
        bounds.getEast(),
        bounds.getNorth(),
      ];

      const clusterMarkers = clusterIndex.getClusters(
        bbox as BBox,
        mapInstance.getZoom()
      );
      console.log({ clusterMarkers });

      // @ts-ignore
      markersInstance?.addData(clusterMarkers);
    }
  }, [mapInstance]);

  return <div className={styles.container} ref={containerRef} />;
};

export default MarkerCluster;
