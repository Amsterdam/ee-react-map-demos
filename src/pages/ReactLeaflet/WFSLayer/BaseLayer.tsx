import type { ReactNode } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import styles from './styles.module.css';

interface BaseLayerProps {
  children?: ReactNode;
}

const BaseLayer = ({ children }: BaseLayerProps) => (
  <div className={styles.container}>
    <MapContainer
      center={L.latLng([52.370216, 4.895168])}
      zoom={13}
      maxZoom={16}
      minZoom={6}
      maxBounds={[
        [52.36966606270195, 4.886568897250246],
        [52.37253554766886, 4.892099548064893],
      ]}
      crs={getCrsRd()}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png"
        subdomains={['t1', 't2', 't3', 't4']}
        tms
      />
      {children}
    </MapContainer>
  </div>
);

export default BaseLayer;
