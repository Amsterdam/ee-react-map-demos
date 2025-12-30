import{j as n}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as r}from"./index-DL7Mpk60.js";import{M as a,S as t}from"./index-Cy_oA_Cz.js";import{Z as l}from"./index.stories-D_h1PStq.js";import{s as i}from"./map.module-HmQxk2Tz.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BLahQ5py.js";import"./index-BSFfngg0.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./index.esm-CaYGcPsA.js";import"./leaflet-src-Cg1j7jgN.js";/* empty css                */import"./index.esm-DUPPOq0B.js";const c=`import type { Map } from 'leaflet';
import { createContext, useContext } from 'react';

export const MapContext = createContext<{ mapInstance: Map | null }>({
  mapInstance: null,
});

export function useMapInstance() {
  const { mapInstance } = useContext(MapContext);

  if (mapInstance === null) {
    throw Error('Fout, geen mapinstance gevonden in context.');
  }

  return mapInstance;
}
`,m=`import {
  type FunctionComponent,
  type PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from '../map.module.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContext } from './MapContext';

const MapProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const createdMapInstance = useRef(false);

  useEffect(() => {
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
      scrollWheelZoom: true,
      maxZoom: 16,
      minZoom: 6,
      maxBounds: [
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ],
    });

    // Remove Leaflet link from the map
    map.attributionControl.setPrefix(false);

    createdMapInstance.current = true;
    setMapInstance(map);

    return () => {
      if (mapInstance) mapInstance.remove();
    };
  }, [mapInstance, containerRef]);

  return (
    <>
      <div ref={containerRef} className={styles.container} />
      {!!mapInstance && (
        <MapContext.Provider value={{ mapInstance }}>
          {children}
        </MapContext.Provider>
      )}
    </>
  );
};

export default MapProvider;
`,d=`import Header from './Header';
import MapProvider from './MapProvider';
import ZoomControls from './ZoomControls';
import styles from './styles.module.css';

const ZoomControlsFullScreen = () => {
  return (
    <div className={styles.fullscreen}>
      <Header />
      <div className={styles.container}>
        <MapProvider>
          <ZoomControls />
        </MapProvider>
      </div>
    </div>
  );
};

export default ZoomControlsFullScreen;
`,p=`import type { FunctionComponent } from 'react';
import { Button } from '@amsterdam/design-system-react';
import { PlusIcon, MinusIcon } from '@amsterdam/design-system-react-icons';
import { useMapInstance } from './MapContext';
import styles from './styles.module.css';

const ZoomControls: FunctionComponent = () => {
  const mapInstance = useMapInstance();

  const handleZoomInClick = () => {
    if (mapInstance) {
      mapInstance.setZoom(mapInstance.getZoom() + 1);
    }
  };

  const handleZoomOutClick = () => {
    if (mapInstance) {
      mapInstance?.setZoom(mapInstance.getZoom() - 1);
    }
  };

  return (
    <div className={styles.buttons}>
      <Button
        variant="secondary"
        iconOnly
        icon={PlusIcon}
        onClick={handleZoomInClick}
      >
        Zoom in
      </Button>
      <Button
        variant="secondary"
        iconOnly
        icon={MinusIcon}
        onClick={handleZoomOutClick}
      >
        Zoom out
      </Button>
    </div>
  );
};

export default ZoomControls;
`,h=`import { Grid, PageHeader } from '@amsterdam/design-system-react';

const Header = () => {
  return (
    <Grid>
      <Grid.Cell span="all">
        <PageHeader />
      </Grid.Cell>
    </Grid>
  );
};

export default Header;
`,x=`.buttons {
  bottom: var(--ams-space-md, 24px);
  display: inline-flex;
  flex-direction: column;
  gap: var(--ams-space-sm, 8px);
  position: absolute;
  right: var(--ams-space-md, 24px);
}

.fullscreen {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100dvh;
  width: 100dvw;
}

.container {
  height: 100%;
  width: 100dvw;
}
`;function s(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:l}),`
`,n.jsx(e.h1,{id:"context---zoom-controls-full-screen",children:"Context - Zoom Controls (Full screen)"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:n.jsx(e.a,{href:"https://github.com/Amsterdam/ee-react-map-demos/tree/main/src/pages/ContextExamples/ZoomControlsFullScreen",rel:"nofollow",children:"GitHub Repo URL"})})}),`
`,n.jsx(e.h4,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#description",children:"Description"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#how-to-implement",children:"How to implement"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#usage",children:"Usage"})}),`
`]}),`
`,n.jsx(e.h2,{id:"description",children:"Description"}),`
`,n.jsxs(e.p,{children:["Using the ",n.jsx(e.a,{href:"https://designsystem.amsterdam/",rel:"nofollow",children:"Amsterdam Design System"})," we implemented some custom buttons to act as the ",n.jsx(e.a,{href:"https://leafletjs.com/reference.html#control-zoom",rel:"nofollow",children:"Leaflet map zoom controls"})," in a full webpage."]}),`
`,n.jsx(e.p,{children:"In this example, the Map context exports a single element - the Leaflet map object. This enables you to interact with your Leaflet map natively in any component (that is a child to the Map context provider component)."}),`
`,n.jsx(e.h4,{id:"z-index-warning",children:"Z-index warning"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note:"})," When rendering custom elements on top of a Leaflet map, you need to account for CSS z-index stacking."]}),`
`,n.jsx(e.p,{children:"Leaflet renders its internal panes as stacked DOM elements with predefined z-index values. As a result, custom components may be rendered behind Leaflet’s map layers and appear invisible."}),`
`,n.jsxs(e.p,{children:["To prevent this, apply ",n.jsx(e.code,{children:"isolation: isolate"}),` to the map container so it forms its own stacking context. Previously, this was handled by relying on a fixed, application-wide z-index constant.
`,n.jsx("a",{href:"https://leafletjs.com/examples/map-panes/",target:"_blank",children:"More information"})]}),`
`,n.jsx(e.h2,{id:"how-to-implement",children:"How to implement"}),`
`,n.jsxs(e.p,{children:["To accomplish the ZoomControls component, there are 8 files, assuming the ",n.jsx(e.a,{href:"./?path=/docs/global-requirements--docs",children:"global requirements"})," are already implemented:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["The React components",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#--zoomcontrolsfullscreentsx",children:"ZoomControlsFullScreen.tsx"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#--mapcontextts",children:"MapContext.ts"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#--mapprovidertsx",children:"MapProvider.tsx"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#--zoomcontrolstsx",children:"ZoomControls.tsx"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#--headertsx",children:"Header.tsx"})}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["CSS styles",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#--stylesmodulecss",children:"styles.module.css"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#--mapmodulecss",children:"map.module.css"})}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"react-components",children:"React Components"}),`
`,n.jsx(e.h4,{id:"--zoomcontrolsfullscreentsx",children:"- ZoomControlsFullScreen.tsx"}),`
`,n.jsx(t,{code:d}),`
`,n.jsx(e.h4,{id:"--mapcontextts",children:"- MapContext.ts"}),`
`,n.jsx(t,{code:c}),`
`,n.jsx(e.h4,{id:"--mapprovidertsx",children:"- MapProvider.tsx"}),`
`,n.jsx(t,{code:m}),`
`,n.jsx(e.h4,{id:"--zoomcontrolstsx",children:"- ZoomControls.tsx"}),`
`,n.jsx(t,{code:p}),`
`,n.jsx(e.h4,{id:"--headertsx",children:"- Header.tsx"}),`
`,n.jsx(t,{code:h}),`
`,n.jsx(e.h3,{id:"css-styles",children:"CSS styles"}),`
`,n.jsx(e.h4,{id:"--stylesmodulecss",children:"- styles.module.css"}),`
`,n.jsx(t,{code:x}),`
`,n.jsx(e.h4,{id:"--mapmodulecss",children:"- map.module.css"}),`
`,n.jsx(t,{code:i})]})}function F(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{F as default};
