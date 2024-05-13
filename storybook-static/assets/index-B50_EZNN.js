import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{useMDXComponents as i}from"./index-DbIxU3Ed.js";import{M as l,d as t}from"./index-C1eDXqEW.js";import{B as o}from"./index.stories-BRFPbm5v.js";import{g as a}from"./getCrsRd-CT3l7UQo.js";import"./index-l2PZgWEW.js";import"./iframe-Cxzq8kIa.js";import"../sb-preview/runtime.js";import"./index-CaNG7YX3.js";import"./index-DXimoRZY.js";import"./index-B5xYo-Cg.js";import"./index-DrFu-skq.js";import"./getCrsRd-CkzE2KbR.js";const c=`import { useEffect, useRef } from 'react';
import type { FunctionComponent } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import styles from './styles.module.css';

const BaseLayer: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (containerRef.current === null) {
      return;
    }

    mapRef.current = new L.Map(containerRef.current, {
      center: L.latLng([52.370216, 4.895168]),
      zoom: 12,
      layers: [
        L.tileLayer('https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png', {
          attribution: '',
          subdomains: ['t1', 't2', 't3', 't4'],
          tms: true,
        }),
      ],
      zoomControl: false,

      // Copied from Amsterdam-react-maps
      maxZoom: 16,
      minZoom: 3,
      crs: getCrsRd(),
      maxBounds: [
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ],
    });

    // Remove Leaflet link from the map
    mapRef.current.attributionControl.setPrefix(false);

    // eslint-disable-next-line consistent-return
    return () => {
      if (mapRef.current) mapRef.current.remove();
    };
  }, []);

  return <div className={styles.container} ref={containerRef} />;
};

export default BaseLayer;
`,d=`.container {
  height: 100%;
  min-height: 100%;
}
`;function r(s){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsx(n.h1,{id:"requirements",children:"Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/global-requirements--docs",children:"See global requirements list"})}),`
`,e.jsxs(n.li,{children:["CRS handling (",e.jsx(n.a,{href:"#1-getcrsrdts",children:"utils/getCrsRd.ts"}),")"]}),`
`]}),`
`,e.jsx(n.h1,{id:"description",children:"Description"}),`
`,e.jsx(n.p,{children:"This is the Amsterdam base layer on a plain Leaflet map. To accomplish this there are three files:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["The React components",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#1-baselayertsx",children:"BaseLayer.tsx"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["The CSS styles (1 file)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#1-stylesmodulecss",children:"styles.module.css"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Utils (1 file)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#1-getcrsrdts",children:"getCrsRd.ts"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["This util file handles the CRS (Coordinate Reference System) because Gemeente Amsterdam by default uses ",e.jsx(n.a,{href:"https://www.kadaster.nl/zakelijk/registraties/basisregistraties/rijksdriehoeksmeting/rijksdriehoeksstelsel",rel:"nofollow",children:"Rijksdriehoekscoördinaten"}),". Leaflet by default uses ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/World_Geodetic_System",rel:"nofollow",children:"WGS84 (World Geodetic System)"}),"."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h1,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"The following files are required:"}),`
`,e.jsx(n.h2,{id:"react-components",children:"React Components"}),`
`,e.jsx(n.h3,{id:"1-baselayertsx",children:"1. BaseLayer.tsx"}),`
`,e.jsx(t,{code:c}),`
`,e.jsx(n.h2,{id:"css-styling",children:"CSS Styling"}),`
`,e.jsx(n.h3,{id:"1-stylesmodulecss",children:"1. styles.module.css"}),`
`,e.jsx(t,{code:d}),`
`,e.jsx(n.h2,{id:"utils",children:"Utils"}),`
`,e.jsx(n.h3,{id:"1-getcrsrdts",children:"1. getCrsRd.ts"}),`
`,e.jsx(t,{code:a})]})}function b(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{b as default};
