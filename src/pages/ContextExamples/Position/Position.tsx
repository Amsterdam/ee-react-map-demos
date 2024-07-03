import type { FunctionComponent } from 'react';
import Map from './Map';
import MapProvider from './MapProvider';
import Alert from './Alert';

const Position: FunctionComponent = () => (
  <MapProvider>
    <Map />
    <Alert />
  </MapProvider>
);

export default Position;
