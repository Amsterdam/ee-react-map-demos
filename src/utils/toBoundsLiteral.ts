import { LatLngBounds, LatLngBoundsLiteral } from 'leaflet';

const toBoundsLiteral = (bounds: LatLngBounds): [[number, number], [number, number]] => {
  const southWest = bounds.getSouthWest();
  const northEast = bounds.getNorthEast();

  return [
    [southWest.lng as number, southWest.lat as number],
    [northEast.lng as number, northEast.lat as number],
  ];
};

export default toBoundsLiteral;
