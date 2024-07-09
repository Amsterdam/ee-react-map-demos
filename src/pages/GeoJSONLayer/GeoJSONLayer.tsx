import { useEffect, useRef, useState } from 'react';
import L, { circleMarker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import { toGeoJSON } from '@/utils/toGeoJSON';
import styles from './styles.module.css';
import { Boom } from './types';
import data from './data.json';

const GeoJSONLayer = () => {
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
      zoomControl: true,
      maxZoom: 16,
      minZoom: 6,
      crs: getCrsRd(),
      maxBounds: [
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ],
      attributionControl: false,
    });

    L.tileLayer('https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png', {
      attribution: '',
      subdomains: ['t1', 't2', 't3', 't4'],
      tms: true,
    }).addTo(map);

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

    const layer = L.geoJson(toGeoJSON(data as Boom[]), {
      pointToLayer: (_feature, latlng) =>
        circleMarker(latlng, {
          fillColor: '#247514',
          fill: true,
          color: '#247514',
          radius: 3,
          className: 'c-marker',
        }),
    });

    layer.addTo(mapInstance);

    return () => {
      layer.removeFrom(mapInstance);
    };
  }, [mapInstance]);

  return <div className={styles.container} ref={containerRef} />;
};

export default GeoJSONLayer;
