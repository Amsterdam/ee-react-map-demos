import {
  type FunctionComponent,
  type PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import { MapContext } from './MapContext';
import styles from '../map.module.css';

export type MapProps = {
  scrollWheelZoom: boolean;
} & PropsWithChildren;

const MapProvider: FunctionComponent<MapProps> = ({
  scrollWheelZoom,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const createdMapInstance = useRef(false);
  const initialScrollWheelZoomRef = useRef(scrollWheelZoom);

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
      scrollWheelZoom: initialScrollWheelZoomRef.current,
      maxZoom: 16,
      minZoom: 7,
      crs: getCrsRd(),
      maxBounds: [
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ],
    });

    // Remove Leaflet link from the map
    map.attributionControl.setPrefix(false);

    createdMapInstance.current = true;
    setMapInstance(map);

    return () => {
      createdMapInstance.current = false;
      map.remove();
    };
  }, []);

  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    if (scrollWheelZoom) {
      mapInstance.scrollWheelZoom.enable();
      return;
    }

    mapInstance.scrollWheelZoom.disable();
  }, [mapInstance, scrollWheelZoom]);

  return (
    <>
      <div ref={containerRef} className={styles.container} />
      {!!mapInstance && (
        <MapContext.Provider value={{ mapInstance }}>
          {children}
        </MapContext.Provider>
      )}
    </>
  );
};

export default MapProvider;
