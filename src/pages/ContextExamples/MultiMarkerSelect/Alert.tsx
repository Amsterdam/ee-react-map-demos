import { useMemo, type FunctionComponent } from 'react';
import {
  Alert as AmsAlert,
  Button,
  OrderedList,
} from '@amsterdam/design-system-react';
import styles from '../styles.module.css';
import { useMapInstance } from './MapContext';
import data from './data.json';

const Alert: FunctionComponent = () => {
  const { selectedMarkers, setSelectedMarkers } = useMapInstance();

  const selectedStr = useMemo(
    () =>
      selectedMarkers.map(selectedMarker => {
        const origin = data.find(
          record => record.properties.id === selectedMarker
        );
        let str = selectedMarker;
        if (origin) {
          str = `${str} - ${origin.properties.street}`;
        }

        return <li key={`alert-${selectedMarker}`}>{str}</li>;
      }),
    [selectedMarkers]
  );

  if (selectedStr.length) {
    return (
      <div className={styles['alert-wrapper']}>
        <AmsAlert heading="Selected markers" severity="info">
          <OrderedList size="small">{selectedStr}</OrderedList>
          <Button
            variant="primary"
            type="button"
            onClick={() => setSelectedMarkers([])}
          >
            Reset
          </Button>
        </AmsAlert>
      </div>
    );
  }

  return null;
};

export default Alert;
