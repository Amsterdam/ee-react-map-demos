import type { FunctionComponent } from 'react';
import Map from './Map';
import styles from '../styles.module.css';
import { useMapInstance } from './MapContext';
import MapProvider from './MapProvider';

const MapPosition: FunctionComponent = () => {
  const {
    mapInstance,
    position,
    initialPosition,
    displayAlert,
    setDisplayAlert,
    selectedMarker,
    setSelectedMarker,
  } = useMapInstance();

  console.log({ displayAlert });

  if (displayAlert) {
    return (
      <div className={styles.position}>
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

const MapContextExample: FunctionComponent = () => {
  // const mapInstance = useMapInstance();

  return (
    <MapProvider>
      <Map />
      <MapPosition />
    </MapProvider>
  );
};

export default MapContextExample;
