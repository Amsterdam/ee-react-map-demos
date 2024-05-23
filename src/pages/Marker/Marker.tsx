import { useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import L from 'leaflet';
import getCrsRd from '@/utils/getCrsRd';
import styles from './styles.module.css';
import customMarker from './icons/customMarker';

const Marker: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const [, setMarkerInstance] = useState<L.Marker | null>(null);
  const createdMapInstance = useRef(false);

  // Set the Leaflet map and Amsterdam base layer
  useEffect(() => {
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
      minZoom: 3,
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

  // Create the marker and add it to the map
  useEffect(() => {
    if (mapInstance) {
      const marker = L.marker(L.latLng([52.370216, 4.895168]), {
        // There are many more options to choose from @see https://leafletjs.com/reference.html#marker
        icon: customMarker,
      })
        .addTo(mapInstance)
        // Marker click event listener example
        .on('click', () => alert('Marker click!'));
      setMarkerInstance(marker);
    }
  }, [mapInstance]);

  return <div className={styles.container} ref={containerRef} />;
};

export default Marker;
