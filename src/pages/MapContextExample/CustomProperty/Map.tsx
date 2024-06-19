import { useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import L, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import styles from '../map.module.css';
import { useMapInstance } from './MapContext';
import customMarker from './icons/customMarker';
import './marker.css';

// TODO cleanup unused context state
// TODO cleanup typescript warnings + definitions
const Map: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [markerInstances, setMarkerInstances] = useState<L.Marker[]>([]);
  const createdMapInstance = useRef(false);
  const [featureLayer, setFeatureLayer] = useState<LayerGroup | null>(null);

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

    const layerGroup = L.geoJson(markerData, {
      pointToLayer: (feature, latlng) =>
        L.marker(latlng, {
          // opacity: 0.4,
          icon: L.icon(customMarker),
        }).on('click', () => {
          // console.log(setDisplayAlert);
          setDisplayAlert(true);
          setSelectedMarker(feature.properties.id);
        }),
    });

    layerGroup.addTo(map);
    setFeatureLayer(layerGroup);

    // TODO cleanup layerGroup on unmount
    // On component unmount, destroy the map and all related events
    return () => {
      if (mapInstance) mapInstance.remove();
    };
  }, []);

  // TODO change data to carparking?
  // TODO allow multiselect
  useEffect(() => {
    // Reset any already active markers
    if (featureLayer) {
      const markers = featureLayer.getLayers();

      if (markers) {
        markers.forEach(marker => marker.setIcon(L.icon(customMarker)));
      }
    }

    if (selectedMarker && featureLayer) {
      // markerInstance.setOpacity(1);
      console.log('getLayers', featureLayer.getLayers());
      const marker = featureLayer
        .getLayers()
        .find(layer => layer?.feature.properties?.id === selectedMarker);

      if (marker) {
        marker.setIcon(
          L.icon({ ...customMarker, className: 'c-marker c-marker--selected' })
        );
      }
    }
  }, [selectedMarker, markerInstances]);

  return <div className={styles.container} ref={containerRef} />;
};

export default Map;
