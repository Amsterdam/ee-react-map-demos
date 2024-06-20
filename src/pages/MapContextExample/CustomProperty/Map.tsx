import { useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import L, { Layer, LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import styles from '../map.module.css';
import { useMapInstance } from './MapContext';
import customMarker from './icons/customMarker';
import './marker.css';

// TODO rename types
// Define the structure of your GeoJSON properties, this ideally matches an API definition
interface MyGeoJSONProperties {
  id: string;
}

// Define the GeoJSON Feature with our properties
interface MyGeoJSONFeature extends GeoJSON.Feature<GeoJSON.GeometryObject> {
  properties: MyGeoJSONProperties;
}

// Extend the Layer type to include the custom feature
interface MyLayer extends Layer {
  feature?: MyGeoJSONFeature;
}

// TODO cleanup unused context state
// TODO cleanup typescript warnings + definitions
// TODO multiselect version with car parking
const Map: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const [markerInstances, setMarkerInstances] = useState<L.Marker[]>([]);
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
          (layer): layer is MyLayer =>
            (layer as MyLayer)?.feature?.properties?.id === selectedMarker
        );
      // Above replaces this in a TS friendly manner
      // .find(layer => layer?.feature.properties?.id === selectedMarker);

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
