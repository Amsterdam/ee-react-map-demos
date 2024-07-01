import { useCallback, useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import L, { LayerGroup, LeafletMouseEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import styles from '../map.module.css';
import { useMapInstance } from './MapContext';
import customMarker from './icons/customMarker';
import { SingleMarkerSelectExampleLayer } from './types';
import './marker.css';

const Map: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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

  const onMarkerClick = useCallback((e: LeafletMouseEvent) => {
    setDisplayAlert(true);
    setSelectedMarker(e.target.feature.properties.id);
  }, []);

  useEffect(() => {
    if (containerRef.current === null || createdMapInstance.current !== false) {
      return;
    }

    const map = new L.Map(containerRef.current, {
      center: L.latLng(position),
      zoom: 10,
      layers: [
        L.tileLayer('https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png', {
          attribution: '',
          subdomains: ['t1', 't2', 't3', 't4'],
          tms: true,
        }),
      ],
      zoomControl: false,
      maxZoom: 16,
      minZoom: 6,
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

    // On component unmount, destroy the map and all related events
    return () => {
      if (mapInstance) mapInstance.remove();
    };
  }, []);

  // Add the markers
  useEffect(() => {
    if (mapInstance === null) {
      return;
    }

    const layerGroup = L.geoJson(markerData, {
      pointToLayer: (_feature, latlng) =>
        L.marker(latlng, {
          icon: L.icon(customMarker),
        }).on('click', onMarkerClick),
    });

    layerGroup.addTo(mapInstance);
    setFeatureLayer(layerGroup);

    // On component unmount, destroy the layer and all related events
    return () => {
      if (layerGroup) layerGroup.removeFrom(mapInstance);
    };
  }, [mapInstance]);

  // Handle active markers
  useEffect(() => {
    // Reset any already active markers
    if (featureLayer) {
      const markers = featureLayer.getLayers() as L.Marker[];

      if (markers) {
        markers.forEach(marker => marker.setIcon(L.icon(customMarker)));
      }
    }

    if (selectedMarker && featureLayer) {
      const marker = featureLayer
        .getLayers()
        .find(
          layer =>
            (layer as SingleMarkerSelectExampleLayer)?.feature?.properties
              ?.id === selectedMarker
        );

      if (marker) {
        (marker as L.Marker).setIcon(
          L.icon({ ...customMarker, className: 'c-marker c-marker--selected' })
        );
      }
    }
  }, [selectedMarker]);

  return <div className={styles.container} ref={containerRef} />;
};

export default Map;
