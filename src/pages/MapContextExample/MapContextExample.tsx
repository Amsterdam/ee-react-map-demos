import type { FunctionComponent } from 'react';
import SingleMarkerSelect from './SingleMarkerSelect/SingleMarkerSelect';
import MultiMarkerSelect from './MultiMarkerSelect/MultiMarkerSelect';
import Position from './Position/Position';
import ZoomControls from './ZoomControls/ZoomControls';

// TODO tests
// TODO docs
interface MapContextExampleProps {
  type?: 'position' | 'single-select' | 'multi-select' | 'zoom';
}

const MapContextExample: FunctionComponent<MapContextExampleProps> = ({
  type,
}) => {
  if (type === 'single-select') {
    return <SingleMarkerSelect />;
  }

  if (type === 'multi-select') {
    return <MultiMarkerSelect />;
  }

  if (type === 'zoom') {
    return <ZoomControls />;
  }

  return <Position />;
};

export default MapContextExample;
