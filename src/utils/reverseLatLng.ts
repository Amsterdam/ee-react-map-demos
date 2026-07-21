import type { GeoJsonObject } from 'geojson';
import L from 'leaflet';

// Leaflet uses lat-lng (north-east), while GeoJSON uses
// lng-lat (east-north).
// @see https://macwright.com/lonlat/
const reverseLatLng = (input: GeoJsonObject) =>
  L.geoJSON(input, {
    coordsToLatLng: coords => new L.LatLng(coords[0], coords[1], coords[2]),
  });

export default reverseLatLng;
