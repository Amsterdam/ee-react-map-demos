import { useRef } from 'react';
import 'leaflet/dist/leaflet.css';

import styles from './styles.module.css';
import useGeoJSONLayer from './useGeoJSONLayer';
import useLeafletMap from './useLeafletMap';

const WFSLayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapInstance = useLeafletMap(containerRef);

  useGeoJSONLayer(
    mapInstance,
    'https://map.data.amsterdam.nl/maps/bag?REQUEST=Getfeature&VERSION=1.1.0&SERVICE=wfs&TYPENAME=ms:pand&srsName=EPSG:4326&outputformat=geojson&bbox=4.886568897250246%2C52.36966606270195%2C4.892099548064893%2C52.37253554766886'
  );

  return <div className={styles.container} ref={containerRef} />;
};

export default WFSLayer;
