import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as a}from"./index-DL7Mpk60.js";import{M as o,S as t}from"./index-Cy_oA_Cz.js";import{S as i}from"./index.stories-bihN9nK4.js";import{s as l}from"./styles.module-DA7f5T4E.js";import{s as c}from"./map.module-HmQxk2Tz.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BLahQ5py.js";import"./index-BSFfngg0.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./leaflet-src-Cg1j7jgN.js";/* empty css                */import"./index.esm-CaYGcPsA.js";import"./map-marker-DQBOr7GX.js";import"./styles.module-Cv8HlibT.js";const d=`import type { LatLngTuple, Map } from 'leaflet';
import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useContext,
} from 'react';
import type { GeoJSONFeature } from './types';

export interface MapState {
  mapInstance: Map | null;
  position: LatLngTuple;
  markerData: GeoJSONFeature[];
  displayAlert: boolean;
  selectedMarker: number | null;
}

type Action<T extends keyof MapState> = Dispatch<SetStateAction<MapState[T]>>;

export interface MapContextProps extends MapState {
  setMapInstance: Action<'mapInstance'>;
  setPosition: Action<'position'>;
  setMarkerData: Action<'markerData'>;
  setDisplayAlert: Action<'displayAlert'>;
  setSelectedMarker: Action<'selectedMarker'>;
}

export const MapContext = createContext<MapContextProps | null>(null);

export function useMapInstance(): NonNullable<MapContextProps> {
  const resolved = useContext(MapContext);

  if (resolved !== undefined && resolved !== null) {
    return resolved as NonNullable<MapContextProps>;
  }

  throw Error('Fout, geen mapinstance gevonden in context.');
}
`,p=`import type { FunctionComponent, PropsWithChildren } from 'react';
import { useState } from 'react';
import type { LatLngTuple } from 'leaflet';
import { MapContext } from './MapContext';
import type { GeoJSONFeature } from './types';
import data from './data.json';

const MapProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const [position, setPosition] = useState<LatLngTuple>([
    52.33981350119924, 4.904670904743209,
  ]);
  const [markerData, setMarkerData] = useState<GeoJSONFeature[]>(
    data as GeoJSONFeature[]
  );
  const [displayAlert, setDisplayAlert] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);

  return (
    <MapContext.Provider
      value={{
        mapInstance,
        setMapInstance,
        position,
        setPosition,
        displayAlert,
        setDisplayAlert,
        markerData,
        setMarkerData,
        selectedMarker,
        setSelectedMarker,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapProvider;
`,m=`import type { FunctionComponent } from 'react';
import Map from './Map';
import MapProvider from './MapProvider';
import Alert from './Alert';

const SingleMarkerSelect: FunctionComponent = () => (
  <MapProvider>
    <Map />
    <Alert />
  </MapProvider>
);

export default SingleMarkerSelect;
`,h=`import { useCallback, useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import L, { LayerGroup, type LeafletMouseEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from '../map.module.css';
import { useMapInstance } from './MapContext';
import customMarker from './icons/customMarker';
import type { SingleMarkerSelectExampleLayer } from './types';
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
`,x=`import type { FunctionComponent } from 'react';
import { Button, Paragraph } from '@amsterdam/design-system-react';
import styles from '../styles.module.css';
import { useMapInstance } from './MapContext';

const Alert: FunctionComponent = () => {
  const { displayAlert, setDisplayAlert, selectedMarker, setSelectedMarker } =
    useMapInstance();

  if (displayAlert) {
    return (
      <section
        className={\`\${styles['alert-wrapper']} ams-alert ams-alert--info\`}
      >
        <div className="ams-alert__content">
          <Paragraph size="small">
            You clicked on a marker with the ID{' '}
            <strong>{selectedMarker}</strong>
          </Paragraph>
          <br />
          <Button
            variant="primary"
            type="button"
            onClick={() => {
              setDisplayAlert(false);
              setSelectedMarker(null);
            }}
          >
            Reset
          </Button>
        </div>
      </section>
    );
  }

  return null;
};

export default Alert;
`,u=`.c-marker {
  opacity: 0.7;
}

.c-marker:hover {
  opacity: 1;
}

.c-marker--selected {
  opacity: 1;
}
`,f=`import type { IconOptions } from 'leaflet';
import MapMarkerIcon from '../../../../assets/icons/map-marker.svg';

const customMarkerOptions: IconOptions = {
  iconUrl: MapMarkerIcon,
  iconSize: [24, 32],
  iconAnchor: [12, 32],
  className: 'c-marker',
};

export default customMarkerOptions;
`,j=`import type { Feature, Point } from 'geojson';
import { Layer } from 'leaflet';

// Define the structure of your GeoJSON data
export interface GeoJSONProperties {
  id: number;
}

// Define the GeoJSON Feature with our properties
export interface GeoJSONFeature extends Feature<Point> {
  properties: GeoJSONProperties;
}

// Extend the Layer type to include the custom feature
export interface SingleMarkerSelectExampleLayer extends Layer {
  feature?: GeoJSONFeature;
}
`,y=`[
  {
    "type": "Feature",
    "properties": { "id": 919933 },
    "geometry": {
      "type": "Point",
      "coordinates": [4.904670904743209, 52.33981350119924]
    }
  },
  {
    "type": "Feature",
    "properties": { "id": 919934 },
    "geometry": {
      "type": "Point",
      "coordinates": [4.902692060023387, 52.340093024617616]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": 919935
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.85520763084145, 52.33198441265341]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": 919936
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.903670357200622, 52.34883680702146]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": 919937
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.875886424004287, 52.34105572150886]
    }
  }
]
`;function s(r){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:i}),`
`,e.jsx(n.h1,{id:"context---single-marker-select",children:"Context - Single Marker Select"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://github.com/Amsterdam/ee-react-map-demos/tree/main/src/pages/ContextExamples/SingleMarkerSelect",rel:"nofollow",children:"GitHub Repo URL"})})}),`
`,e.jsx(n.h4,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#description",children:"Description"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#how-to-implement",children:"How to implement"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`]}),`
`,e.jsx(n.h2,{id:"description",children:"Description"}),`
`,e.jsxs(n.p,{children:["Using the Amsterdam ",e.jsx(n.a,{href:"https://api.data.amsterdam.nl/v1/afvalwijzer",rel:"nofollow",children:"Afvalwijzer (Waste guide) API"})," we take a select number of glass disposal points. With this map you can select a single marker and the context stores the selected marker ID."]}),`
`,e.jsxs(n.p,{children:["The selected marker is accessible via state variable ",e.jsx(n.code,{children:"selectedMarker"})," and settable via the state method ",e.jsx(n.code,{children:"setSelectedMarker"}),"."]}),`
`,e.jsxs(n.p,{children:["When adding the markers to the map (lines 76-95) we add a ",e.jsx(n.code,{children:"click"})," event listener, which on callback sets ",e.jsx(n.code,{children:"displayAlert"})," to ",e.jsx(n.code,{children:"true"})," and the marker's data ID as the ",e.jsx(n.code,{children:"selectedMarker"}),". This ",e.jsx(n.code,{children:"displayAlert"})," boolean is unnecessary but added as example code."]}),`
`,e.jsx(n.p,{children:"The context handles the following state and methods:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mapInstance"})," - ",e.jsx(n.em,{children:"Referencing the active Leaflet map"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setMapInstance"})," - ",e.jsx(n.em,{children:"For setting the active Leaflet map into state"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"position"})," - ",e.jsx(n.em,{children:"Referencing the current centre point of the Leaflet map object"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setPosition"})," - ",e.jsx(n.em,{children:"For setting the current centre point of the Leaflet map object into state"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"markerData"})," - ",e.jsx(n.em,{children:"Data to output on the map, usually derived from a fetch request to an API"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setMarkerData"})," - ",e.jsx(n.em,{children:"For setting the map data into state"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"displayAlert"})," - ",e.jsx(n.em,{children:"A boolean to display (or not display) the alert"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setDisplayAlert"})," - ",e.jsx(n.em,{children:"For setting the alert display state"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selectedMarker"})," - ",e.jsx(n.em,{children:"An ID or null, which correspond to the marker data"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setSelectedMarker"})," - ",e.jsx(n.em,{children:"For setting the selected marker ID into state"})]}),`
`]}),`
`,e.jsx(n.h4,{id:"z-index-warning",children:"Z-index warning"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," When rendering custom elements on top of a Leaflet map, you need to account for CSS z-index stacking."]}),`
`,e.jsx(n.p,{children:"Leaflet renders its internal panes as stacked DOM elements with predefined z-index values. As a result, custom components may be rendered behind Leaflet’s map layers and appear invisible."}),`
`,e.jsxs(n.p,{children:["To prevent this, apply ",e.jsx(n.code,{children:"isolation: isolate"}),` to the map container so it forms its own stacking context. Previously, this was handled by relying on a fixed, application-wide z-index constant.
`,e.jsx("a",{href:"https://leafletjs.com/examples/map-panes/",target:"_blank",children:"More information"})]}),`
`,e.jsx(n.h2,{id:"how-to-implement",children:"How to implement"}),`
`,e.jsxs(n.p,{children:["To accomplish the MultiMarkerSelect component, there are 11 files, assuming the ",e.jsx(n.a,{href:"./?path=/docs/global-requirements--docs",children:"global requirements"})," are already implemented:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["The React components",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--mapcontextts",children:"MapContext.ts"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--mapprovidertsx",children:"MapProvider.tsx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--singlemarkerselecttsx",children:"SingleMarkerSelect.tsx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--maptsx",children:"Map.tsx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--alerttsx",children:"Alert.tsx"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["CSS styles",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--markercss",children:"marker.css"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--stylesmodulecss",children:"styles.module.css"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--mapmodulecss",children:"map.module.css"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Icons",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--iconscustommarkertsx",children:"icons/customMarker.tsx"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Type definitions",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--typests",children:"types.ts"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Data",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#--datajson",children:"data.json"})," ",e.jsx(n.em,{children:"(This static data should be replaced by a fetch call or other static data)"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"react-components",children:"React Components"}),`
`,e.jsx(n.h4,{id:"--mapcontextts",children:"- MapContext.ts"}),`
`,e.jsx(t,{code:d}),`
`,e.jsx(n.h4,{id:"--mapprovidertsx",children:"- MapProvider.tsx"}),`
`,e.jsx(t,{code:p}),`
`,e.jsx(n.h4,{id:"--singlemarkerselecttsx",children:"- SingleMarkerSelect.tsx"}),`
`,e.jsx(t,{code:m}),`
`,e.jsx(n.h4,{id:"--maptsx",children:"- Map.tsx"}),`
`,e.jsx(t,{code:h}),`
`,e.jsx(n.h4,{id:"--alerttsx",children:"- Alert.tsx"}),`
`,e.jsx(t,{code:x}),`
`,e.jsx(n.h3,{id:"css-styles",children:"CSS styles"}),`
`,e.jsx(n.h4,{id:"--markercss",children:"- marker.css"}),`
`,e.jsx(t,{code:u}),`
`,e.jsx(n.h4,{id:"--stylesmodulecss",children:"- styles.module.css"}),`
`,e.jsx(t,{code:l}),`
`,e.jsx(n.h4,{id:"--mapmodulecss",children:"- map.module.css"}),`
`,e.jsx(t,{code:c}),`
`,e.jsx(n.h3,{id:"icons",children:"Icons"}),`
`,e.jsx(n.h4,{id:"--iconscustommarkertsx",children:"- icons/customMarker.tsx"}),`
`,e.jsx(t,{code:f}),`
`,e.jsx(n.h3,{id:"type-definitions",children:"Type definitions"}),`
`,e.jsx(n.h4,{id:"--typests",children:"- types.ts"}),`
`,e.jsx(t,{code:j}),`
`,e.jsx(n.h3,{id:"data",children:"Data"}),`
`,e.jsx(n.h4,{id:"--datajson",children:"- data.json"}),`
`,e.jsx(t,{code:y})]})}function R(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{R as default};
