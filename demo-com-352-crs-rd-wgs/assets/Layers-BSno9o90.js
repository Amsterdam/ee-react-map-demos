import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as i}from"./index-DL7Mpk60.js";import{M as r}from"./index-BRPKOPNg.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BWUQg448.js";import"./index-BSFfngg0.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function n(s){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Leaflet - Layers"}),`
`,e.jsx(a.h1,{id:"leaflet---layers",children:"Leaflet - Layers"}),`
`,e.jsx(a.p,{children:"Leaflet has a number of layers that can be added to a map. These layers can be used to display different types of data on a map."}),`
`,e.jsx(a.h2,{id:"ui-layers",children:"UI layers"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsxs(a.strong,{children:[e.jsx(a.a,{href:"#marker",children:"Marker"}),":"]})," Used to display locations on a map. Markers are used to display points of interest on a map."]}),`
`,e.jsxs(a.li,{children:[e.jsxs(a.strong,{children:[e.jsx(a.a,{href:"#popup",children:"Popup"}),":"]})," Used to display popups on a map. Popups are used to display additional information about a point of interest on a map."]}),`
`,e.jsxs(a.li,{children:[e.jsxs(a.strong,{children:[e.jsx(a.a,{href:"#tooltip",children:"Tooltip"}),":"]})," Used to display tooltips on a map. Tooltips are used to display additional information about a point of interest on a map when the user hovers over it."]}),`
`]}),`
`,e.jsx(a.h2,{id:"raster-layers",children:"Raster layers"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsxs(a.strong,{children:[e.jsx(a.a,{href:"#imageoverlay",children:"ImageOverlay"}),":"]})," Used to display images on a map. Images can be used to display additional information about a point of interest on a map."]}),`
`,e.jsxs(a.li,{children:[e.jsxs(a.strong,{children:[e.jsx(a.a,{href:"#tilelayer",children:"TileLayer"}),":"]})," Used to display tile layers on a map. This is the most common layer used in Leaflet."]}),`
`,e.jsxs(a.li,{children:[e.jsxs(a.strong,{children:[e.jsx(a.a,{href:"#videooverlay",children:"VideoOverlay"}),":"]})," Used to display videos on a map. Videos can be used to display additional information about a point of interest on a map."]}),`
`,e.jsxs(a.li,{children:[e.jsxs(a.strong,{children:[e.jsx(a.a,{href:"#wms-web-map-service",children:"WMS (Web Map Service)"}),":"]})," This is another standard protocol for requesting geospatial data from a server. Leaflet has built-in support for WMS layers. WMS layers are used to display raster data on a map."]}),`
`]}),`
`,e.jsx(a.h2,{id:"vector-layers",children:"Vector layers"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsxs(a.strong,{children:[e.jsx(a.a,{href:"#canvas",children:"Canvas"}),":"]})," Used to display custom canvas elements on a map. Canvas elements can be used to display custom graphics on a map."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:e.jsx(a.a,{href:"#circle",children:"Circle"})}),": Used to draw circle overlays on a map"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:e.jsx(a.a,{href:"#circlemarker",children:"CircleMarker"})}),": Used to draw a circle of a fixed size with radius specified in pixels on a map."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:e.jsx(a.a,{href:"#polyline",children:"Polyline"})}),": Used to draw a series of connected line segments on the map. It can represent routes, paths, or any linear features."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:e.jsx(a.a,{href:"#polygon",children:"Polygon"})}),": Similar to a Polyline but it forms a closed shape, meaning the first and last points are connected."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:e.jsx(a.a,{href:"#rectangle",children:"Rectangle"})}),": Used to draw rectangle overlays on a map"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:e.jsx(a.a,{href:"#svgoverlay",children:"SVGOverlay"})}),": Used to load, display and provide DOM access to an SVG file over specific bounds of the map."]}),`
`]}),`
`,e.jsx(a.h2,{id:"other-layers",children:"Other layers"}),`
`,e.jsx(a.p,{children:"In addition to these layers, Leaflet also supports various types of data sources that can be displayed as layers on a map:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsxs(a.strong,{children:[e.jsx(a.a,{href:"#geojson",children:"GeoJSON"}),":"]})," This is a format for encoding geographic data structures. Leaflet has built-in support for GeoJSON layers. GeoJSON layers are used to display vector data on a map, and they can be styled to represent different types of features."]}),`
`,e.jsxs(a.li,{children:[e.jsxs(a.strong,{children:[e.jsx(a.a,{href:"#mvt-mapbox-vector-tiles",children:"MVT (Mapbox Vector Tiles)"}),":"]})," This is a format for encoding vector tile data. In Leaflet, you can use a plugin like ",e.jsx(a.code,{children:"leaflet-vector-tiles"})," to add MVT layers to your map. MVT layers are used to display vector data on a map."]}),`
`,e.jsxs(a.li,{children:[e.jsxs(a.strong,{children:[e.jsx(a.a,{href:"#wfs-web-feature-service",children:"WFS (Web Feature Service)"}),":"]})," This is a standard protocol for requesting geospatial data from a server. WFS layers are used to display vector data on a map."]}),`
`]}),`
`,e.jsx(a.p,{children:"In this guide, we'll take a closer look at some of the most common layers in Leaflet and how you can use them to create interactive maps."}),`
`,e.jsx(a.h1,{id:"ui-layers-1",children:"UI layers"}),`
`,e.jsx(a.h2,{id:"marker",children:"Marker"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.strong,{children:"Marker"}),` in Leaflet is used to display locations on a map. Markers are used to display points of interest on a map, such as restaurants, shops, or tourist attractions.
Markers can be customized with icons, popups, and tooltips to provide additional information about the point of interest.`]}),`
`,e.jsx(a.p,{children:`The Marker examples show how to create a simple map with markers at specific locations.
See:`}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["Example: ",e.jsx(a.a,{href:"./?path=/docs/react-marker--docs",children:"Marker (React + Leaflet)"})]}),`
`,e.jsxs(a.li,{children:["Example: ",e.jsx(a.a,{href:"./?path=/docs/react-leaflet-marker--docs",children:"Marker (React + React-leaflet)"})]}),`
`]}),`
`,e.jsx(a.h3,{id:"usage-scenarios",children:"Usage scenarios"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Location Pins"}),": Highlighting specific locations such as restaurants, shops, landmarks, etc."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Data Visualization"}),": Displaying data points like weather stations, earthquake epicenters, etc."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Interactive Maps"}),": Providing interactive elements for user interaction, such as selecting meeting points or identifying places of interest."]}),`
`]}),`
`,e.jsx(a.h2,{id:"popup",children:"Popup"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.strong,{children:"Popup"}),` in Leaflet is used to display popups on a map. Popups are used to display additional information about a point of interest on a map.
Popups can contain text, images, videos, and other HTML elements.`]}),`
`,e.jsx(a.h2,{id:"tooltip",children:"Tooltip"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.strong,{children:"Tooltip"}),` in Leaflet is used to display tooltips on a map. Tooltips are used to display additional information about a point of interest on a map when the user hovers over it.
Tooltips can contain text, images, videos, and other HTML elements.`]}),`
`,e.jsx(a.h1,{id:"raster-layers-1",children:"Raster layers"}),`
`,e.jsx(a.h2,{id:"imageoverlay",children:"ImageOverlay"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.strong,{children:"ImageOverlay"}),` in Leaflet is used to display images on a map. Images can be used to display additional information about a point of interest on a map.
Image overlays can be used to display floor plans, historical maps, or other images that provide context for a map.`]}),`
`,e.jsx(a.h2,{id:"tilelayer",children:"TileLayer"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.strong,{children:"TileLayer"}),` in Leaflet is used to display tile layers on a map. Tile layers are images that are loaded and displayed on a map as the user pans and zooms.
Leaflet has built-in support for a number of tile layer providers, including OpenStreetMap, Mapbox, and Stamen.
You can also create custom tile layers using your own tile server or by using a third-party tile provider.`]}),`
`,e.jsx(a.p,{children:`The TileLayer is used in the BaseLayer examples in this guide. The BaseLayer examples show how to create a simple map with a tile layer as the base layer.
See:`}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["Example: ",e.jsx(a.a,{href:"./?path=/docs/react-baselayer--docs",children:"BaseLayer (React + Leaflet)"})]}),`
`,e.jsxs(a.li,{children:["Example: ",e.jsx(a.a,{href:"./?path=/docs/react-leaflet-baselayer--docs",children:"BaseLayer (React + React-leaflet)"})]}),`
`]}),`
`,e.jsx(a.h2,{id:"videooverlay",children:"VideoOverlay"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.strong,{children:"VideoOverlay"}),` in Leaflet is used to display videos on a map. Videos can be used to display additional information about a point of interest on a map.
VideoOverlay can be used to display videos of events, attractions, or other points of interest on a map.`]}),`
`,e.jsx(a.p,{children:"The VideoOverlay examples show how to create a simple map with a video overlay."}),`
`,e.jsx(a.h2,{id:"wms-web-map-service",children:"WMS (Web Map Service)"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.strong,{children:"WMS"}),` layer in Leaflet is used to display raster data on a map, it can be used to display satellite imagery, aerial photography, and other raster data.
WMS is a standard protocol for requesting geospatial data from a server. Leaflet has built-in support for WMS layers (using `,e.jsx(a.code,{children:"L.tileLayer.wms"}),")."]}),`
`,e.jsx(a.p,{children:"The WMS examples show how to create a simple map with a WMS layer."}),`
`,e.jsx(a.p,{children:"See:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["Example: ",e.jsx(a.a,{href:"./?path=/docs/react-wmslayer--docs",children:"WMSLayer (React + Leaflet)"})]}),`
`,e.jsxs(a.li,{children:["Example: ",e.jsx(a.a,{href:"./?path=/docs/react-leaflet-wmslayer--docs",children:"WMSLayer (React + React-leaflet)"})]}),`
`]}),`
`,e.jsx(a.h3,{id:"usage-scenarios-1",children:"Usage scenarios"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"Environmental Monitoring: Displaying real-time data on air quality, water quality, or weather patterns."}),`
`,e.jsx(a.li,{children:"Urban Planning: Showing zoning maps, land use plans, or transportation networks."}),`
`,e.jsx(a.li,{children:"Historical Maps: Overlaying historical maps on current maps to show changes over time."}),`
`,e.jsx(a.li,{children:"Disaster Management: Displaying flood zones, earthquake impacts, or wildfire extents."}),`
`,e.jsx(a.li,{children:"Biodiversity and Conservation: Showing protected areas, wildlife habitats, or vegetation types."}),`
`]}),`
`,e.jsx(a.h1,{id:"vector-layers-1",children:"Vector layers"}),`
`,e.jsx(a.h2,{id:"canvas",children:"Canvas"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.strong,{children:"Canvas"}),` in Leaflet is used to display custom canvas elements on a map. Canvas elements can be used to display custom graphics on a map.
Canvas elements can be used to create custom visualizations, animations, or interactive elements on a map.`]}),`
`,e.jsx(a.h2,{id:"circle",children:"Circle"}),`
`,e.jsxs(a.p,{children:["A ",e.jsx(a.strong,{children:"Circle"})," in Leaflet is used to draw circle overlays on a map. Unlike a CircleMarker, a Circle uses the map's CRS (Coordinate Reference System) and scales its radius with the map's zoom level."]}),`
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"Use case"}),": Useful for marking areas with a specific radius, such as denoting a range around a point of interest."]}),`
`,e.jsx(a.h2,{id:"circlemarker",children:"CircleMarker"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.strong,{children:"CircleMarker"})," in Leaflet is used to draw fixed circles on a map. It is essentially a circle icon that remains a consistent size no matter the map zoom level."]}),`
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"Use case"}),": Useful for pinpointing locations with a consistent visual size, such as marking cities or specific points on a map."]}),`
`,e.jsx(a.h2,{id:"polyline",children:"Polyline"}),`
`,e.jsxs(a.p,{children:["A ",e.jsx(a.strong,{children:"Polyline"})," in Leaflet is used to draw a series of connected line segments on the map. It can represent routes, paths, or any linear features."]}),`
`,e.jsx(a.p,{children:"See:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["Example: ",e.jsx(a.a,{href:"./?path=/docs/react-polylinelayer--docs",children:"PolylineLayer (React + Leaflet)"})]}),`
`,e.jsxs(a.li,{children:["Example: ",e.jsx(a.a,{href:"./?path=/docs/react-leaflet-polylinelayer--docs",children:"PolylineLayer (React + React-leaflet)"})]}),`
`]}),`
`,e.jsx(a.h3,{id:"usage-scenarios-2",children:"Usage Scenarios"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"Routing and Navigation: Displaying the route for a navigation system."}),`
`,e.jsx(a.li,{children:"Hiking and Biking Trails: Visualizing outdoor recreational trails."}),`
`,e.jsx(a.li,{children:"Geographical Boundaries and Borders: Defining administrative or geographical boundaries."}),`
`,e.jsx(a.li,{children:"Public Transportation Routes: Mapping bus, train, or tram routes."}),`
`,e.jsx(a.li,{children:"Historical Paths and Routes: Visualizing historical routes or trade paths."}),`
`,e.jsx(a.li,{children:"Event Tracking and Routes: Showing routes for events like marathons or parades."}),`
`,e.jsx(a.li,{children:"Data Visualization: Representing data flows or connections."}),`
`]}),`
`,e.jsx(a.h2,{id:"polygon",children:"Polygon"}),`
`,e.jsxs(a.p,{children:["The Polygon layer in Leaflet is similar to a ",e.jsx(a.a,{href:"#polyline",children:"Polyline"})," but it forms a closed shape, meaning the first and last points are connected."]}),`
`,e.jsx(a.p,{children:"See:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["Example: ",e.jsx(a.a,{href:"./?path=/docs/react-polygonlayer--docs",children:"PolygonLayer (React + Leaflet)"})]}),`
`,e.jsxs(a.li,{children:["Example: ",e.jsx(a.a,{href:"./?path=/docs/react-leaflet-polygonlayer--docs",children:"PolygonLayer (React + React-leaflet)"})]}),`
`]}),`
`,e.jsx(a.h3,{id:"usage-scenarios-3",children:"Usage Scenarios"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"Mapping Regions: Representing administrative boundaries such as countries, states, or municipalities."}),`
`,e.jsx(a.li,{children:"Highlighting Zones: Indicating specific zones like school districts, voting districts, or postal codes."}),`
`,e.jsx(a.li,{children:"Spatial Analysis: Visualizing areas affected by events such as weather phenomena, natural disasters, or market areas."}),`
`,e.jsx(a.li,{children:"Interactive Applications: Enabling users to draw and interact with polygons to create custom regions for analysis or reporting."}),`
`]}),`
`,e.jsx(a.h2,{id:"rectangle",children:"Rectangle"}),`
`,e.jsx(a.p,{children:"The Rectangle layer in Leaflet is a specialized polygon that represents a rectangle defined by its corners."}),`
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"Use case"}),": Useful for highlighting rectangular areas such as bounding boxes, city blocks, or property boundaries."]}),`
`,e.jsx(a.h2,{id:"svgoverlay",children:"SVGOverlay"}),`
`,e.jsx(a.p,{children:"The SVGOverlay layer in Leaflet allows you to overlay an SVG (Scalable Vector Graphics) image onto the map. It can be positioned and scaled according to the map's zoom level and bounds."}),`
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"Use case"}),": Useful for adding custom vector graphics that need to scale and transform with the map, such as custom markers, diagrams, or illustrations."]}),`
`,e.jsx(a.h1,{id:"other-layers-1",children:"Other layers"}),`
`,e.jsx(a.h2,{id:"geojson",children:"GeoJSON"}),`
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"GeoJSON"}),` in Leaflet is used to display vector data on a map. GeoJSON layers are used to display vector data on a map.
GeoJSON layers can be used to display points, lines, polygons, and other vector features on a map.`]}),`
`,e.jsx(a.p,{children:"The GeoJSON examples show how to create a simple map with a GeoJSON layer."}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["Example: ",e.jsx(a.a,{href:"./?path=/docs/react-geojson--docs",children:"GeoJSON (React + Leaflet)"})]}),`
`,e.jsxs(a.li,{children:["Example: ",e.jsx(a.a,{href:"./?path=/docs/react-leaflet-geojsonlayer--docs",children:"GeoJSON (React + React-leaflet)"})]}),`
`]}),`
`,e.jsx(a.h2,{id:"mvt-mapbox-vector-tiles",children:"MVT (Mapbox Vector Tiles)"}),`
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"MVT"})," in Leaflet is used to display vector data on a map, it can be used to display points, lines, polygons, and other vector features on a map."]}),`
`,e.jsxs(a.p,{children:["You can use a plugin like ",e.jsx(a.code,{children:"leaflet-vector-tiles"})," to add MVT layers to your map."]}),`
`,e.jsx(a.h2,{id:"wfs-web-feature-service",children:"WFS (Web Feature Service)"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.strong,{children:"WFS"}),` layer in Leaflet is used to display vector data on a map, it can be used to display points, lines, polygons, and other vector features.
WFS is a standard protocol for requesting geospatial data from a server.`]}),`
`,e.jsxs(a.p,{children:["You can use a plugin like ",e.jsx("a",{href:"https://github.com/Flexberry/Leaflet-WFST",target:"_blank",children:"leaflet-wfst"}),` to add WFS layers to your map. However, it's not always necessary to use a plugin if you're comfortable with handling the WFS request and response yourself.
The leaflet-wfs plugin and similar plugins provide a more convenient way to work with WFS services by handling the request and response for you. They can also provide additional features like automatic refreshing of the layer when the data changes.`]}),`
`,e.jsx(a.p,{children:"The WFS examples show how to create a simple map with a WFS layer. (without the use of a plugin)"}),`
`,e.jsx(a.p,{children:"See:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["Example: ",e.jsx(a.a,{href:"./?path=/docs/react-wfslayer--docs",children:"WFSLayer (React + Leaflet)"})]}),`
`,e.jsxs(a.li,{children:["Example: ",e.jsx(a.a,{href:"./?path=/docs/react-leaflet-wfslayer--docs",children:"WFSLayer (React + React-leaflet)"})]}),`
`]})]})}function y(s={}){const{wrapper:a}={...i(),...s.components};return a?e.jsx(a,{...s,children:e.jsx(n,{...s})}):n(s)}export{y as default};
