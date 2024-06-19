import type { FunctionComponent, ReactNode } from 'react';
import { useState } from 'react';
import { LatLngTuple } from 'leaflet';
import { MapContext } from './MapContext';

const data = [
  {
    type: 'Feature',
    properties: { id: 919933 },
    geometry: {
      type: 'Point',
      coordinates: [4.904670904743209, 52.33981350119924],
    },
  },
  {
    type: 'Feature',
    properties: { id: 919934 },
    geometry: {
      type: 'Point',
      coordinates: [4.902692060023387, 52.340093024617616],
    },
  },
];

const MapProvider: FunctionComponent<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const [position, setPosition] = useState<LatLngTuple | null>([
    52.33981350119924, 4.904670904743209,
  ]);
  const [initialPosition, setInitialPosition] = useState<LatLngTuple | null>([
    52.33981350119924, 4.904670904743209,
  ]);
  const [displayAlert, setDisplayAlert] = useState(false);
  const [markerData, setMarkerData] = useState(data);
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <MapContext.Provider
      value={{
        mapInstance,
        setMapInstance,
        position,
        setPosition,
        initialPosition,
        setInitialPosition,
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
