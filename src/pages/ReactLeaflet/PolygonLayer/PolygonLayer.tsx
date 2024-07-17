import styles from '@/pages/ReactLeaflet/PolygonLayer/styles.module.css';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import getCrsRd from '@/utils/getCrsRd';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import data from './data.json';

const PolygonLayer = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <MapContainer
        center={[52.35672610204171, 4.868821590792892]}
        zoom={10}
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
        <Polygon
          positions={data.geometry.coordinates as LatLngExpression[][][]}
        />
      </MapContainer>
    </div>
  );
};

export default PolygonLayer;
