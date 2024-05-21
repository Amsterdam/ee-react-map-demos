import L from 'leaflet';
import {
  MapContainer,
  Marker as MarkerLeaflet,
  TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import styles from './styles.module.css';
import defaultMarker from '@/utils/icons/defaultMarker';

const position = L.latLng([52.370216, 4.895168]);
const Marker = (): JSX.Element => (
  <div className={styles.container}>
    <MapContainer
      center={L.latLng([52.370216, 4.895168])}
      zoom={13}
      maxBounds={[
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ]}
      crs={getCrsRd()}
    >
      <TileLayer
        url="https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png"
        subdomains={['t1', 't2', 't3', 't4']}
        tms
      />
      <MarkerLeaflet position={position} icon={defaultMarker} />
    </MapContainer>
  </div>
);

export default Marker;
