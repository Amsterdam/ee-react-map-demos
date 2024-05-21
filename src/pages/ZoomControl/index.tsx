import { Button, Icon, VisuallyHidden } from '@amsterdam/design-system-react';
import {
  EnlargeIcon,
  MinimiseIcon,
} from '@amsterdam/design-system-react-icons';

import styles from './styles.module.css';

const ZoomControl = () => {
  // const handleZoomInClick = () => {
  //   if (mapRef.current) {
  //     mapRef.current?.setZoom(mapRef.current.getZoom() + 1);
  //   }
  // };
  // const handleZoomOutClick = () => {
  //   if (mapRef.current) {
  //     mapRef.current?.setZoom(mapRef.current.getZoom() - 1);
  //   }
  // };

  return (
    <>
      <div className={styles.container}>
        <Button variant="secondary">
          <VisuallyHidden>Zoom in</VisuallyHidden>
          <Icon svg={EnlargeIcon} />
        </Button>
        <Button variant="secondary">
          <VisuallyHidden>Zoom out</VisuallyHidden>
          <Icon svg={MinimiseIcon} />
        </Button>
      </div>
    </>
  );
};

export default ZoomControl;
