import { useEffect, useRef, useState } from 'react';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import styles from './styles.module.css';
import data from './data.json';
import { lineHoverStyles, lineStyles } from './layerStyles';

const PolylineLayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const createdMapInstance = useRef(false);

  const polylineRef = useRef<L.Polyline | null>(null);

  // Set the Leaflet map and Amsterdam base layer
  useEffect(() => {
    if (containerRef.current === null || createdMapInstance.current !== false) {
      return;
    }

    const map = new L.Map(containerRef.current, {
      center: [52.37079908397672, 4.89500238214001],
      zoom: 15,
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

    createdMapInstance.current = true;
    setMapInstance(map);

    return () => {
      if (mapInstance) mapInstance.remove();
    };
  }, []);

  // Create the polygon layer and add it to the map
  useEffect(() => {
    if (mapInstance) {
      // TypeScript will often throw errors with Leaflet coordinate sets if you don't explicitly cast the type
      polylineRef.current = L.polyline(
        data.geometry.coordinates[0] as LatLngTuple[],
        { ...lineStyles, className: 'c-layer' }
      )
        .addTo(mapInstance)
        .on('mouseover', () => {
          polylineRef.current?.setStyle(lineHoverStyles);
        })
        .on('mouseout', () => {
          polylineRef.current?.setStyle(lineStyles);
        });
    }

    return () => {
      if (polylineRef.current && mapInstance) {
        mapInstance.removeLayer(polylineRef.current);
      }
    };
  }, [data, mapInstance]);

  return <div className={styles.container} ref={containerRef} />;
};

export default PolylineLayer;
