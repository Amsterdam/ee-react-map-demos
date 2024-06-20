import { useState, type FunctionComponent } from 'react';
import Map from './Map';
import styles from './styles.module.css';
import { MapContext, useMapInstance } from './MapContext';
import L from 'leaflet';
import MapProvider from './MapProvider';

const MapPosition: FunctionComponent = () => {
  const { mapInstance, setMapInstance } = useMapInstance();
  const [position, setPosition] = useState<L.LatLng | null>(null);

  mapInstance?.on('moveend', () => {
    setPosition(mapInstance.getCenter());
  });

  return (
    <div className={styles.alert}>{position?.lat}</div>
    // <div className={styles.alert}>{mapInstance?.getCenter().lat}</div>
  );
};

const MapContextExample: FunctionComponent = () => {
  const mapInstance = useMapInstance();

  const [position, setPosition] = useState<L.LatLng>(
    L.latLng([52.370216, 4.895168])
  );

  return (
    <MapProvider>
      <Map />
      <MapPosition />
    </MapProvider>
  );
};

export default MapContextExample;
