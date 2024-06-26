import type { FunctionComponent, ReactNode } from 'react';
import { useState } from 'react';
import { LatLngTuple } from 'leaflet';
import { MapContext } from './MapContext';

const MapProvider: FunctionComponent<{
  children?: ReactNode | ReactNode[];
}> = ({ children }) => {
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const [position, setPosition] = useState<LatLngTuple>([
    52.370192857022566, 4.895172252375137,
  ]);

  return (
    <MapContext.Provider
      value={{
        mapInstance,
        setMapInstance,
        position,
        setPosition,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapProvider;
