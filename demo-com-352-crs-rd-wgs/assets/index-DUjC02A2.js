import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as r}from"./index-DL7Mpk60.js";import{M as a,S as s}from"./index-Cy_oA_Cz.js";import{P as i}from"./index.stories-1gyzkdF7.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BLahQ5py.js";import"./index-BSFfngg0.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./leaflet-src-Cg1j7jgN.js";/* empty css                */const o=`import { useEffect, useRef, useState } from 'react';
import L, { type LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './styles.module.css';
import data from './data.json';
import { lineHoverStyles, lineStyles } from './layerStyles';

const PolylineLayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const createdMapInstance = useRef(false);

  const polylineRef = useRef<L.Polyline | null>(null);

  // Set the Leaflet map and Amsterdam base layer
  useEffect(() => {
    if (containerRef.current === null || createdMapInstance.current !== false) {
      return;
    }

    const map = new L.Map(containerRef.current, {
      center: [52.37079908397672, 4.89500238214001],
      zoom: 15,
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

    map.attributionControl.setPrefix(false);

    createdMapInstance.current = true;
    setMapInstance(map);

    return () => {
      if (mapInstance) mapInstance.remove();
    };
  }, []);

  // Create the polygon layer and add it to the map
  useEffect(() => {
    if (mapInstance) {
      // TypeScript will often throw errors with Leaflet coordinate sets if you don't explicitly cast the type
      polylineRef.current = L.polyline(
        data.geometry.coordinates[0] as LatLngTuple[],
        { ...lineStyles, className: 'c-layer' }
      )
        .addTo(mapInstance)
        .on('mouseover', () => {
          polylineRef.current?.setStyle(lineHoverStyles);
        })
        .on('mouseout', () => {
          polylineRef.current?.setStyle(lineStyles);
        });
    }

    return () => {
      if (polylineRef.current && mapInstance) {
        mapInstance.removeLayer(polylineRef.current);
      }
    };
  }, [data, mapInstance]);

  return <div className={styles.container} ref={containerRef} />;
};

export default PolylineLayer;
`,c=`.container {
  height: 100%;
  min-height: 100%;
}
`,d=`export const lineStyles = {
  color: '#0000ff',
  opacity: 0.6,
  weight: 2,
};

export const lineHoverStyles = {
  color: '#ff0000',
  weight: 2,
};
`,h=`{
  "geometry": {
    "type": "MultiLineString",
    "coordinates": [
      [
        [52.37048257777301, 4.894874428904198],
        [52.370554861935126, 4.894898864319151],
        [52.37055767285022, 4.894899406706797],
        [52.37058186436687, 4.894908315567703],
        [52.37079908397672, 4.89500238214001],
        [52.37085087918953, 4.895030257356288],
        [52.37089819409757, 4.895061394436971],
        [52.370944121895796, 4.895096676809393],
        [52.370972589599155, 4.895120795880029]
      ]
    ]
  }
}
`;function l(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i}),`
`,e.jsx(n.h1,{id:"polylinelayer",children:"PolylineLayer"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"./?path=/docs/leaflet-layers--docs#polyline",children:"Background and use cases"})})," | ",e.jsx(n.strong,{children:e.jsx("a",{href:"https://github.com/Amsterdam/ee-react-map-demos/tree/main/src/pages/PolylineLayer",target:"_blank",children:"GitHub Repo URL"})})]}),`
`,e.jsx(n.h4,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#requirements",children:"Requirements"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#description",children:"Description"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#how-to-implement",children:"How to implement"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`]}),`
`,e.jsx(n.h2,{id:"requirements",children:"Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["This example is built upon the ",e.jsx(n.a,{href:"./?path=/docs/react-baselayer--docs",children:"BaseMap component example"}),"."]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"./?path=/docs/global-requirements--docs",children:"See global requirements list"})}),`
`]}),`
`,e.jsx(n.h2,{id:"description",children:"Description"}),`
`,e.jsxs(n.p,{children:["A polyline layer is used to display lines on a map. By default, a polyline layer is a HTML SVG element rendered inside the parent map DOM element. This polyline layer can be configured, extended and restyled (",e.jsx("a",{href:"https://leafletjs.com/reference.html#polyline",target:"_blank",children:"see docs"}),")."]}),`
`,e.jsx(n.p,{children:"The primary code in regards to creating a Leaflet polyline layer, is lines 64-87:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`useEffect(() => {
  if (mapInstance) {
    // TypeScript will often throw errors with Leaflet coordinate sets if you don't explicitly cast the type
    polylineRef.current = L.polyline(
      data.geometry.coordinates[0] as LatLngTuple[],
      lineStyles
    )
      .addTo(mapInstance)
      .on('mouseover', () => {
        polylineRef.current?.setStyle(lineHoverStyles);
      })
      .on('mouseout', () => {
        polylineRef.current?.setStyle(lineStyles);
      });
  }

  return () => {
    if (polylineRef.current && mapInstance) {
      mapInstance.removeLayer(polylineRef.current);
    }
  };
}, [data, mapInstance]);
`})}),`
`,e.jsx(n.h2,{id:"how-to-implement",children:"How to implement"}),`
`,e.jsxs(n.p,{children:["To implement a Leaflet polygon layer there are three files required, this example also uses an extra file for demo data, assuming the ",e.jsx(n.a,{href:"./?path=/docs/global-requirements--docs",children:"global requirements"})," are already implemented:"]}),`
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
`,e.jsxs(n.li,{children:["The layer styles",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--layerstylests",children:"layerStyles.ts"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Demo data (1 file)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#--datajson",children:"data.json"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"This data represents the coordinates for Vondelpark."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"1-react-component",children:"1. React component"}),`
`,e.jsx(n.h4,{id:"--polylinelayertsx",children:"- PolylineLayer.tsx"}),`
`,e.jsx(s,{code:o}),`
`,e.jsx(n.h3,{id:"2-css-styles",children:"2. CSS styles"}),`
`,e.jsx(n.h4,{id:"--stylesmodulecss",children:"- styles.module.css"}),`
`,e.jsx(s,{code:c}),`
`,e.jsx(n.h3,{id:"3-layer-styles",children:"3. Layer styles"}),`
`,e.jsx(n.h4,{id:"--layerstylests",children:"- layerStyles.ts"}),`
`,e.jsx(s,{code:d}),`
`,e.jsx(n.h3,{id:"4-demo-data",children:"4. Demo data"}),`
`,e.jsx(n.h4,{id:"--datajson",children:"- data.json"}),`
`,e.jsx(s,{code:h})]})}function T(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{T as default};
