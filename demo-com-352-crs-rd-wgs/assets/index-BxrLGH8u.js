import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as a}from"./index-DL7Mpk60.js";import{M as i,S as t}from"./index-Cy_oA_Cz.js";import{M as o}from"./index.stories-Bp282XAb.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BLahQ5py.js";import"./index-BSFfngg0.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./leaflet-src-Cg1j7jgN.js";import"./map-marker-DQBOr7GX.js";const l=`import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import styles from './styles.module.css';
import customMarker from './icons/customMarker';

const Marker = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const [, setMarkerInstance] = useState<L.Marker | null>(null);
  const createdMapInstance = useRef(false);

  // Set the Leaflet map and Amsterdam base layer
  useEffect(() => {
    if (containerRef.current === null || createdMapInstance.current !== false) {
      return;
    }

    const map = new L.Map(containerRef.current, {
      center: L.latLng([52.370216, 4.895168]),
      zoom: 12,
      layers: [
        L.tileLayer('https://{s}.data.amsterdam.nl/topo_wm/{z}/{x}/{y}.png', {
          attribution: '',
          subdomains: ['t1', 't2', 't3', 't4'],
        }),
      ],
      zoomControl: false,
      maxZoom: 18,
      minZoom: 11,
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

  // Create the marker and add it to the map
  useEffect(() => {
    if (mapInstance) {
      const marker = L.marker([52.370216, 4.895168], {
        // There are many more options to choose from @see https://leafletjs.com/reference.html#marker
        icon: customMarker,
      })
        .addTo(mapInstance)
        // Marker click event listener example
        .on('click', () => alert('Marker click!'));
      setMarkerInstance(marker);
    }
  }, [mapInstance]);

  return <div className={styles.container} ref={containerRef} />;
};

export default Marker;
`,c=`.container {
  height: 100%;
  min-height: 100%;
}
`,h=`import L from 'leaflet';
import MapMarkerIcon from '../../../assets/icons/map-marker.svg';

const customMarker = L.icon({
  iconUrl: MapMarkerIcon,
  iconSize: [24, 32],
  iconAnchor: [12, 32],
  className: 'c-marker',
});

export default customMarker;
`,m=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="25px" height="32px" viewBox="0 0 25 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Name=Location</title>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Detailpage-+-map-(adres)" transform="translate(-1126.000000, -246.000000)">
            <g id="Name=Location" transform="translate(1126.000000, 246.000000)">
                <path d="M12.10759,32 L10.87839,30.9142 C10.42769,30.5455 0,21.2343 0,12.1076 C0,5.42074 5.42074,0 12.10759,0 C18.79439,0 24.21509,5.42074 24.21509,12.1076 C24.21509,21.2343 13.78749,30.5455 13.33679,30.9142 L12.10759,32 Z M12.10759,3.72855 C7.48229,3.7342 3.7342,7.4823 3.72855,12.1076 C3.72855,17.4955 8.97309,23.8361 12.09729,26.9501 C14.68889,24.3995 20.48659,17.9155 20.48659,12.1076 C20.48089,7.4823 16.73279,3.7342 12.10759,3.72855 Z" id="Location" fill="#004699"></path>
                <path d="M12.10759,3.72855 C7.48229,3.7342 3.7342,7.4823 3.72855,12.1076 C3.72855,17.4955 8.97309,23.8361 12.09729,26.9501 C14.68889,24.3995 20.48659,17.9155 20.48659,12.1076 C20.48089,7.4823 16.73279,3.7342 12.10759,3.72855 Z" id="Location-path" fill="#FFFFFF"></path>
                <path d="M12.10759,16.2049 C14.37039,16.2049 16.20489,14.3704 16.20489,12.1076 C16.20489,9.84467 14.37039,8.01024 12.10759,8.01024 C9.84469,8.01024 8.01029,9.84467 8.01029,12.1076 C8.01029,14.3704 9.84469,16.2049 12.10759,16.2049 Z" id="Location-path" fill="#004699"></path>
            </g>
        </g>
    </g>
