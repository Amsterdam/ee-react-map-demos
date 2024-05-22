import { useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import styles from './styles.module.css';
import { toGeoJSON } from '@/utils/toGeoJSON';
import { Boom } from './types';
import data from './data.json';

const GeoJSONLayer: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const createdMapInstance = useRef(false);

  useEffect(() => {
    if (containerRef.current === null || createdMapInstance.current !== false) {
      return;
    }

    const map = new L.Map(containerRef.current, {
      center: [52.370216, 4.895168],
      zoom: 8,
      layers: [
        L.tileLayer('https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png', {
          attribution: '',
          subdomains: ['t1', 't2', 't3', 't4'],
          tms: true,
        }),
      ],
      zoomControl: true,
      maxZoom: 16,
      minZoom: 3,
      crs: getCrsRd(),
      maxBounds: [
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ],
      attributionControl: false,
    });

    createdMapInstance.current = true;
    setMapInstance(map);

    return () => {
      if (mapInstance) mapInstance.remove();
    };
  }, []);

  useEffect(() => {
    if (mapInstance === null) {
      return;
    }

    L.geoJson(toGeoJSON(data as Boom[]), {
      pointToLayer: (_, latlng) => {
        return L.circleMarker(latlng, {
          fillColor: '#247514',
          fill: true,
          color: '#247514',
          radius: 3,
        });
      },
    }).addTo(mapInstance);
  }, [mapInstance]);

  return <div className={styles.container} ref={containerRef} />;
};

export default GeoJSONLayer;
