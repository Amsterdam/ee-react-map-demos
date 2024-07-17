// Leaflet was built before Webpack, Vite (and other build engines) were used so certain assets and elements require manual configuration
// @see https://github.com/Leaflet/Leaflet/issues/4968#issuecomment-483402699
import L from 'leaflet';
import type { Feature, Point } from 'geojson';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import Supercluster from 'supercluster';

const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = iconDefault;

export interface ClusterStyles {
  default: string;
  small: string;
  medium: string;
  large: string;
}

const createClusterIcon = <P extends Supercluster.ClusterProperties>(
  feature: Feature<Point, P>,
  latlng: L.LatLng,
  styles: ClusterStyles
) => {
  if (!feature.properties.cluster) return L.marker(latlng);

  const count = feature.properties.point_count;
  const sizeClassName =
    count < 10 ? styles.small : count < 100 ? styles.medium : styles.large;
  const icon = L.divIcon({
    html: `<div><span>${feature.properties.point_count_abbreviated}</span></div>`,
    className: `${styles.default} ${sizeClassName}`,
    iconSize: L.point(40, 40),
  });

  return L.marker(latlng, {
    icon: icon,
  });
};

export default createClusterIcon;
