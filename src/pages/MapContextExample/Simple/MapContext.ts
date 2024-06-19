import type { LatLngTuple, Map } from 'leaflet';
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface MapState {
  mapInstance: Map | null;
  position: LatLngTuple | null;
}

type Action<T extends keyof MapState> = Dispatch<SetStateAction<MapState[T]>>;

export interface MapContextProps extends MapState {
  setMapInstance: Action<'mapInstance'>;
  setPosition: Action<'position'>;
}

export const MapContext = createContext<MapContextProps | null>(null);

export function useMapInstance() {
  return useContext(MapContext);
}
