import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { MapContext } from './MapContext';
import { MAP_OPTIONS } from './mapOptions';
import 'leaflet/dist/leaflet.css';
import styles from './MapStyles.module.css';

export type MapProps = {
  mapOptions?: L.MapOptions;
  children: React.ReactNode;
};

export default function Map({ mapOptions = MAP_OPTIONS, children }: MapProps) {
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const createdMapInstance = useRef(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current === null || createdMapInstance.current !== false) {
      return;
    }

    createdMapInstance.current = true;
    const map = new L.Map(mapRef.current, { ...MAP_OPTIONS, ...mapOptions });
    setMapInstance(map);

    return () => {
      mapInstance?.remove();
    };
  }, [mapInstance, mapOptions, mapRef]);

  return (
    <div ref={mapRef} className={styles['map-container']}>
      {!!mapInstance && (
        <MapContext.Provider value={{ mapInstance }}>
          {children}
        </MapContext.Provider>
      )}
    </div>
  );
}
