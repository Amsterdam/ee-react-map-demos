import type { FunctionComponent } from 'react';
import { Alert as AmsAlert, Paragraph } from '@amsterdam/design-system-react';
import { useMapInstance } from './MapContext';
import styles from '../styles.module.css';

const Alert: FunctionComponent = () => {
  const { position } = useMapInstance();

  return (
    <div className={styles['alert-wrapper']}>
      <AmsAlert severity="info">
        <Paragraph size="small">
          {position ? `${position[0]}, ${position[1]}` : ''}
        </Paragraph>
      </AmsAlert>
    </div>
  );
};

export default Alert;
