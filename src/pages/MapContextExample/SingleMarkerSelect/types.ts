import { Layer } from 'leaflet';

// Define the structure of your GeoJSON data
export interface GeoJSONProperties {
  id: number;
}

// Define the GeoJSON Feature with our properties
export interface GeoJSONFeature extends GeoJSON.Feature<GeoJSON.Point> {
  properties: GeoJSONProperties;
}

// Extend the Layer type to include the custom feature
export interface SingleMarkerSelectExampleLayer extends Layer {
  feature?: GeoJSONFeature;
}
