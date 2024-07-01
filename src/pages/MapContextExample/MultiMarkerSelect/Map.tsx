import { useCallback, useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import L, { LayerGroup, LeafletMouseEvent, Polygon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import styles from '../map.module.css';
import { useMapInstance } from './MapContext';
import { MultiMarkerSelectExampleLayer } from './types';

const Map: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const createdMapInstance = useRef(false);
  const [featureLayer, setFeatureLayer] = useState<LayerGroup | null>(null);

  const {
    mapInstance,
    setMapInstance,
    position,
    setPosition,
    markerData,
    selectedMarkers,
    setSelectedMarkers,
  } = useMapInstance();

  useEffect(() => {
    if (containerRef.current === null || createdMapInstance.current !== false) {
      return;
    }

    const map = new L.Map(containerRef.current, {
      center: L.latLng(position),
      zoom: 13,
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

  const onMarkerClick = useCallback(
    (e: LeafletMouseEvent) => {
      if (selectedMarkers.includes(e.sourceTarget.feature.properties.id)) {
        setSelectedMarkers([
          ...selectedMarkers.filter(
            marker => marker !== e.sourceTarget.feature.properties.id
          ),
        ]);
      } else {
        setSelectedMarkers([
          ...selectedMarkers,
          e.sourceTarget.feature.properties.id,
        ]);
      }
    },
    [featureLayer, selectedMarkers]
  );

  const onMouseOver = useCallback((e: LeafletMouseEvent) => {
    (e.target as Polygon).setStyle({
      fillColor: '#ffff00',
    });
  }, []);

  const onMouseOut = useCallback(
    (e: LeafletMouseEvent) => {
      const layerId = (e.target as MultiMarkerSelectExampleLayer).feature
        ?.properties.id;

      if (layerId && !selectedMarkers.includes(layerId)) {
        (e.target as Polygon).setStyle({
          fillColor: '#3388ff',
          color: '#3388ff',
        });
      }
    },
    [selectedMarkers]
  );

  // Add the markers
  useEffect(() => {
    if (mapInstance === null) {
      return;
    }

    const layerGroup = L.geoJson(markerData, {
      style: {
        opacity: 0.5,
      },
      onEachFeature: function (_feature, layer) {
        layer.on('mouseover', onMouseOver);
        layer.on('mouseout', onMouseOut);
        layer.on('click', onMarkerClick);
      },
    });

    layerGroup.addTo(mapInstance);
    setFeatureLayer(layerGroup);

    // On component unmount, destroy the layer and all related events
    return () => {
      if (layerGroup) layerGroup.removeFrom(mapInstance);
    };
  }, [mapInstance, selectedMarkers]);

  // Handle active markers
  useEffect(() => {
    if (featureLayer === null) {
      return;
    }

    if (selectedMarkers.length) {
      const polygons = featureLayer.getLayers() as L.Polygon[];
      const selectedPolygons = polygons.filter(polygon => {
        const layerId = polygon?.feature?.properties?.id;

        if (layerId) {
          return selectedMarkers.includes(layerId);
        }

        return false;
      });

      if (selectedPolygons) {
        selectedPolygons.forEach(selectedPolygon => {
          selectedPolygon.setStyle({
            fillColor: '#ffff00',
            fillOpacity: 0.8,
            opacity: 1,
          });
        });
      }
    }
  }, [selectedMarkers, featureLayer]);

  return <div className={styles.container} ref={containerRef} />;
};

export default Map;
