import { useEffect, useRef } from 'react';
import type { FunctionComponent } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import styles from './styles.module.css';

const BaseLayer: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (containerRef.current === null) {
      return;
    }

    mapRef.current = new L.Map(containerRef.current, {
      center: L.latLng([52.370216, 4.895168]),
      zoom: 12,
      layers: [
        L.tileLayer('https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png', {
          attribution: '',
          subdomains: ['t1', 't2', 't3', 't4'],
          tms: true,
        }),
      ],
      zoomControl: false,

      // Copied from Amsterdam-react-maps
      maxZoom: 16,
      minZoom: 3,
      crs: getCrsRd(),
      maxBounds: [
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ],
    });

    // Remove Leaflet link from the map
    mapRef.current.attributionControl.setPrefix(false);

    // eslint-disable-next-line consistent-return
    return () => {
      if (mapRef.current) mapRef.current.remove();
    };
  }, []);

  return <div className={styles.container} ref={containerRef} />;
};

export default BaseLayer;
