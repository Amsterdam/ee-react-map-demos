import { useMemo, type FunctionComponent } from 'react';
import styles from '../styles.module.css';
import { useMapInstance } from './MapContext';
import data from './data.json';

const Alert: FunctionComponent = () => {
  const { selectedMarkers, setSelectedMarkers } = useMapInstance();

  // const displayAlert = useMemo(
  //   () => selectedMarkers.length > 0,
  //   [selectedMarkers]
  // );
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

  console.log({ selectedStr });

  if (selectedStr.length) {
    return (
      <div className={styles.alert}>
        <>
          <p>You have selected the following markers</p>
          <ol>{selectedStr}</ol>

          <button type="button" onClick={() => setSelectedMarkers([])}>
            Reset
          </button>
        </>
      </div>
    );
  }

  return null;
};

export default Alert;
