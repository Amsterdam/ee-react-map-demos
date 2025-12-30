import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as i}from"./index-DL7Mpk60.js";import{M as r,S as l}from"./index-Cy_oA_Cz.js";import{P as o}from"./index.stories-DlX83emH.js";import{g as a}from"./getCrsRd-CfqIypfA.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BLahQ5py.js";import"./index-BSFfngg0.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./leaflet-src-Cg1j7jgN.js";/* empty css                */import"./TileLayer-Buvsxlf4.js";const c=`import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import styles from '@/pages/ReactLeaflet/PolylineLayer/styles.module.css';
import L, { type LatLngTuple } from 'leaflet';
import data from './data.json';
import 'leaflet/dist/leaflet.css';

const PolylineLayer = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <MapContainer
        center={L.latLng([52.37079908397672, 4.89500238214001])}
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
        <Polyline positions={data.geometry.coordinates as LatLngTuple[][]} />
      </MapContainer>
    </div>
  );
};

export default PolylineLayer;
`,d=`.container {
  height: 100%;
  min-height: 100%;

  > div {
    height: 100%;
  }
}
`;function t(s){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:o}),`
`,e.jsx(n.h1,{id:"polylinelayer",children:"PolylineLayer"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"./?path=/docs/leaflet-layers--docs#polyline",children:"Background"})})," | ",e.jsx(n.strong,{children:e.jsx("a",{href:"https://github.com/Amsterdam/ee-react-map-demos/tree/main/src/pages/ReactLeaflet/PolylineLayer",target:"_blank",children:"GitHub Repo URL"})})]}),`
`,e.jsx(n.h4,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#requirements",children:"Requirements"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#description",children:"Description"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#how-to-implement",children:"How to implement"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`]}),`
`,e.jsx(n.h2,{id:"requirements",children:"Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"./?path=/docs/global-requirements--docs",children:"See global requirements list"})}),`
`,e.jsxs(n.li,{children:["This example is built upon the ",e.jsx(n.a,{href:"./?path=/docs/react-leaflet-baselayer--docs",children:"BaseMap component example"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"description",children:"Description"}),`
`,e.jsxs(n.p,{children:["This is a polyline layer on a React-leaflet map. A polyline layer is used to display lines on a map. It can be configured, extended and restyled (",e.jsx("a",{href:"https://leafletjs.com/reference.html#polyline",target:"_blank",children:"see docs"}),"). You can create a Polyline object with multiple separate lines (MultiPolyline) by passing an array of arrays of geographic points."]}),`
`,e.jsx(n.h2,{id:"how-to-implement",children:"How to implement"}),`
`,e.jsx(n.p,{children:"To accomplish the Amstedam base/tile layer there are three files:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["The React component",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--polylinelayertsx",children:"PolylineLayer.tsx"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["The CSS styles (1 file)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--stylesmodulecss",children:"styles.module.css"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Utils (1 file)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--getcrsrdts",children:"getCrsRd.ts"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"The following files are required:"}),`
`,e.jsx(n.h3,{id:"1-react-component",children:"1. React component"}),`
`,e.jsx(n.h4,{id:"--polylinelayertsx",children:"- PolylineLayer.tsx"}),`
`,e.jsx(l,{code:c}),`
`,e.jsx(n.h3,{id:"2-css-styles",children:"2. CSS styles"}),`
`,e.jsx(n.h4,{id:"--stylesmodulecss",children:"- styles.module.css"}),`
`,e.jsx(l,{code:d}),`
`,e.jsx(n.h3,{id:"3-utils",children:"3. Utils"}),`
`,e.jsx(n.h4,{id:"--getcrsrdts",children:"- getCrsRd.ts"}),`
`,e.jsx(l,{code:a})]})}function T(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{T as default};
