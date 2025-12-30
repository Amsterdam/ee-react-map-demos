import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as a}from"./index-DL7Mpk60.js";import{M as o,S as t}from"./index-BRPKOPNg.js";import{W as i}from"./index.stories-BvZh_cca.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BWUQg448.js";import"./index-BSFfngg0.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./leaflet-src-Cg1j7jgN.js";/* empty css                */import"./TileLayer-Buvsxlf4.js";import"./GeoJSON-8jFy4hkV.js";const l=`import type { ReactNode } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './styles.module.css';

interface BaseLayerProps {
  children?: ReactNode;
}

const BaseLayer = ({ children }: BaseLayerProps) => (
  <div className={styles.container}>
    <MapContainer
      center={L.latLng([52.370216, 4.895168])}
      zoom={13}
      maxZoom={16}
      minZoom={6}
      maxBounds={[
        [52.36966606270195, 4.886568897250246],
        [52.37253554766886, 4.892099548064893],
      ]}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png"
        subdomains={['t1', 't2', 't3', 't4']}
        tms
      />
      {children}
    </MapContainer>
  </div>
);

export default BaseLayer;
`,c=`import { GeoJSON } from 'react-leaflet';
import BaseLayer from './BaseLayer';
import useGeoJSONData from './useGeoJSONData';

const WFSLayer = () => {
  const geoJsonData = useGeoJSONData(
    'https://map.data.amsterdam.nl/maps/bag?REQUEST=Getfeature&VERSION=1.1.0&SERVICE=wfs&TYPENAME=ms:pand&srsName=EPSG:4326&outputformat=geojson&bbox=4.886568897250246%2C52.36966606270195%2C4.892099548064893%2C52.37253554766886'
  );

  return <BaseLayer>{geoJsonData && <GeoJSON data={geoJsonData} />}</BaseLayer>;
};

export default WFSLayer;
`,h=`.container {
  height: 100%;
  min-height: 100%;

  > div {
    height: 100%;
  }
}
`,d=`import { useState, useEffect } from 'react';

const useGeoJSONData = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Error fetching GeoJSON data:', error));
  }, [url]);

  return data;
};

export default useGeoJSONData;
`;function r(n){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:i}),`
`,e.jsx(s.h1,{id:"wfslayer",children:"WFSLayer"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:e.jsx(s.a,{href:"./?path=/docs/leaflet-layers--docs#wfs-web-feature-service",children:"Background"})})," | ",e.jsx(s.strong,{children:e.jsx("a",{href:"https://github.com/Amsterdam/ee-react-map-demos/tree/main/src/pages/ReactLeaflet/WFSLayer",target:"_blank",children:"GitHub Repo URL"})})]}),`
`,e.jsx(s.h4,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#requirements",children:"Requirements"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#description",children:"Description"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#how-to-implement",children:"How to implement"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#usage",children:"Usage"})}),`
`]}),`
`,e.jsx(s.h2,{id:"requirements",children:"Requirements"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"./?path=/docs/global-requirements--docs",children:"See global requirements list"})}),`
`,e.jsxs(s.li,{children:["This example is built upon the ",e.jsx(s.a,{href:"./?path=/docs/react-leaflet-baselayer--docs",children:"BaseMap component example"}),"."]}),`
`,e.jsx(s.li,{children:"GeoJson data endpoint"}),`
`]}),`
`,e.jsx(s.h2,{id:"description",children:"Description"}),`
`,e.jsx(s.p,{children:"This is a WFS layer on a React Leaflet map."}),`
`,e.jsx(s.h2,{id:"how-to-implement",children:"How to implement"}),`
`,e.jsx(s.p,{children:"To accomplish a WFS layer there are four files:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["The React components",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#--baselayertsx",children:"Baselayer.tsx"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#--wfslayertsx",children:"WFSLayer.tsx"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["The custom hooks (1 file)",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#--usegeojsondatats",children:"useGeoJsonData.ts"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["The CSS styles (1 file)",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#--stylesmodulecss",children:"styles.module.css"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.p,{children:"The following files are required:"}),`
`,e.jsx(s.h3,{id:"1-react-components",children:"1. React components"}),`
`,e.jsx(s.h4,{id:"--baselayertsx",children:"- BaseLayer.tsx"}),`
`,e.jsx(t,{code:l}),`
`,e.jsx(s.h4,{id:"--wfslayertsx",children:"- WFSLayer.tsx"}),`
`,e.jsx(t,{code:c}),`
`,e.jsx(s.h3,{id:"2-custom-hooks",children:"2. Custom Hooks"}),`
`,e.jsx(s.h4,{id:"--usegeojsondatats",children:"- useGeoJsonData.ts"}),`
`,e.jsx(t,{code:d}),`
`,e.jsx(s.h3,{id:"3-css-styling",children:"3. CSS Styling"}),`
`,e.jsx(s.h4,{id:"--stylesmodulecss",children:"- styles.module.css"}),`
`,e.jsx(t,{code:h})]})}function N(n={}){const{wrapper:s}={...a(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{N as default};
