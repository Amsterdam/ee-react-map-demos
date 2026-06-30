import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import styles from './styles.module.css';

const BaseLayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use state instead of a ref for the Leaflet map object.
  // This avoids DOM issues when React StrictMode is enabled.
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);

  // This could use state, but it should only fire once.
  // A ref is mutable and does not trigger additional re-renders.
  const createdMapInstance = useRef(false);

  useEffect(() => {
    // Ensure the target DOM element exists and no map is already created.
    // This prevents duplicate renders in StrictMode.
    if (containerRef.current === null || createdMapInstance.current !== false) {
      return;
    }

    const map = new L.Map(containerRef.current, {
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
      maxZoom: 16,
      minZoom: 6,
      // Ensure proper handling for Rijksdriehoekcoördinaten
      crs: getCrsRd(),
      // Prevent browsing too far outside Amsterdam.
      // The tile layer only supports Amsterdam and nearby areas.
      maxBounds: [
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ],
    });

    // Remove Leaflet link from the map
    map.attributionControl.setPrefix(false);

    // Set the map as created and store the object to state
    createdMapInstance.current = true;
    setMapInstance(map);

    // On component unmount, destroy the map and all related events
    return () => {
      if (mapInstance) mapInstance.remove();
    };
  }, []);

  return <div className={styles.container} ref={containerRef} />;
};

export default BaseLayer;
