import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as a}from"./index-DL7Mpk60.js";import{M as o,S as t}from"./index-Cy_oA_Cz.js";import{W as l}from"./index.stories-BzHZ8WRJ.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BLahQ5py.js";import"./index-BSFfngg0.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";/* empty css                */import"./leaflet-src-Cg1j7jgN.js";const i=`import { useRef } from 'react';
import 'leaflet/dist/leaflet.css';

import styles from './styles.module.css';
import useGeoJSONLayer from './useGeoJSONLayer';
import useLeafletMap from './useLeafletMap';

const WFSLayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapInstance = useLeafletMap(containerRef);

  useGeoJSONLayer(
    mapInstance,
    'https://map.data.amsterdam.nl/maps/bag?REQUEST=Getfeature&VERSION=1.1.0&SERVICE=wfs&TYPENAME=ms:pand&srsName=EPSG:4326&outputformat=geojson&bbox=4.886568897250246%2C52.36966606270195%2C4.892099548064893%2C52.37253554766886'
  );

  return <div className={styles.container} ref={containerRef} />;
};

export default WFSLayer;
`,c=`.container {
  height: 100%;
  min-height: 100%;
}
`,m=`import { useEffect } from 'react';
import L from 'leaflet';

const useGeoJSONLayer = (map: L.Map | null, url: string) => {
  useEffect(() => {
    if (map === null) {
      return;
    }

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        return response.json();
      })
      .then(data => {
        L.geoJSON(data).addTo(map);
      })
      .catch(error => {
        console.error('Error fetching GeoJSON data:', error);
      });
  }, [map, url]);
};

export default useGeoJSONLayer;
`,h=`import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';
import L from 'leaflet';

const useLeafletMap = (container: RefObject<HTMLDivElement>) => {
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const createdMapInstance = useRef(false);

  useEffect(() => {
    if (container.current === null || createdMapInstance.current !== false) {
      return;
    }

    const map = new L.Map(container.current, {
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
      maxBounds: [
        [52.36966606270195, 4.886568897250246],
        [52.37253554766886, 4.892099548064893],
      ],
    });

    map.attributionControl.setPrefix(false);

    createdMapInstance.current = true;
    setMapInstance(map);

    return () => {
      if (mapInstance) mapInstance.remove();
    };
  }, []);

  return mapInstance;
};

export default useLeafletMap;
`;function r(s){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(n.h1,{id:"wfs-layer",children:"WFS Layer"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"./?path=/docs/leaflet-layers--docs#wfs-web-feature-service",children:"Background"})})," | ",e.jsx(n.strong,{children:e.jsx("a",{href:"https://github.com/Amsterdam/ee-react-map-demos/tree/main/src/pages/WFSLayer",target:"_blank",children:"GitHub Repo URL"})})]}),`
`,e.jsx(n.h4,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#requirements",children:"Requirements"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#description",children:"Description"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#how-to-implement",children:"How to implement"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`]}),`
`,e.jsx(n.h2,{id:"requirements",children:"Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"./?path=/docs/react-baselayer--docs",children:"BaseLayer"})}),`
`,e.jsx(n.li,{children:"GeoJson data endpoint"}),`
`]}),`
`,e.jsx(n.h2,{id:"description",children:"Description"}),`
`,e.jsx(n.p,{children:"This is a WFS layer on a plain Leaflet map."}),`
`,e.jsx(n.h2,{id:"how-to-implement",children:"How to implement"}),`
`,e.jsxs(n.p,{children:["To accomplish a WFS layer there are 4 files, assuming the ",e.jsx(n.a,{href:"./?path=/docs/global-requirements--docs",children:"global requirements"})," are already implemented:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["The React component",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--wfslayertsx",children:"WFSLayer.tsx"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["The custom hooks (2 files)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--usegeojsonlayerts",children:"useGeoJsonLayer.ts"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--useleafletmapts",children:"useLeafletMap.ts"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["The CSS styles (1 file)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--stylesmodulecss",children:"styles.module.css"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"1-react-component",children:"1. React component"}),`
`,e.jsx(n.h4,{id:"--wfslayertsx",children:"- WFSLayer.tsx"}),`
`,e.jsx(t,{code:i}),`
`,e.jsx(n.h3,{id:"2-custom-hooks",children:"2. Custom hooks"}),`
`,e.jsx(n.h4,{id:"--usegeojsonlayerts",children:"- useGeoJsonLayer.ts"}),`
`,e.jsx(t,{code:m}),`
`,e.jsx(n.h4,{id:"--useleafletmapts",children:"- useLeafletMap.ts"}),`
`,e.jsx(t,{code:h}),`
`,e.jsx(n.h3,{id:"3-css-styles",children:"3. CSS styles"}),`
`,e.jsx(n.h4,{id:"--stylesmodulecss",children:"- styles.module.css"}),`
`,e.jsx(t,{code:c})]})}function E(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{E as default};
