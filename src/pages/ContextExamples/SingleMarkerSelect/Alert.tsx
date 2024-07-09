import type { FunctionComponent } from 'react';
import {
  Alert as AmsAlert,
  Button,
  Paragraph,
} from '@amsterdam/design-system-react';
import styles from '../styles.module.css';
import { useMapInstance } from './MapContext';

const Alert: FunctionComponent = () => {
  const { displayAlert, setDisplayAlert, selectedMarker, setSelectedMarker } =
    useMapInstance();

  if (displayAlert) {
    return (
      <div className={styles['alert-wrapper']}>
        <AmsAlert severity="info">
          {selectedMarker ? (
            <>
              <Paragraph size="small">
                You clicked on a marker with the ID{' '}
                <strong>{selectedMarker}</strong>
              </Paragraph>
              <Button
                variant="primary"
                type="button"
                onClick={() => {
                  setDisplayAlert(false);
                  setSelectedMarker(null);
                }}
              >
                Close
              </Button>
            </>
          ) : null}
        </AmsAlert>
      </div>
    );
  }

  return null;
};

export default Alert;
