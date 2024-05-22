import { FunctionComponent } from 'react';

import Map from '../Fullscreen/Map';
import ZoomControl from './ZoomControl';

const ZoomControlStory: FunctionComponent = () => {
  return (
    <Map>
      <ZoomControl />
    </Map>
  );
};

export default ZoomControlStory;
