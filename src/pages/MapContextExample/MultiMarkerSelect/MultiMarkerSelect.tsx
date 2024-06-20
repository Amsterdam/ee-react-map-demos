import type { FunctionComponent } from 'react';
import Map from './Map';
import MapProvider from './MapProvider';
import Alert from './Alert';

// TODO tests
// TODO docs
const MultiMarkerSelect: FunctionComponent = () => (
  <MapProvider>
    <Map />
    <Alert />
  </MapProvider>
);

export default MultiMarkerSelect;
