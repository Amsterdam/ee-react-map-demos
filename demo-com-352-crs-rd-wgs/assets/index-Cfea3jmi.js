import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as r}from"./index-DL7Mpk60.js";import{M as i,S as t}from"./index-Cy_oA_Cz.js";import{S as a}from"./index.stories-BOK1VBbB.js";import{s as l}from"./styles.module-DA7f5T4E.js";import{s as c}from"./map.module-HmQxk2Tz.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BLahQ5py.js";import"./index-BSFfngg0.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./leaflet-src-Cg1j7jgN.js";/* empty css                */import"./index.esm-CaYGcPsA.js";import"./styles.module-Cv8HlibT.js";const p=`import type { LatLngTuple, Map } from 'leaflet';
import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useContext,
} from 'react';

export interface MapState {
  mapInstance: Map | null;
  position: LatLngTuple;
}

type Action<T extends keyof MapState> = Dispatch<SetStateAction<MapState[T]>>;

export interface MapContextProps extends MapState {
  setMapInstance: Action<'mapInstance'>;
  setPosition: Action<'position'>;
}

export const MapContext = createContext<MapContextProps | null>(null);

export function useMapInstance(): NonNullable<MapContextProps> {
  const resolved = useContext(MapContext);

  if (resolved !== undefined && resolved !== null) {
    return resolved as NonNullable<MapContextProps>;
  }

  throw Error('Fout, geen mapinstance gevonden in context.');
}
`,d=`import type { FunctionComponent, PropsWithChildren } from 'react';
import { useState } from 'react';
import type { LatLngTuple } from 'leaflet';
import { MapContext } from './MapContext';

const MapProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const [position, setPosition] = useState<LatLngTuple>([
    52.370192857022566, 4.895172252375137,
  ]);

  return (
    <MapContext.Provider
      value={{
        mapInstance,
        setMapInstance,
        position,
        setPosition,
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

const Position: FunctionComponent = () => (
  <MapProvider>
    <Map />
    <Alert />
  </MapProvider>
);

export default Position;
`,h=`import { useEffect, useRef } from 'react';
import type { FunctionComponent } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from '../map.module.css';
import { useMapInstance } from './MapContext';

const Map: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const createdMapInstance = useRef(false);

  const { mapInstance, setMapInstance, position, setPosition } =
    useMapInstance();

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

    map.on('moveend', () =>
      setPosition([map.getCenter().lat, map.getCenter().lng])
    );

    // On component unmount, destroy the map and all related events
    return () => {
      if (mapInstance) mapInstance.remove();
    };
  }, []);

  return <div className={styles.container} ref={containerRef} />;
};

export default Map;
`,x=`import type { FunctionComponent } from 'react';
import { Alert as AmsAlert, Paragraph } from '@amsterdam/design-system-react';
import { useMapInstance } from './MapContext';
import styles from '../styles.module.css';

const Alert: FunctionComponent = () => {
  const { position } = useMapInstance();

  return (
    <div className={styles['alert-wrapper']}>
      <AmsAlert heading="Coordinates" headingLevel={3} severity="success">
        <Paragraph size="small">
          {position ? \`\${position[0]}, \${position[1]}\` : ''}
        </Paragraph>
      </AmsAlert>
    </div>
  );
};

export default Alert;
`;function o(s){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(n.h1,{id:"context---single-marker-select",children:"Context - Single Marker Select"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://github.com/Amsterdam/ee-react-map-demos/tree/main/src/pages/ContextExamples/Position",rel:"nofollow",children:"GitHub Repo URL"})})}),`
`,e.jsx(n.h4,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#description",children:"Description"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#how-to-implement",children:"How to implement"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`]}),`
`,e.jsx(n.h2,{id:"description",children:"Description"}),`
`,e.jsxs(n.p,{children:["This is a simple Context example using the Amsterdam ",e.jsx(n.a,{href:"./?path=/docs/react-baselayer--docs",children:"BaseLayer"})," to display the map center point coordinates, including when the map moves."]}),`
`,e.jsxs(n.p,{children:["In the ",e.jsx(n.code,{children:"Map.tsx"})," component after creating the new Leaflet map (line #21) we add an event listener for ",e.jsx(n.code,{children:"mapmove"})," (line #47). In this callback we update the position context state:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`map.on('moveend', () =>
  setPosition([map.getCenter().lat, map.getCenter().lng])
);
`})}),`
`,e.jsxs(n.p,{children:["This map listener could alternatively be added in ",e.jsx(n.code,{children:"Alert.tsx"}),", saving the need for the ",e.jsx(n.code,{children:"position"})," and ",e.jsx(n.code,{children:"setPosition"})," calls in the context."]}),`
`,e.jsx(n.p,{children:"The context handles the following state and methods:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mapInstance"})," - ",e.jsx(n.em,{children:"Referencing the active Leaflet map"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setMapInstance"})," - ",e.jsx(n.em,{children:"For setting the active Leaflet map into state"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"position"})," - ",e.jsx(n.em,{children:"Referencing the current centre point of the Leaflet map object"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setPosition"})," - ",e.jsx(n.em,{children:"For setting the current centre point of the Leaflet map object into state"})]}),`
`]}),`
`,e.jsx(n.h4,{id:"z-index-warning",children:"Z-index warning"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," When rendering custom elements on top of a Leaflet map, you need to account for CSS z-index stacking."]}),`
`,e.jsx(n.p,{children:"Leaflet renders its internal panes as stacked DOM elements with predefined z-index values. As a result, custom components may be rendered behind Leaflet’s map layers and appear invisible."}),`
`,e.jsxs(n.p,{children:["To prevent this, apply ",e.jsx(n.code,{children:"isolation: isolate"}),` to the map container so it forms its own stacking context. Previously, this was handled by relying on a fixed, application-wide z-index constant.
`,e.jsx("a",{href:"https://leafletjs.com/examples/map-panes/",target:"_blank",children:"More information"})]}),`
`,e.jsx(n.h2,{id:"how-to-implement",children:"How to implement"}),`
`,e.jsxs(n.p,{children:["To accomplish the Position component, there are 7 files, assuming the ",e.jsx(n.a,{href:"./?path=/docs/global-requirements--docs",children:"global requirements"})," are already implemented:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["The React components",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--mapcontextts",children:"MapContext.ts"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--mapprovidertsx",children:"MapProvider.tsx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--positiontsx",children:"Position.tsx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--maptsx",children:"Map.tsx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--alerttsx",children:"Alert.tsx"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["CSS styles",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--stylesmodulecss",children:"styles.module.css"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--mapmodulecss",children:"map.module.css"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"react-components",children:"React Components"}),`
`,e.jsx(n.h4,{id:"--mapcontextts",children:"- MapContext.ts"}),`
`,e.jsx(t,{code:p}),`
`,e.jsx(n.h4,{id:"--mapprovidertsx",children:"- MapProvider.tsx"}),`
`,e.jsx(t,{code:d}),`
`,e.jsx(n.h4,{id:"--positiontsx",children:"- Position.tsx"}),`
`,e.jsx(t,{code:m}),`
`,e.jsx(n.h4,{id:"--maptsx",children:"- Map.tsx"}),`
`,e.jsx(t,{code:h}),`
`,e.jsx(n.h4,{id:"--alerttsx",children:"- Alert.tsx"}),`
`,e.jsx(t,{code:x}),`
`,e.jsx(n.h3,{id:"css-styles",children:"CSS styles"}),`
`,e.jsx(n.h4,{id:"--stylesmodulecss",children:"- styles.module.css"}),`
`,e.jsx(t,{code:l}),`
`,e.jsx(n.h4,{id:"--mapmodulecss",children:"- map.module.css"}),`
`,e.jsx(t,{code:c})]})}function F(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{F as default};
