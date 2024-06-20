import type { FunctionComponent } from 'react';
import Map from './Map';
import MapProvider from './MapProvider';
import Alert from './Alert';

// TODO setup multiple select with parkeervakken
// TODO setup index component to show 3 variants in storybook
// TODO readme
// TODO tests
const MultiMarkerSelect: FunctionComponent = () => (
  <MapProvider>
    <Map />
    <Alert />
  </MapProvider>
);

export default MultiMarkerSelect;
