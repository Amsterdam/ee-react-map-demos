import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{useMDXComponents as i}from"./index-DbIxU3Ed.js";import{M as l,d as n}from"./index-C1eDXqEW.js";import{B as o}from"./index.stories-CyIgkr4k.js";import{g as a}from"./getCrsRd-CT3l7UQo.js";import"./index-l2PZgWEW.js";import"./iframe-Cxzq8kIa.js";import"../sb-preview/runtime.js";import"./index-CaNG7YX3.js";import"./index-DXimoRZY.js";import"./index-B5xYo-Cg.js";import"./index-DrFu-skq.js";import"./getCrsRd-CkzE2KbR.js";const d=`import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import styles from './styles.module.css';

const BaseLayer = (): JSX.Element => (
  <div className={styles.container}>
    <MapContainer
      center={L.latLng([52.370216, 4.895168])}
      zoom={13}
      maxBounds={[
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ]}
      crs={getCrsRd()}
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
`,c=`.container {
  height: 100%;
  min-height: 100%;

  > div {
    height: 100%;
  }
}
`;function r(t){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsx(s.h1,{id:"requirements",children:"Requirements"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"../?path=/docs/global-requirements--docs",children:"See global requirements list"})}),`
`,e.jsxs(s.li,{children:["CRS handling (",e.jsx(s.a,{href:"#1-getcrsrdts",children:"utils/getCrsRd.ts"}),")"]}),`
`]}),`
`,e.jsx(s.h1,{id:"description",children:"Description"}),`
`,e.jsx(s.p,{children:"This is the Amsterdam base layer on a React-leaflet map. To accomplish this there are three files:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["The React components",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#1-baselayertsx",children:"BaseLayer.tsx"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["The CSS styles (1 file)",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#1-stylesmodulecss",children:"styles.module.css"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Utils (1 file)",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#1-getcrsrdts",children:"getCrsRd.ts"})}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["This util file handles the CRS (Coordinate Reference System) because Gemeente Amsterdam by default uses ",e.jsx(s.a,{href:"https://www.kadaster.nl/zakelijk/registraties/basisregistraties/rijksdriehoeksmeting/rijksdriehoeksstelsel",rel:"nofollow",children:"Rijksdriehoekscoördinaten"}),". Leaflet by default uses ",e.jsx(s.a,{href:"https://en.wikipedia.org/wiki/World_Geodetic_System",rel:"nofollow",children:"WGS84 (World Geodetic System)"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.h1,{id:"usage",children:"Usage"}),`
`,e.jsx(s.p,{children:"The following files are required:"}),`
`,e.jsx(s.h2,{id:"react-components",children:"React Components"}),`
`,e.jsx(s.h3,{id:"1-baselayertsx",children:"1. BaseLayer.tsx"}),`
`,e.jsx(n,{code:d}),`
`,e.jsx(s.h2,{id:"css-styling",children:"CSS Styling"}),`
`,e.jsx(s.h3,{id:"1-stylesmodulecss",children:"1. styles.module.css"}),`
`,e.jsx(n,{code:c}),`
`,e.jsx(s.h2,{id:"utils",children:"Utils"}),`
`,e.jsx(s.h3,{id:"1-getcrsrdts",children:"1. getCrsRd.ts"}),`
`,e.jsx(n,{code:a})]})}function k(t={}){const{wrapper:s}={...i(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(r,{...t})}):r(t)}export{k as default};
