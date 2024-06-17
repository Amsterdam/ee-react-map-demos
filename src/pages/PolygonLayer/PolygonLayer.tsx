import { useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import styles from './styles.module.css';
import data from './data.json';
import { polygonHoverStyles, polygonStyles } from './layerStyles';

const PolygonLayer: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const createdMapInstance = useRef(false);

  const polygonRef = useRef<L.Polygon | null>(null);

  // Set the Leaflet map and Amsterdam base layer
  useEffect(() => {
    if (containerRef.current === null || createdMapInstance.current !== false) {
      return;
    }

    const map = new L.Map(containerRef.current, {
      center: [52.356423, 4.867811],
      zoom: 10,
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
      polygonRef.current = L.polygon(
        data.geometry.coordinates as LatLngTuple[][][],
        {
          className: 'c-layer',
        }
      )
        .addTo(mapInstance)
        .on('mouseover', () => {
          polygonRef.current?.setStyle(polygonHoverStyles);
        })
        .on('mouseout', () => {
          polygonRef.current?.setStyle(polygonStyles);
        });
    }

    return () => {
      if (polygonRef.current && mapInstance) {
        mapInstance.removeLayer(polygonRef.current);
      }
    };
  }, [data, mapInstance]);

  return <div className={styles.container} ref={containerRef} />;
};

export default PolygonLayer;
