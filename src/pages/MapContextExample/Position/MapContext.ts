import type { LatLngTuple, Map } from 'leaflet';
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface MapState {
  mapInstance: Map | null;
  position: LatLngTuple;
}

type Action<T extends keyof MapState> = Dispatch<SetStateAction<MapState[T]>>;

export interface MapContextProps extends MapState {
  setMapInstance: Action<'mapInstance'>;
  setPosition: Action<'position'>;
}

export const MapContext = createContext<MapContextProps | null>(null);

export function useMapInstance(): NonNullable<MapContextProps> {
  const resolved = useContext(MapContext);

  if (resolved !== undefined || resolved !== null) {
    return resolved as NonNullable<MapContextProps>;
  }

  throw Error('Fout, geen mapinstance gevonden in context.');
}
