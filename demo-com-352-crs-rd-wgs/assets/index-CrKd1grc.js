import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as r}from"./index-DL7Mpk60.js";import{M as l,S as t}from"./index-BRPKOPNg.js";import{P as i}from"./index.stories-p7firLxy.js";import{g as a}from"./getCrsRd-CfqIypfA.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BWUQg448.js";import"./index-BSFfngg0.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";/* empty css                */import"./TileLayer-Buvsxlf4.js";import"./leaflet-src-Cg1j7jgN.js";const d=`import styles from '@/pages/ReactLeaflet/PolygonLayer/styles.module.css';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import data from './data.json';

const PolygonLayer = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <MapContainer
        center={[52.35672610204171, 4.868821590792892]}
        zoom={10}
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
        <Polygon
          positions={data.geometry.coordinates as LatLngExpression[][][]}
        />
      </MapContainer>
    </div>
  );
};

export default PolygonLayer;
`,c=`.container {
  height: 100%;
  min-height: 100%;

  > div {
    height: 100%;
  }
}
`;function o(s){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i}),`
`,e.jsx(n.h1,{id:"polygonlayer",children:"PolygonLayer"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"./?path=/docs/leaflet-layers--docs#polygon",children:"Background and use cases"})})," | ",e.jsx(n.strong,{children:e.jsx("a",{href:"https://github.com/Amsterdam/ee-react-map-demos/tree/main/src/pages/ReactLeaflet/PolygonLayer",target:"_blank",children:"GitHub Repo URL"})})]}),`
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
`,e.jsx(n.p,{children:"This is a polygon layer on a React-leaflet map. The polygon layer can be used to display various geometric shapes on the map, such as boundaries, regions, and other areas of interest."}),`
`,e.jsx(n.p,{children:"A Polygon layer allows users to display and interact with polygon shapes on a map. The polygons are defined by an array of latitude and longitude points, and they can be styled with various options such as colour, opacity, and fill patterns."}),`
`,e.jsx(n.h2,{id:"how-to-implement",children:"How to implement"}),`
`,e.jsx(n.p,{children:"To accomplish the Amstedam Polyygon layer there are three files:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["The React component",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--polygonlayertsx",children:"PolygonLayer.tsx"})}),`
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
`,e.jsx(n.h4,{id:"--polygonlayertsx",children:"- PolygonLayer.tsx"}),`
`,e.jsx(t,{code:d}),`
`,e.jsx(n.h3,{id:"2-css-styles",children:"2. CSS styles"}),`
`,e.jsx(n.h4,{id:"--stylesmodulecss",children:"- styles.module.css"}),`
`,e.jsx(t,{code:c}),`
`,e.jsx(n.h3,{id:"3-utils",children:"3. Utils"}),`
`,e.jsx(n.h4,{id:"--getcrsrdts",children:"- getCrsRd.ts"}),`
`,e.jsx(t,{code:a})]})}function M(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{M as default};
