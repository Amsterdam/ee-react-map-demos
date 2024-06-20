import type { FunctionComponent } from 'react';
import SingleMarkerSelect from './SingleMarkerSelect/SingleMarkerSelect';
import MultiMarkerSelect from './MultiMarkerSelect/MultiMarkerSelect';
import Position from './Position/Position';

interface MapContextExampleProps {
  type?: 'position' | 'single-select' | 'multi-select';
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

  return <Position />;
};

export default MapContextExample;
