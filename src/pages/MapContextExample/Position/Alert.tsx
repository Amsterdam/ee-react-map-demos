import type { FunctionComponent } from 'react';
import { useMapInstance } from './MapContext';
import styles from '../styles.module.css';

const Alert: FunctionComponent = () => {
  const { position } = useMapInstance();

  return (
    <div className={styles.alert}>
      {position ? `${position[0]}, ${position[1]}` : ''}
    </div>
  );
};

export default Alert;
