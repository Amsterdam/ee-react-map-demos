import { Button, Icon } from '@amsterdam/design-system-react';
import {
  EnlargeIcon,
  MinimiseIcon,
} from '@amsterdam/design-system-react-icons';
import { useMapInstance } from './MapContext';
import styles from './controls.module.css';

const Controls = () => {
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
        <span className="ams-visually-hidden">Zoom in</span>
        <Icon svg={EnlargeIcon} size="level-5" />
      </Button>
      <Button variant="secondary" onClick={handleZoomOutClick}>
        <span className="ams-visually-hidden">Zoom out</span>
        <Icon svg={MinimiseIcon} size="level-5" />
      </Button>
    </div>
  );
};

export default Controls;
