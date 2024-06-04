import { LatLngBounds, LatLngBoundsLiteral } from 'leaflet';

const toBoundsLiteral = (bounds: LatLngBounds): [[number, number], [number, number]] => {
  const southWest = bounds.getSouthWest();
  const northEast = bounds.getNorthEast();

  return [
    [southWest.lat as number, southWest.lng as number],
    [northEast.lat as number, northEast.lng as number],
  ];
};

export default toBoundsLiteral;
