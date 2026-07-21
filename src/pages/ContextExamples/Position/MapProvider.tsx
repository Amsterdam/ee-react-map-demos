import type { FunctionComponent, PropsWithChildren } from 'react';
import { useState } from 'react';
import type { LatLngTuple, Map as LeafletMap } from 'leaflet';
import { MapContext } from './MapContext';

const MapProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [mapInstance, setMapInstance] = useState<LeafletMap | null>(null);
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
