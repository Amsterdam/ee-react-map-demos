import L from 'leaflet';
import type { PointExpression } from 'leaflet';
import LocationIcon from '../../shared/assets/Location.svg?raw';

const defaultMarker = L.divIcon({
  html: LocationIcon,
  iconSize: [24, 32] as PointExpression,
  iconAnchor: [12, 32] as PointExpression,
  popupAnchor: [0, -30] as PointExpression,
  className: 'map-marker',
});

export default defaultMarker;
