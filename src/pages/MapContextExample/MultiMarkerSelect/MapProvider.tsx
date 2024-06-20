import type { FunctionComponent, ReactNode } from 'react';
import { useState } from 'react';
import { LatLngTuple } from 'leaflet';
import { MapContext } from './MapContext';
import { GeoJSONFeature } from './types';
import data from './data.json';

const MapProvider: FunctionComponent<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const [position, setPosition] = useState<LatLngTuple>([52.36036, 4.89956]);
  const [markerData, setMarkerData] = useState<GeoJSONFeature[]>(
    data as GeoJSONFeature[]
  );
  const [selectedMarkers, setSelectedMarkers] = useState<string[]>([]);

  return (
    <MapContext.Provider
      value={{
        mapInstance,
        setMapInstance,
        position,
        setPosition,
        markerData,
        setMarkerData,
        selectedMarkers,
        setSelectedMarkers,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapProvider;
