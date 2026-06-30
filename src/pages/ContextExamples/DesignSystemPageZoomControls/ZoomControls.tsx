import type { FunctionComponent } from 'react';
import { Button } from '@amsterdam/design-system-react';
import { MinusIcon, PlusIcon } from '@amsterdam/design-system-react-icons';
import { useMapInstance } from './MapContext';
import styles from './styles.module.css';

const ZoomControls: FunctionComponent = () => {
  const mapInstance = useMapInstance();

  const handleZoomInClick = () => {
    if (mapInstance) {
      mapInstance.setZoom(mapInstance.getZoom() + 1);
    }
  };

  const handleZoomOutClick = () => {
    if (mapInstance) {
      mapInstance?.setZoom(mapInstance.getZoom() - 1);
    }
  };

  return (
    <div className={styles.buttons}>
      <Button
        variant="secondary"
        iconOnly
        icon={PlusIcon}
        onClick={handleZoomInClick}
      >
        Zoom in
      </Button>
      <Button
        variant="secondary"
        iconOnly
        icon={MinusIcon}
        onClick={handleZoomOutClick}
      >
        Zoom out
      </Button>
    </div>
  );
};

export default ZoomControls;
