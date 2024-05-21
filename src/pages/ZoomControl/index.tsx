import { Button, Icon, VisuallyHidden } from '@amsterdam/design-system-react';
import {
  EnlargeIcon,
  MinimiseIcon,
} from '@amsterdam/design-system-react-icons';

import styles from './styles.module.css';

const ZoomControl = () => {
  // TODO pass ref to this component
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
          <Icon svg={EnlargeIcon} size="level-5" />
        </Button>
        <Button variant="secondary">
          <VisuallyHidden>Zoom out</VisuallyHidden>
          <Icon svg={MinimiseIcon} size="level-5" />
        </Button>
      </div>
    </>
  );
};

export default ZoomControl;
