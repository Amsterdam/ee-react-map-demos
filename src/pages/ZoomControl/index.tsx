import { Button, Icon, VisuallyHidden } from '@amsterdam/design-system-react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import getCrsRd from '@/utils/getCrsRd';
import {
  EnlargeIcon,
  MinimiseIcon,
} from '@amsterdam/design-system-react-icons';

import styles from './styles.module.css';

const ZoomControl: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const createdMapInstance = useRef(false);

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

  // Set the Leaflet map and Amsterdam base layer
  useEffect(() => {
    if (containerRef.current === null || createdMapInstance.current !== false) {
      return;
    }

    const map = new L.Map(containerRef.current, {
      center: L.latLng([52.370216, 4.895168]),
      zoom: 12,
      layers: [
        L.tileLayer('https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png', {
          attribution: '',
          subdomains: ['t1', 't2', 't3', 't4'],
          tms: true,
        }),
      ],
      zoomControl: false,
      /** Disable scroll wheel zoom when the (custom) zoom control is used */
      scrollWheelZoom: false,
      maxZoom: 16,
      minZoom: 3,
      crs: getCrsRd(),
      maxBounds: [
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ],
    });

    map.attributionControl.setPrefix(false);

    createdMapInstance.current = true;
    setMapInstance(map);

    return () => {
      if (mapInstance) mapInstance.remove();
    };
  }, []);

  return (
    <>
      <div className={styles.container} ref={containerRef}>
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
      </div>
    </>
  );
};

export default ZoomControl;
