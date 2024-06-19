import { Point } from 'geojson';
import type { LatLngTuple, Map } from 'leaflet';
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export type ApiDataType = {
  id: number;
  geometry: Point;
};

export interface MapState {
  mapInstance: Map | null;
  initialPosition: LatLngTuple;
  position: LatLngTuple | null;
  displayAlert: boolean;
  markers: ApiDataType[];
  selectedMarker: number | null;
}

type Action<T extends keyof MapState> = Dispatch<SetStateAction<MapState[T]>>;

export interface MapContextProps extends MapState {
  setMapInstance: Action<'mapInstance'>;
  setInitialPosition: Action<'initialPosition'>;
  setPosition: Action<'position'>;
  setDisplayAlert: Action<'displayAlert'>;
  setMarkers: Action<'markers'>;
  setSelectedMarker: Action<'selectedMarker'>;
}

export const MapContext = createContext<MapContextProps | null>(null);

export function useMapInstance() {
  return useContext(MapContext);
}
