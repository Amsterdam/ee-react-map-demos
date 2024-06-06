import L from 'leaflet';
import MapMarkerIcon from '../../../assets/icons/map-marker.svg';

const customMarker = L.icon({
  iconUrl: MapMarkerIcon,
  iconSize: [24, 32],
  iconAnchor: [12, 32],
  className: 'c-marker',
});

export default customMarker;
