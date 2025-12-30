import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as a}from"./index-DL7Mpk60.js";import{M as i,S as t}from"./index-BRPKOPNg.js";import{M as o}from"./index.stories-Byxq_n2C.js";import{g as l}from"./getCrsRd-CfqIypfA.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BWUQg448.js";import"./index-BSFfngg0.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./leaflet-src-Cg1j7jgN.js";/* empty css                */import"./TileLayer-Buvsxlf4.js";const c=`import L from 'leaflet';
import {
  MapContainer,
  Marker as MarkerLeaflet,
  TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './styles.module.css';
import defaultMarker from '@/utils/icons/defaultMarker';

const Marker = (): JSX.Element => (
  <div className={styles.container}>
    <MapContainer
      center={L.latLng([52.370216, 4.895168])}
      zoom={13}
      maxZoom={16}
      minZoom={6}
      maxBounds={[
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ]}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png"
        subdomains={['t1', 't2', 't3', 't4']}
        tms
      />
      <MarkerLeaflet
        position={L.latLng([52.370216, 4.895168])}
        icon={defaultMarker}
      />
    </MapContainer>
  </div>
);

export default Marker;
`,d=`.container {
  height: 100%;
  min-height: 100%;

  > div {
    height: 100%;
  }
}
`,h=`import L from 'leaflet';
import type { PointExpression } from 'leaflet';
import LocationIcon from '../../shared/assets/Location.svg?raw';

const defaultMarker = L.divIcon({
  html: LocationIcon,
  iconSize: [24, 32] as PointExpression,
  iconAnchor: [12, 32] as PointExpression,
  popupAnchor: [0, -30] as PointExpression,
  className: 'map-marker',
});

export default defaultMarker;
`;function s(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:o}),`
`,e.jsx(r.h1,{id:"marker",children:"Marker"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"./?path=/docs/leaflet-layers--docs#marker",children:"Background and use cases"})})," | ",e.jsx(r.strong,{children:e.jsx("a",{href:"https://github.com/Amsterdam/ee-react-map-demos/tree/main/src/pages/ReactLeaflet/Marker",target:"_blank",children:"GitHub Repo URL"})})]}),`
`,e.jsx(r.h4,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#requirements",children:"Requirements"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#description",children:"Description"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#how-to-implement",children:"How to implement"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#usage",children:"Usage"})}),`
`]}),`
`,e.jsx(r.h2,{id:"requirements",children:"Requirements"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"./?path=/docs/global-requirements--docs",children:"See global requirements list"})}),`
`,e.jsxs(r.li,{children:["This example is built upon the ",e.jsx(r.a,{href:"./?path=/docs/react-leaflet-baselayer--docs",children:"BaseMap component example"}),"."]}),`
`]}),`
`,e.jsx(r.h2,{id:"description",children:"Description"}),`
`,e.jsx(r.p,{children:`The Marker component renders a map centered on Amsterdam with a marker.
This component uses the React Leaflet library to create and manage the map.`}),`
`,e.jsx(r.h3,{id:"large-numbers-of-markers-can-lead-to-degraded-performance",children:"Large numbers of markers can lead to degraded performance"}),`
`,e.jsx(r.p,{children:`Every Marker is an HTML image element and showing one will have a ver slight negative impact on performance.
Showing tens of thousands of Markers wil have a significant impact.
Please don't do this without either clustering or setting the 'preferCanvas' option of the Leaflet map to 'true'.`}),`
`,e.jsx(r.h3,{id:"create-custom-marker-icon",children:"Create Custom Marker Icon:"}),`
`,e.jsx(r.p,{children:"Define a custom marker icon if needed. Make sure to replace the placeholder path with the correct path to your marker icon."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import markerIconUrl from '@/path/to/marker-icon.png'; // Correct path to your marker icon

const defaultMarker = L.icon({
  iconUrl: markerIconUrl,
  ...
});

export default defaultMarker;
`})}),`
`,e.jsx(r.h2,{id:"how-to-implement",children:"How to implement"}),`
`,e.jsx(r.p,{children:"To accomplish the Amstedam Marker there are the following files:"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:["The React component",`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#--markertsx",children:"Marker.tsx"})}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:["The CSS styles (1 file)",`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#--stylesmodulecss",children:"styles.module.css"})}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:["Utils (2 files)",`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#--defaultmarkerts",children:"defaultMarker.ts"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#--getcrsrdts",children:"getCrsRd.ts"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.p,{children:"The following files are required:"}),`
`,e.jsx(r.h3,{id:"1-react-component",children:"1. React Component"}),`
`,e.jsx(r.h4,{id:"--markertsx",children:"- Marker.tsx"}),`
`,e.jsx(t,{code:c}),`
`,e.jsx(r.h3,{id:"2-css-styles",children:"2. CSS styles"}),`
`,e.jsx(r.h4,{id:"--stylesmodulecss",children:"- styles.module.css"}),`
`,e.jsx(t,{code:d}),`
`,e.jsx(r.h3,{id:"3-utils",children:"3. Utils"}),`
`,e.jsx(r.h4,{id:"--defaultmarkerts",children:"- defaultMarker.ts"}),`
`,e.jsx(t,{code:h}),`
`,e.jsx(r.h4,{id:"--getcrsrdts",children:"- getCrsRd.ts"}),`
`,e.jsx(t,{code:l})]})}function v(n={}){const{wrapper:r}={...a(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{v as default};
