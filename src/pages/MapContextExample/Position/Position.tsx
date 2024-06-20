import type { FunctionComponent } from 'react';
import Map from './Map';
import MapProvider from './MapProvider';
import Alert from './Alert';

const MapContextExample: FunctionComponent = () => (
  <MapProvider>
    <Map />
    <Alert />
  </MapProvider>
);

export default MapContextExample;
