import type { FunctionComponent } from 'react';
import Map from './Map';
import styles from '../styles.module.css';
import { useMapInstance } from './MapContext';
import MapProvider from './MapProvider';

const MapPosition: FunctionComponent = () => {
  const { position } = useMapInstance();

  return (
    <div className={styles.alert}>
      {position ? `${position[0]}, ${position[1]}` : ''}
    </div>
  );
};

const MapContextExample: FunctionComponent = () => (
  <MapProvider>
    <Map />
    <MapPosition />
  </MapProvider>
);

export default MapContextExample;
