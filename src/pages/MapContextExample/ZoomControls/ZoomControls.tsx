import type { FunctionComponent } from 'react';
import 'leaflet/dist/leaflet.css';
import Controls from './Controls';
import MapProvider from './MapProvider';

const ZoomControls: FunctionComponent<{ scrollWheelZoom?: boolean }> = ({
  scrollWheelZoom = true,
}) => (
  <MapProvider scrollWheelZoom={scrollWheelZoom}>
    <Controls />
  </MapProvider>
);

export default ZoomControls;
