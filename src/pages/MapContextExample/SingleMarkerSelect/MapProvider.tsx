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
  const [position, setPosition] = useState<LatLngTuple>([
    52.33981350119924, 4.904670904743209,
  ]);
  const [markerData, setMarkerData] = useState<GeoJSONFeature[]>(
    data as GeoJSONFeature[]
  );
  const [displayAlert, setDisplayAlert] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);

  return (
    <MapContext.Provider
      value={{
        mapInstance,
        setMapInstance,
        position,
        setPosition,
        displayAlert,
        setDisplayAlert,
        markerData,
        setMarkerData,
        selectedMarker,
        setSelectedMarker,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapProvider;
