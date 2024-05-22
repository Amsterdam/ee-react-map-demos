import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';
import L from 'leaflet';
import getCrsRd from '@/utils/getCrsRd';

const useLeafletMap = (container: RefObject<HTMLDivElement>) => {
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const createdMapInstance = useRef(false);

  useEffect(() => {
    if (container.current === null || createdMapInstance.current !== false) {
      return;
    }

    const map = new L.Map(container.current, {
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
      maxZoom: 16,
      minZoom: 3,
      crs: getCrsRd(),
      maxBounds: [
        [52.36966606270195, 4.886568897250246],
        [52.37253554766886, 4.892099548064893],
      ],
    });

    map.attributionControl.setPrefix(false);

    createdMapInstance.current = true;
    setMapInstance(map);

    return () => {
      if (mapInstance) mapInstance.remove();
    };
  }, []);

  return mapInstance;
};

export default useLeafletMap;
