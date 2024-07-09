import type { LatLngBounds, LatLngBoundsLiteral } from 'leaflet';

const toBoundsLiteral = (bounds: LatLngBounds): LatLngBoundsLiteral => {
  const southWest = bounds.getSouthWest();
  const northEast = bounds.getNorthEast();

  return [
    [southWest.lng, southWest.lat],
    [northEast.lng, northEast.lat],
  ];
};

export default toBoundsLiteral;
