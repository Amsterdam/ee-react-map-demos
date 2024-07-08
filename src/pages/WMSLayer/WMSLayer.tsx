import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import styles from './styles.module.css';

const WMSLayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
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

  // Create the WMS layer and add it to the map
  useEffect(() => {
    if (mapInstance === null) {
      return;
    }

    L.tileLayer
      .wms(
        'https://map.data.amsterdam.nl/maps/adresseerbare_objecten?REQUEST=GetCapabilities&VERSION=1.1.0&SERVICE=wms',
        {
          layers: 'verblijfsobjecten_woonfunctie',
          format: 'image/svg+xml',
          // Ensure transparent is true otherwise the Amsterdam base layer won't be visible through the WMS layer
          transparent: true,
          // Default for Amsterdam is Rijksdriehoek whereas Leaflet works in WGS84 so be sure to handle the CRS properly
          crs: getCrsRd(),
        }
      )
      .addTo(mapInstance);
  }, [mapInstance]);

  return <div className={styles.container} ref={containerRef} />;
};

export default WMSLayer;
