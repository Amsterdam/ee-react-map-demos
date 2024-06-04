import styles from '@/pages/ReactLeaflet/PolygonLayer/styles.module.css';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import L from 'leaflet';
import getCrsRd from '@/utils/getCrsRd';
import type { LatLngExpression } from 'leaflet';

import data from './data.json';

const PolygonLayer = (): JSX.Element => {
  return (
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
        <Polygon
          positions={data.geometry.coordinates as LatLngExpression[][][]}
        />
      </MapContainer>
    </div>
  );
};

export default PolygonLayer;
