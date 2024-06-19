import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { MapContext, useMapInstance } from './MapContext';
import { DEFAULT_MAP_OPTIONS } from './defaultMapOptions';
import 'leaflet/dist/leaflet.css';
import styles from './MapStyles.module.css';

export type MapProps = {
  mapOptions?: L.MapOptions;
  children?: React.ReactNode;
};

export default function Map({
  mapOptions = DEFAULT_MAP_OPTIONS,
  children,
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const createdMapInstance = useRef(false);
  const { setPosition } = useMapInstance();

  useEffect(() => {
    if (mapRef.current === null || createdMapInstance.current !== false) {
      return;
    }

    createdMapInstance.current = true;
    const map = new L.Map(mapRef.current, {
      ...DEFAULT_MAP_OPTIONS,
      ...mapOptions,
    });
    L.tileLayer(`https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png`, {
      subdomains: ['t1', 't2', 't3', 't4'],
      tms: true,
    }).addTo(map);

    // Remove Leaflet link from the map
    map.attributionControl.setPrefix(false);

    setMapInstance(map);

    map.on('moveend', () => setPosition(map.getCenter()));

    return () => {
      mapInstance?.remove();
    };
  }, [mapInstance, mapOptions, mapRef]);

  return (
    <div ref={mapRef} className={styles.container}>
      {!!mapInstance && (
        <MapContext.Provider value={{ mapInstance }}>
          {children}
        </MapContext.Provider>
      )}
    </div>
  );
}
