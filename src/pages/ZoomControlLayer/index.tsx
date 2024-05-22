import { FunctionComponent } from 'react';

import Map from '../../components/Map/Map';
import ZoomControl from '../../components/ZoomControl/ZoomControl';

const ZoomControlStory: FunctionComponent = () => {
  return (
    <Map>
      <ZoomControl />
    </Map>
  );
};

export default ZoomControlStory;
