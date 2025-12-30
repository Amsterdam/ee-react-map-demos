import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as r}from"./index-DL7Mpk60.js";import{M as s}from"./index-Cy_oA_Cz.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BLahQ5py.js";import"./index-BSFfngg0.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function o(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Leaflet - Icons"}),`
`,e.jsx(n.h1,{id:"leaflet---icons",children:"Leaflet - Icons"}),`
`,e.jsx(n.h2,{id:"in-short",children:"In short"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"L.icon"})," if you need a simple, image-based marker."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"L.divIcon"})," if you need a customizable marker with HTML content."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Your choice will depend on whether you prioritize performance and simplicity (",e.jsx(n.code,{children:"L.icon"}),") or customization and flexibility (",e.jsx(n.code,{children:"L.divIcon"}),"). If you need to add dynamic content, animations, or specific styling to your markers, ",e.jsx(n.code,{children:"L.divIcon"})," is the better option. For static images or less complex markers, ",e.jsx(n.code,{children:"L.icon"})," is more straightforward and efficient."]}),`
`,e.jsx(n.h2,{id:"background",children:"Background"}),`
`,e.jsx(n.p,{children:"When creating a marker, it is common to replace the default Leaflet marker image. There are two possible replacements:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"L.icon"})," - ",e.jsx(n.a,{href:"https://leafletjs.com/reference.html#icon",rel:"nofollow",children:"docs"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`var myIcon = L.icon({
  iconUrl: 'my-icon.png',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: 'my-icon-shadow.png',
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});
`})}),`
`,e.jsxs(n.p,{children:["In Leaflet, the default image marker has a shadow image, which is aligned according to the sizing options. This shadow can be disabled via setting ",e.jsx(n.code,{children:"shadowUrl"})," to ",e.jsx(n.code,{children:"null"}),"."]}),`
`,e.jsxs(n.p,{children:["If the marker is created with the ",e.jsx(n.code,{children:"draggable: true"})," option, the ",e.jsx(n.code,{children:"iconAnchor"})," option is quite important, as it corresponds with the 'tip of the icon' - where the cursor 'grabs' the marker."]}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"L.divIcon"})," - ",e.jsx(n.a,{href:"https://leafletjs.com/reference.html#divicon",rel:"nofollow",children:"docs"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`var myIcon = L.divIcon({
  className: 'my-div-icon',
  html: '<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg"><circle r="45" cx="50" cy="50" stroke="green" stroke-width="3" fill="red" /></svg>',
  iconSize: [24, 32],
  iconAnchor: [12, 32],
  popupAnchor: [0, -30],
});
`})}),`
`,e.jsxs(n.p,{children:["The main advantage with the ",e.jsx(n.code,{children:"L.divIcon"})," is that you can pass it any HTML element. These days icons are often SVG files, which work with CSS styling. Therefore, dynamic styling, such a different background-color on hover, is achievable - and works faster than having to write JS to listen for the ",e.jsx(n.code,{children:"mouseover"})," event on the marker and then run the associated side-effect."]}),`
`,e.jsx(n.p,{children:"One disadvantage of this is passing complex HTML elements could lead to a less performant map."})]})}function f(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{f as default};
