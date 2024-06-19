import { useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import L, { circleMarker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import styles from '../map.module.css';
import { useMapInstance } from './MapContext';
import customMarker from './icons/customMarker';

const Map: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [markerInstances, setMarkerInstances] = useState<L.Marker[]>([]);
  const createdMapInstance = useRef(false);

  const {
    mapInstance,
    setMapInstance,
    position,
    setPosition,
    setDisplayAlert,
    markerData,
    selectedMarker,
    setSelectedMarker,
  } = useMapInstance();

  useEffect(() => {
    if (containerRef.current === null || createdMapInstance.current !== false) {
      return;
    }

    const map = new L.Map(containerRef.current, {
      center: L.latLng(position),
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
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ],
    });

    // Remove Leaflet link from the map
    map.attributionControl.setPrefix(false);

    createdMapInstance.current = true;
    setMapInstance(map);

    map.on('moveend', () => {
      // setDisplayAlert(true);
      setPosition([map.getCenter().lat, map.getCenter().lng]);
    });

    const layer = L.geoJson(markerData, {
      pointToLayer: (feature, latlng) =>
        L.marker(latlng, {
          opacity: 0.4,
          icon: customMarker,
        }).on('click', () => {
          // console.log(setDisplayAlert);
          setDisplayAlert(true);
          setSelectedMarker(feature.properties.id);
        }),
    });

    layer.addTo(map);

    // markerData.forEach(data => {
    //   const layer = L.geoJson(data, {
    //     pointToLayer: (_feature, latlng) =>
    //       circleMarker(latlng, {
    //         fillColor: '#247514',
    //         fill: true,
    //         color: '#247514',
    //         radius: 3,
    //         className: 'c-marker',
    //       }),
    //   });
    // const markerEl = L.marker(data, {
    //   opacity: 0.4,
    //   icon: customMarker,
    // })
    //   .addTo(map)
    // .on('click', () => {
    //   // console.log(setDisplayAlert);
    //   setDisplayAlert(true);
    //   setSelectedMarker(data.properties.id);
    // });

    // console.log(markerEl);
    // setMarkerInstances([...markerInstances, markerEl]);
    // });

    // On component unmount, destroy the map and all related events
    return () => {
      if (mapInstance) mapInstance.remove();
    };
  }, []);

  // TODO change data to carparking?
  // TODO allow multiselect
  // TODO on hover change style
  // TODO on click change style
  useEffect(() => {
    // if (selectedMarker && markerInstance) {
    //   markerInstance.setOpacity(1);
    // }
  }, [selectedMarker, markerInstances]);

  return <div className={styles.container} ref={containerRef} />;
};

export default Map;
