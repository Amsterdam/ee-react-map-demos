import { Feature, Polygon } from 'geojson';
import { Layer } from 'leaflet';

// Define the structure of your GeoJSON data
export interface GeoJSONProperties {
  id: string;
  street: string;
}

// Define the GeoJSON Feature with our properties
export interface GeoJSONFeature extends Feature<Polygon> {
  properties: GeoJSONProperties;
}

// Extend the Layer type to include the custom feature
export interface MultiMarkerSelectExampleLayer extends Layer {
  feature?: GeoJSONFeature;
}
