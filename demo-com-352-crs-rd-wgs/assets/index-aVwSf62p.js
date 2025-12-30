import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as a}from"./index-DL7Mpk60.js";import{M as i,S as t}from"./index-Cy_oA_Cz.js";import{B as l}from"./index.stories-CVRVzGJd.js";import{g as o}from"./getCrsRd-CfqIypfA.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BLahQ5py.js";import"./index-BSFfngg0.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./leaflet-src-Cg1j7jgN.js";/* empty css                */const d=`import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import styles from './styles.module.css';

const BaseLayerRD = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use state instead of a ref for storing the Leaflet map object otherwise you may run into DOM issues when React StrictMode is enabled
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);

  // This could be a useState but as we don't expect this to fire more than once, use ref as it is mutable and won't trigger any further re-render
  const createdMapInstance = useRef(false);

  useEffect(() => {
    // Ensure that the target DOM element exists and that the map doesn't already exist (to prevent duplicate renders in StrictMode)
    if (containerRef.current === null || createdMapInstance.current !== false) {
      return;
    }

    const map = new L.Map(containerRef.current, {
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
      maxZoom: 16,
      minZoom: 6,
      // Ensure proper handling for Rijksdriehoekcoördinaten
      crs: getCrsRd(),
      // Prevent the user browsing too far outside Amsterdam otherwise the map will render blank greyspace. Amsterdam tile layer only supports Amsterdam and the immediate surrounding areas
      maxBounds: [
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ],
    });

    // Remove Leaflet link from the map
    map.attributionControl.setPrefix(false);

    // Set the map as created and store the object to state
    createdMapInstance.current = true;
    setMapInstance(map);

    // On component unmount, destroy the map and all related events
    return () => {
      if (mapInstance) mapInstance.remove();
    };
  }, []);

  return <div className={styles.container} ref={containerRef} />;
};

export default BaseLayerRD;
`,c=`.container {
  height: 100%;
  min-height: 100%;
}
`;function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(n.h1,{id:"baselayerrd",children:"BaseLayerRD"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"./?path=/docs/leaflet-layers--docs#tilelayer",children:"Background"})})," | ",e.jsx(n.strong,{children:e.jsx("a",{href:"https://github.com/Amsterdam/ee-react-map-demos/tree/main/src/pages/BaseLayerRD",target:"_blank",children:"GitHub Repo URL"})})]}),`
`,e.jsx(n.h4,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#requirements",children:"Requirements"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#description",children:"Description"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#background",children:"Background"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#how-to-implement",children:"How to implement"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`]}),`
`,e.jsx(n.h2,{id:"requirements",children:"Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"./?path=/docs/global-requirements--docs",children:"See global requirements list"})}),`
`,e.jsxs(n.li,{children:["CRS handling (",e.jsx(n.a,{href:"#--getcrsrdts",children:"utils/getCrsRd.ts"}),")"]}),`
`]}),`
`,e.jsx(n.h2,{id:"description",children:"Description"}),`
`,e.jsx(n.p,{children:"This is the Amsterdam base/tile layer on a plain Leaflet map."}),`
`,e.jsx(n.h2,{id:"background",children:"Background"}),`
`,e.jsx(n.h3,{id:"amsterdam-basetile-layer",children:"Amsterdam base/tile layer"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx("a",{href:"https://leafletjs.com/reference.html#tilelayer",target:"_blank",children:"TileLayer"})," is composed of images, such as satellite imagery, that are composed of square tiles mosaicked together in columns and rows, giving the layer the appearance that it is one continuous image. These layers have several levels of detail (LOD) that permit users to zoom in to any region of the map and load additional tiles that depict features in higher resolution at larger map scales."]}),`
`,e.jsxs(n.p,{children:["The datateam Geo makes various reference maps based on reference data from team BenK (Basis- en Kernregistraties). They are available in ",e.jsx(n.a,{href:"./?path=/docs/coordinate-reference-systems-crs--docs",children:"various reference systems (Rijksdriehoek and Web Mercator)"})," and the following visualizations:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Standard (standaard)"}),`
`,e.jsx(n.li,{children:"Black and white (zwart-wit)"}),`
`,e.jsx(n.li,{children:"Light (light)"}),`
`]}),`
`,e.jsxs(n.p,{children:["These tiles are hosted in a ",e.jsx("a",{href:"https://azure.microsoft.com/en-us/products/storage/blobs",target:"_blank",children:"Azure Blob Store"})," and accessed via ",e.jsx("a",{href:"https://azure.microsoft.com/nl-nl/products/frontdoor",target:"_blank",children:"Azure Front Door"}),". The maptitles are made with ",e.jsx("a",{href:"https://github.com/Amsterdam/mapproxy",target:"_blank",children:"MapProxy"})," based on ",e.jsx("a",{href:"https://github.com/Amsterdam/mapserver",target:"_blank",children:"MapServer"}),"."]}),`
`,e.jsx(n.h3,{id:"coordinate-reference-system-handling",children:"Coordinate Reference System handling"}),`
`,e.jsxs(n.p,{children:["Leaflet by default uses EPSG:3857 (Web Mercator / WGS 84), however, the base layer by default uses Rijksdriehoekscoördinaten. Therefore, we include the ",e.jsx(n.code,{children:"utils/getCrsRd"})," file to appropriately handle coordinates. ",e.jsx(n.a,{href:"./?path=/docs/coordinate-reference-systems-crs--docs",children:"Read more about CRS"}),"."]}),`
`,e.jsx(n.h2,{id:"how-to-implement",children:"How to implement"}),`
`,e.jsxs(n.p,{children:["To accomplish the Amsterdam base/tile layer there are 3 files, assuming the ",e.jsx(n.a,{href:"./?path=/docs/global-requirements--docs",children:"global requirements"})," are already implemented:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["The React components",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--baselayerRDtsx",children:"BaseLayerRD.tsx"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["The CSS styles (1 file)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--stylesmodulecss",children:"styles.module.css"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Utils (1 file)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#--getcrsrdts",children:"getCrsRd.ts"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["This util file handles the CRS (Coordinate Reference System) because Gemeente Amsterdam by default uses ",e.jsx("a",{href:"https://www.kadaster.nl/zakelijk/registraties/basisregistraties/rijksdriehoeksmeting/rijksdriehoeksstelsel",target:"_blank",children:"Rijksdriehoekscoördinaten"}),". Leaflet by default uses ",e.jsx("a",{href:"https://en.wikipedia.org/wiki/World_Geodetic_System",target:"_blank",children:"WGS84 (World Geodetic System)"}),"."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"1-react-component",children:"1. React component"}),`
`,e.jsx(n.h4,{id:"--baselayerrdtsx",children:"- BaseLayerRD.tsx"}),`
`,e.jsx(t,{code:d}),`
`,e.jsx(n.h3,{id:"2-css-styles",children:"2. CSS styles"}),`
`,e.jsx(n.h4,{id:"--stylesmodulecss",children:"- styles.module.css"}),`
`,e.jsx(t,{code:c}),`
`,e.jsx(n.h3,{id:"3-utils",children:"3. Utils"}),`
`,e.jsx(n.h4,{id:"--getcrsrdts",children:"- getCrsRd.ts"}),`
`,e.jsx(t,{code:o})]})}function L(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{L as default};
