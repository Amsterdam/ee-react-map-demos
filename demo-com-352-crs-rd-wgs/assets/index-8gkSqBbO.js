import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as i}from"./index-DL7Mpk60.js";import{M as a,S as n}from"./index-BRPKOPNg.js";import{B as l}from"./index.stories-C3arXOLo.js";import{g as o}from"./getCrsRd-CfqIypfA.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BWUQg448.js";import"./index-BSFfngg0.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./leaflet-src-Cg1j7jgN.js";/* empty css                */import"./TileLayer-Buvsxlf4.js";const d=`import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './styles.module.css';

const BaseLayer = (): JSX.Element => (
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
    </MapContainer>
  </div>
);

export default BaseLayer;
`,h=`.container {
  height: 100%;
  min-height: 100%;

  > div {
    height: 100%;
  }
}
`;function t(r){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(s.h1,{id:"baselayer",children:"BaseLayer"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:e.jsx(s.a,{href:"./?path=/docs/leaflet-layers--docs#tilelayer",children:"Background"})})," | ",e.jsx(s.strong,{children:e.jsx("a",{href:"https://github.com/Amsterdam/ee-react-map-demos/tree/main/src/pages/ReactLeaflet/BaseLayer",target:"_blank",children:"GitHub Repo URL"})})]}),`
`,e.jsx(s.h4,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#requirements",children:"Requirements"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#description",children:"Description"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#background",children:"Background"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#how-to-implement",children:"How to implement"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#usage",children:"Usage"})}),`
`]}),`
`,e.jsx(s.h2,{id:"requirements",children:"Requirements"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"./?path=/docs/global-requirements--docs",children:"See global requirements list"})}),`
`,e.jsxs(s.li,{children:["CRS handling (",e.jsx(s.a,{href:"#--getcrsrdts",children:"utils/getCrsRd.ts"}),")"]}),`
`]}),`
`,e.jsx(s.h2,{id:"description",children:"Description"}),`
`,e.jsx(s.p,{children:"This is the Amsterdam base/tile layer on a React-leaflet map."}),`
`,e.jsx(s.h2,{id:"background",children:"Background"}),`
`,e.jsx(s.h3,{id:"amsterdam-basetile-layer",children:"Amsterdam base/tile layer"}),`
`,e.jsxs(s.p,{children:["A ",e.jsx("a",{href:"https://leafletjs.com/reference.html#tilelayer",target:"_blank",children:"TileLayer"})," is composed of images, such as satellite imagery, that are composed of square tiles mosaicked together in columns and rows, giving the layer the appearance that it is one continuous image. These layers have several levels of detail (LOD) that permit users to zoom in to any region of the map and load additional tiles that depict features in higher resolution at larger map scales."]}),`
`,e.jsxs(s.p,{children:["The datateam Geo makes various reference maps based on reference data from team BenK (Basis- en Kernregistraties). They are available in ",e.jsx(s.a,{href:"./?path=/docs/coordinate-reference-systems-crs--docs",children:"various reference systems (Rijksdriehoek and Web Mercator)"})," and the following visualizations:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Standard (standaard)"}),`
`,e.jsx(s.li,{children:"Black and white (zwart-wit)"}),`
`,e.jsx(s.li,{children:"Light (light)"}),`
`]}),`
`,e.jsxs(s.p,{children:["These tiles are hosted in a ",e.jsx("a",{href:"https://azure.microsoft.com/en-us/products/storage/blobs",target:"_blank",children:"Azure Blob Store"})," and accessed via ",e.jsx("a",{href:"https://azure.microsoft.com/nl-nl/products/frontdoor",target:"_blank",children:"Azure Front Door"}),". The maptitles are made with ",e.jsx("a",{href:"https://github.com/Amsterdam/mapproxy",target:"_blank",children:"MapProxy"})," based on ",e.jsx("a",{href:"https://github.com/Amsterdam/mapserver",target:"_blank",children:"MapServer"}),"."]}),`
`,e.jsx(s.h3,{id:"coordinate-reference-system-handling",children:"Coordinate Reference System handling"}),`
`,e.jsxs(s.p,{children:["Leaflet by default uses EPSG:3857 (Web Mercator / WGS 84), however, the base layer by default uses Rijksdriehoekscoördinaten. Therefore, we include the ",e.jsx(s.code,{children:"utils/getCrsRd"})," file to appropriately handle coordinates. ",e.jsx(s.a,{href:"./?path=/docs/coordinate-reference-systems-crs--docs",children:"Read more about CRS"}),"."]}),`
`,e.jsx(s.h2,{id:"how-to-implement",children:"How to implement"}),`
`,e.jsx(s.p,{children:"To accomplish the Amstedam base/tile layer there are three files:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["The React component",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#--baselayertsx",children:"BaseLayer.tsx"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["The CSS styles (1 file)",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#--stylesmodulecss",children:"styles.module.css"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Utils (1 file)",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#--getcrsrdts",children:"getCrsRd.ts"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.p,{children:"The following files are required:"}),`
`,e.jsx(s.h3,{id:"1-react-component",children:"1. React component"}),`
`,e.jsx(s.h4,{id:"--baselayertsx",children:"- BaseLayer.tsx"}),`
`,e.jsx(n,{code:d}),`
`,e.jsx(s.h3,{id:"2-css-styles",children:"2. CSS styles"}),`
`,e.jsx(s.h4,{id:"--stylesmodulecss",children:"- styles.module.css"}),`
`,e.jsx(n,{code:h}),`
`,e.jsx(s.h3,{id:"3-utils",children:"3. Utils"}),`
`,e.jsx(s.h4,{id:"--getcrsrdts",children:"- getCrsRd.ts"}),`
`,e.jsx(n,{code:o})]})}function S(r={}){const{wrapper:s}={...i(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(t,{...r})}):t(r)}export{S as default};
