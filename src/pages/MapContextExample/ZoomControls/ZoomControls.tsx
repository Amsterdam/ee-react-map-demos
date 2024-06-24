import type { FunctionComponent } from 'react';
import 'leaflet/dist/leaflet.css';
import Controls from './Controls';
import MapProvider from './MapProvider';

const ZoomControls: FunctionComponent = () => (
  <MapProvider>
    <Controls />
  </MapProvider>
);

export default ZoomControls;
