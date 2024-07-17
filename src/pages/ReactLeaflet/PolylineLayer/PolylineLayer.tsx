import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import styles from '@/pages/ReactLeaflet/PolylineLayer/styles.module.css';
import L, { LatLngTuple } from 'leaflet';
import getCrsRd from '@/utils/getCrsRd';
import data from './data.json';
import 'leaflet/dist/leaflet.css';

const PolylineLayer = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <MapContainer
        center={L.latLng([52.37079908397672, 4.89500238214001])}
        zoom={13}
        maxZoom={16}
        minZoom={6}
        maxBounds={[
          [52.25168, 4.64034],
          [52.50536, 5.10737],
        ]}
        crs={getCrsRd()}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png"
          subdomains={['t1', 't2', 't3', 't4']}
          tms
        />
        <Polyline positions={data.geometry.coordinates as LatLngTuple[][]} />
      </MapContainer>
    </div>
  );
};

export default PolylineLayer;
