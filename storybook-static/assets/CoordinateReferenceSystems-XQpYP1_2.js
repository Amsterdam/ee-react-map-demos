import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{useMDXComponents as r}from"./index-DbIxU3Ed.js";import{M as s}from"./index-Bn7NjsZi.js";import"./index-l2PZgWEW.js";import"./iframe-DhiI_5Bk.js";import"../sb-preview/runtime.js";import"./index-CaNG7YX3.js";import"./index-DXimoRZY.js";import"./index-B5xYo-Cg.js";import"./index-DrFu-skq.js";function n(o){const t={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Coordinate Reference Systems (CRS)"}),`
`,e.jsx(t.h1,{id:"coordinate-reference-systems",children:"Coordinate Reference Systems"}),`
`,e.jsx(t.p,{children:"A Coordinate Reference System (CRS) is a framework for specifying locations on the Earth's surface. Each CRS defines a method of representing geographic coordinates (for example, latitude and longitude) and projecting them onto a flat surface (for example, a PNG image file)."}),`
`,e.jsx(t.p,{children:"When working with web map libraries, understanding CRS is crucial for correctly positioning and displaying data."}),`
`,e.jsxs(t.p,{children:["Leaflet by default supports ",e.jsx(t.a,{href:"https://epsg.io/3857",rel:"nofollow",children:"Web mercator (EPSG:3857 / WGS84 / Pseudo-Mercator)"}),", which is also compatible with ",e.jsx(t.a,{href:"https://google.com/maps",rel:"nofollow",children:"Google Maps"}),", ",e.jsx(t.a,{href:"https://mapbox.com",rel:"nofollow",children:"Mapbox"})," and ",e.jsx(t.a,{href:"https://openstreetmap.org",rel:"nofollow",children:"Open Street Maps"}),"."]}),`
`,e.jsxs(t.p,{children:["Nine times out of ten (if not more), you will be using WGS84 (latitude-longitude coordinate pairs) when developing with maps. Google Maps and Leaflet both use latitude-longitude, which formed the standards for most map libraries. However, GeoJSON (and other protocols and tools) use the reverse order. For more info on the differences, and another reason why to never trust developers, ",e.jsx(t.a,{href:"https://macwright.com/lonlat/",rel:"nofollow",children:"read more"}),"."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Pro tip:"})," ",e.jsx(t.em,{children:"If you can't find your data on the map or the map is rendering around the east coast of Africa/Somalia, then you have your coordinates in the wrong order."})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Pro tip:"})," ",e.jsxs(t.em,{children:["When using the DSO API you can ",e.jsxs(t.a,{href:"https://api.data.amsterdam.nl/v1/docs/generic/rest/projections.html",rel:"nofollow",children:["append a header ",e.jsx(t.code,{children:"Accept-Crs"})," to set the return type for geometry data"]}),"."]})]}),`
`,e.jsx(t.h3,{id:"world-geodetic-system-1984-wgs84",children:"World Geodetic System 1984 (WGS84)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
    "type": "Point",
    "coordinates": [ 4.89089948838428, 52.37316397601927 ]
}
`})}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"WGS84 Coordinates for the Koninklijk Paleis Amsterdam"})}),`
`,e.jsx(t.p,{children:"The World Geodetic System 1984 (WGS84) is a globally defined datum developed and maintained by the United States National Geospatial-Intelligence Agency (NGA). It is consistent with the International Terrestrial Reference Frame (ITRF) at the 1cm level. WGS84 allows us to relate a 3-dimensional position to a consistent coordinate, in the format latitude (Φ), longitude (λ), ellipsoidal height (H), and time (t)."}),`
`,e.jsx(t.h3,{id:"rijksdriehoek-coordinates-rd",children:"Rijksdriehoek coordinates (RD)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
    "type": "Point",
    "coordinates": [ 121202, 487370 ]
}
`})}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"RD Coordinates for the Koninklijk Paleis Amsterdam"})}),`
`,e.jsxs(t.p,{children:["The Rijksdriehoek coordinate system is a Dutch geographic coordinate system. It was developed by the Dutch government's national mapping agency, ",e.jsx(t.a,{href:"https://www.kadaster.nl/",rel:"nofollow",children:"Kadaster"}),". This is often used as the default coordinate system with Gemeente data."]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.kadaster.nl/zakelijk/registraties/basisregistraties/rijksdriehoeksmeting/rijksdriehoeksstelsel",rel:"nofollow",children:"Read more (in Dutch)"})})]})}function j(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{j as default};
