import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as o}from"./index-DL7Mpk60.js";import{M as i,S as r}from"./index-Cy_oA_Cz.js";import{G as l}from"./index.stories-CPWBU-AH.js";import{g as a}from"./getCrsRd-CfqIypfA.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BLahQ5py.js";import"./index-BSFfngg0.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./leaflet-src-Cg1j7jgN.js";/* empty css                */import"./toGeoJSON-5N07-ynB.js";import"./TileLayer-Buvsxlf4.js";import"./GeoJSON-8jFy4hkV.js";const c=`.container {
  height: 100%;
  min-height: 100%;

  > div {
    height: 100%;
  }
}
`,d=`import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L, { circleMarker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Feature, Point } from 'geojson';
import styles from './styles.module.css';
import type { Boom } from './types';
import data from './data.json';
import { toGeoJSON } from '@/utils/toGeoJSON';

const GeoJSONLayer = (): JSX.Element => {
  const pointToLayer = (
    _feature: Feature<Point, never>,
    latlng: L.LatLngExpression
  ) =>
    circleMarker(latlng, {
      fillColor: '#247514',
      fill: true,
      color: '#247514',
      radius: 3,
      className: 'c-marker',
    });

  return (
    <div className={styles.container}>
      <MapContainer
        center={L.latLng([52.370216, 4.895168])}
        zoom={8}
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
        <GeoJSON data={toGeoJSON(data as Boom[])} pointToLayer={pointToLayer} />
      </MapContainer>
    </div>
  );
};

export default GeoJSONLayer;
`;function s(t){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(n.h1,{id:"geojsonlayer",children:"GeoJSONLayer"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://github.com/Amsterdam/ee-react-map-demos/tree/main/src/pages/ReactLeaflet/GeoJSONLayer",rel:"nofollow",children:"GitHub Repo URL"})})}),`
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
`,e.jsxs(n.li,{children:["CRS handling (",e.jsx(n.a,{href:"#--getcrsrdts",children:"utils/getCrsRd.ts"}),")"]}),`
`]}),`
`,e.jsx(n.h2,{id:"description",children:"Description"}),`
`,e.jsx(n.p,{children:"This is a GeoJSON layer on a React-leaflet map."}),`
`,e.jsx(n.h2,{id:"background",children:"Background"}),`
`,e.jsx(n.h3,{id:"amsterdam-geojsontile-layer",children:"Amsterdam GeoJSON/tile layer"}),`
`,e.jsx(n.p,{children:`GeoJSON is a widely-used format for encoding geographic data structures using JavaScript Object Notation (JSON). If data is available in GeoJSON format, it often provides a universal solution for mapping libraries. The React-Leafelt GeoJSON component accepts a GeoJSON object as data.
The markers of a React-Leaflet GeoJSON component can be styled by the pointToLayer`}),`
`,e.jsx(n.h2,{id:"how-to-implement",children:"How to implement"}),`
`,e.jsx(n.p,{children:"To accomplish the Amstedam GeoJSON/tile layer there are two files:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["The React component",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--geojsonlayertsx",children:"GeoJSONLayer.tsx"})}),`
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
`,e.jsx(n.h4,{id:"--geojsonlayertsx",children:"- GeoJSONLayer.tsx"}),`
`,e.jsx(r,{code:d}),`
`,e.jsx(n.h3,{id:"2-css-styles",children:"2. CSS styles"}),`
`,e.jsx(n.h4,{id:"--stylesmodulecss",children:"- styles.module.css"}),`
`,e.jsx(r,{code:c}),`
`,e.jsx(n.h3,{id:"3-utils",children:"3. Utils"}),`
`,e.jsx(n.h4,{id:"--getcrsrdts",children:"- getCrsRd.ts"}),`
`,e.jsx(r,{code:a})]})}function b(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{b as default};
