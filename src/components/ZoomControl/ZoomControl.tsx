import { Button, Icon, VisuallyHidden } from '@amsterdam/design-system-react';
import { FunctionComponent } from 'react';
import {
  EnlargeIcon,
  MinimiseIcon,
} from '@amsterdam/design-system-react-icons';

import styles from './styles.module.css';
import { useMapInstance } from '../Map/MapContext';

const ZoomControl: FunctionComponent = () => {
  const mapInstance = useMapInstance();

  const handleZoomInClick = () => {
    if (mapInstance) {
      mapInstance?.setZoom(mapInstance.getZoom() + 1);
    }
  };
  const handleZoomOutClick = () => {
    if (mapInstance) {
      mapInstance?.setZoom(mapInstance.getZoom() - 1);
    }
  };

  return (
    <div className={styles.buttons}>
      <Button variant="secondary" onClick={handleZoomInClick}>
        <VisuallyHidden>Zoom in</VisuallyHidden>
        <Icon svg={EnlargeIcon} size="level-5" />
      </Button>
      <Button variant="secondary" onClick={handleZoomOutClick}>
        <VisuallyHidden>Zoom out</VisuallyHidden>
        <Icon svg={MinimiseIcon} size="level-5" />
      </Button>
    </div>
  );
};

export default ZoomControl;
