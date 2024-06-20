import type { FunctionComponent } from 'react';
import styles from '../styles.module.css';
import { useMapInstance } from './MapContext';

const Alert: FunctionComponent = () => {
  const { displayAlert, setDisplayAlert, selectedMarker, setSelectedMarker } =
    useMapInstance();

  if (displayAlert) {
    return (
      <div className={styles.alert}>
        {selectedMarker ? (
          <>
            You clicked on a marker with the ID {selectedMarker}!
            <button
              type="button"
              onClick={() => {
                setDisplayAlert(false);
                setSelectedMarker(null);
              }}
            >
              Close
            </button>
          </>
        ) : null}
      </div>
    );
  }

  return null;
};

export default Alert;
