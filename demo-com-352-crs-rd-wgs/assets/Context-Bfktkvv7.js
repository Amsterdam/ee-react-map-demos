import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as r}from"./index-DL7Mpk60.js";import{M as o}from"./index-Cy_oA_Cz.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BLahQ5py.js";import"./index-BSFfngg0.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(n){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"react-context-examples",children:"React Context Examples"}),`
`,e.jsx(o,{title:"React-Context-Examples/Docs"}),`
`,e.jsx(t.h4,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#examples",children:"Examples overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#react-context",children:"React context"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#react-context-with-leaflet",children:"React context with Leaflet"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#context-criteria",children:"Context criteria"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#advanced-structure-tips",children:"Advanced structure tips"})}),`
`]}),`
`,e.jsx(t.h2,{id:"examples-overview",children:"Examples overview"}),`
`,e.jsx(t.p,{children:"Often with React and Leaflet, you may find the need to communicate/interact with the Leaflet map in different components. Handling Leaflet event callbacks and state management can become quite complex with React's parent-child component hierarchy."}),`
`,e.jsxs(t.p,{children:["This is when ",e.jsx("a",{href:"https://react.dev/learn/passing-data-deeply-with-context",target:"_blank",children:"React context"})," can help, these examples demonstrate various mapping solutions using React's context."]}),`
`,e.jsxs(t.h4,{id:"multiple-marker-select-advanced",children:[e.jsx(t.a,{href:"./?path=/docs/react-context-examples-multimarkerselect--docs",children:"Multiple Marker Select"})," ",e.jsx(t.em,{children:"(Advanced)"})]}),`
`,e.jsxs(t.p,{children:["Using Amsterdam taxi stands from the ",e.jsx(t.a,{href:"https://api.data.amsterdam.nl/v1/parkeervakken/",rel:"nofollow",children:"Parkeervakken (Parking Spaces) API"}),", you can select multiple layers. The context stores the selected layer IDs."]}),`
`,e.jsxs(t.h4,{id:"position-simple",children:[e.jsx(t.a,{href:"./?path=/docs/react-context-examples-position--docs",children:"Position"})," ",e.jsx(t.em,{children:"(Simple)"})]}),`
`,e.jsxs(t.p,{children:["Using the Amsterdam ",e.jsx(t.a,{href:"./?path=/docs/react-baselayer--docs",children:"BaseLayer"})," we display the map center point coordinates, including when the map moves."]}),`
`,e.jsxs(t.h4,{id:"single-marker-select-advanced",children:[e.jsx(t.a,{href:"./?path=/docs/react-context-examples-singlemarkerselect--docs",children:"Single marker select"})," ",e.jsx(t.em,{children:"(Advanced)"})]}),`
`,e.jsxs(t.p,{children:["Similar to the ",e.jsx(t.a,{href:"./?path=/story/react-context-examples-multimarkerselect--default",children:"MultiMarkerSelect example"})," this is using locations of glass disposal points from the ",e.jsx(t.a,{href:"https://api.data.amsterdam.nl/v1/afvalwijzer",rel:"nofollow",children:"Afvalwijzer (Waste guide) API"}),". You can select a single marker. The context stores the selected marker ID."]}),`
`,e.jsxs(t.h4,{id:"zoom-controls-simple",children:[e.jsx(t.a,{href:"./?path=/docs/react-context-examples-zoomcontrols--docs",children:"Zoom controls"})," ",e.jsx(t.em,{children:"(Simple)"})]}),`
`,e.jsxs(t.p,{children:["This demonstrates custom control buttons (from the ",e.jsx(t.a,{href:"https://designsystem.amsterdam.nl/",rel:"nofollow",children:"Amsterdam design system"}),") that control the map zoom levels. It uses context to interact directly with the Leaflet map object."]}),`
`,e.jsxs(t.h4,{id:"full-screen-zoom-controls-simple",children:[e.jsx(t.a,{href:"./?path=/docs/react-context-examples-zoomcontrolsfullscreen--docs",children:"Full-screen zoom controls"})," ",e.jsx(t.em,{children:"(Simple)"})]}),`
`,e.jsxs(t.p,{children:["Wrapped in components from the ",e.jsx(t.a,{href:"https://designsystem.amsterdam.nl/",rel:"nofollow",children:"Amsterdam design system"}),", this demonstrates custom control buttons that control the map zoom levels in an Amsterdam style webpage. It uses context to interact directly with the Leaflet map object."]}),`
`,e.jsx(t.h2,{id:"react-context",children:"React context"}),`
`,e.jsxs(t.p,{children:[e.jsx("a",{href:"https://react.dev/learn/passing-data-deeply-with-context",target:"_blank",children:"Context"})," provides a way to share values between components without passing props through every level of the component tree. This is particularly useful for global state management, for example, theme settings, user authentication, and localization, where certain data needs to be accessible by many components at different levels of the hierarchy."]}),`
`,e.jsx(t.p,{children:"Although it is a powerful tool for managing state across a component tree, it should be used accordingly to balance the ease of state management with performance considerations."}),`
`,e.jsx(t.h2,{id:"react-context-with-leaflet",children:"React context with Leaflet"}),`
`,e.jsx(t.p,{children:"Using context, you can shift a lot of your data handling and state management to a parent provider component. Then any child components to this provider component can be injected with any state and methods via a hook method. Therefore, avoiding passing props through multiple components."}),`
`,e.jsx(t.p,{children:"For projects with maps that serve minimal features (for example - renders marker(s); single layers; and/or there is minimal user-interaction with the map), it is probably overkill to implement context for your map component."}),`
`,e.jsx(t.h2,{id:"context-criteria",children:"Context criteria"}),`
`,e.jsxs(t.p,{children:["If the answer to any of the following is ",e.jsx(t.strong,{children:"yes"}),", context might be appropriate for your application."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"State Scope:"})," Is the state or data needed by many components at different levels of the component tree?"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Prop Drilling:"})," Are you passing props through multiple intermediate components that do not need them?"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Component Coupling:"})," Are your components becoming tightly coupled because of shared state or data dependencies?"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Reusability:"})," Will using context improve the reusability of your components?"]}),`
`]}),`
`,e.jsxs(t.p,{children:["If the answer to any of the following is ",e.jsx(t.strong,{children:"no"}),", context probably isn't useful for your application."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Frequency of Change:"})," Is the state or data frequently changing and causing many re-renders?"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Complexity vs. Simplicity:"})," Will using context add unnecessary complexity to your application?"]}),`
`]}),`
`,e.jsx(t.h2,{id:"advanced-structure-tips",children:"Advanced structure tips"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["Setup a 'Provider' component, to setup the initial state. Wrap this ",e.jsx(t.code,{children:"Provider"})," component around all components that should inherit context state and methods. ",e.jsx(t.a,{href:"./?path=/docs/react-context-examples-multimarkerselect--docs#--mapprovidertsx",children:"See example"}),"."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["When combined with TypeScript, definitions and undefined/null properties can make things confusing. This is where TypeScript's ",e.jsx(t.a,{href:"https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype",rel:"nofollow",children:e.jsx(t.code,{children:"NonNullable"})})," is useful. For example:"]}),`
`]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`export function useMapInstance(): NonNullable<YourContextProps> {
  const resolved = useContext(YourContext);

  if (resolved !== undefined && resolved !== null) {
    return resolved as NonNullable<YourContextProps>;
  }

  throw Error('Context not found!');
}
`})})]})}function f(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{f as default};