</svg>`;function s(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:o}),`
`,e.jsx(n.h1,{id:"marker",children:"Marker"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"./?path=/docs/leaflet-layers--docs#marker",children:"Background and use cases"})})," | ",e.jsx(n.strong,{children:e.jsx("a",{href:"https://github.com/Amsterdam/ee-react-map-demos/tree/main/src/pages/Marker",target:"_blank",children:"GitHub Repo URL"})})]}),`
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
`,e.jsxs(n.li,{children:["This example is built upon the ",e.jsx(n.a,{href:"./?path=/docs/react-baselayer--docs",children:"BaseMap component example"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"description",children:"Description"}),`
`,e.jsx(n.p,{children:"A marker is used to display a location on a map. By default, a marker is a HTML image element rendered inside the parent map DOM element. This marker element can be configured, extended and (like in this example) replaced with another icon."}),`
`,e.jsxs(n.p,{children:["In this code example, the default Leaflet marker (",e.jsx("a",{href:"https://leafletjs.com/examples/layers-control/",target:"_blank",children:"example"}),") is replaced with the ",e.jsx(n.code,{children:"L.icon"})," (",e.jsx("a",{href:"https://leafletjs.com/reference.html#icon",target:"_blank",children:"docs"}),"); another alternative to this is the ",e.jsx(n.code,{children:"L.divIcon"})," (",e.jsx("a",{href:"https://leafletjs.com/reference.html#divicon",target:"_blank",children:"docs"}),"). ",e.jsx(n.a,{href:"./?path=/docs/leaflet-icons--docs",children:"Read more Leaflet icons here"}),"."]}),`
`,e.jsx(n.p,{children:"The primary code in regards to creating a Leaflet marker, is lines 50-59:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`useEffect(() => {
  if (mapInstance) {
    const marker = L.marker(L.latLng([52.370216, 4.895168]), {
      // There are many more options to choose from @see <a href="https://leafletjs.com/reference.html#marker" target="_blank">https://leafletjs.com/reference.html#marker</a>
      icon: customMarker
    }).addTo(mapInstance)
      .on('click', () => alert('Marker click!'));
    setMarkerInstance(marker);
  }
}, [mapInstance]);
`})}),`
`,e.jsxs(n.p,{children:["This creates a marker at the coordinates (52.370216, 4.895168), which is added to the map (via the ",e.jsx(n.code,{children:"addTo"})," method) and includes an example event listener that will be triggered on marker clicks. Then in the rest of the code, this marker element, can be referred to via the ",e.jsx(n.code,{children:"markerInstance"})," state variable and interacted with using Leaflet methods."]}),`
`,e.jsxs(n.p,{children:["A Leaflet marker element consists of ",e.jsx("a",{href:"https://leafletjs.com/reference.html#marker-move",target:"_blank",children:"events"}),", ",e.jsx("a",{href:"https://leafletjs.com/reference.html#marker-l-marker",target:"_blank",children:"methods"})," and ",e.jsx("a",{href:"https://leafletjs.com/reference.html#marker-icon",target:"_blank",children:"options"}),"."]}),`
`,e.jsx(n.h3,{id:"large-numbers-of-markers-can-lead-to-degraded-performance",children:"Large numbers of markers can lead to degraded performance"}),`
`,e.jsx(n.p,{children:"A standard Leaflet marker is a HTML image element. Therefore, if there are 100 markers, then there are 100 HTML image elements - each one with its own events, listeners and side-effects - another element to add to the DOM tree. Modern browsers and devices are quite efficient so negative performance often won't be noticed until you are handling tens of thousands of markers."}),`
`,e.jsxs(n.p,{children:["The real solution to this is to ideally never render so many markers simultaneously. However, with some APIs that isn't always an easy option. This is where clustering should be implemented or the ",e.jsx(n.code,{children:"preferCanvas"})," option is set to ",e.jsx(n.code,{children:"true"})," when creating your Leaflet map."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"preferCanvas"})," instructs Leaflet to use the HTML Canvas element, which performs a lot quicker than the traditional HTML DOM tree. ",e.jsx("a",{href:"https://leafletjs.com/reference.html#map-prefercanvas",target:"_blank",children:"See docs"}),"."]}),`
`,e.jsx(n.h2,{id:"how-to-implement",children:"How to implement"}),`
`,e.jsxs(n.p,{children:["To implement a Leaflet marker, there are 4 files, assuming the ",e.jsx(n.a,{href:"./?path=/docs/global-requirements--docs",children:"global requirements"})," are already implemented:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["The React component",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--markertsx",children:"Marker.tsx"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["The custom icon",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--iconscustommarkertsx",children:"icons/customMarker.tsx"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["The CSS styles (1 file)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--stylesmodulecss",children:"styles.module.css"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Assets",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#--map-markersvg",children:"assets/icons/map-marker.svg"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"1-react-component",children:"1. React component"}),`
`,e.jsx(n.h4,{id:"--markertsx",children:"- Marker.tsx"}),`
`,e.jsx(t,{code:l}),`
`,e.jsx(n.h3,{id:"2-custom-icon",children:"2. Custom icon"}),`
`,e.jsx(n.h4,{id:"--iconscustommarkertsx",children:"- icons/customMarker.tsx"}),`
`,e.jsx(t,{code:h}),`
`,e.jsx(n.h3,{id:"3-css-styles",children:"3. CSS styles"}),`
`,e.jsx(n.h4,{id:"--stylesmodulecss",children:"- styles.module.css"}),`
`,e.jsx(t,{code:c}),`
`,e.jsx(n.h3,{id:"4-assets",children:"4. Assets"}),`
`,e.jsx(n.h4,{id:"--map-markersvg",children:"- map-marker.svg"}),`
`,e.jsx(t,{code:m})]})}function y(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{y as default};
