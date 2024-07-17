import L from 'leaflet';

// Leaflet uses lat-lng (or north-east) whereas GeoJSON uses lng-lat (or east-north).
// @see https://macwright.com/lonlat/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reverseLatLng = (input: any) =>
  L.geoJSON(input, {
    coordsToLatLng: coords => new L.LatLng(coords[0], coords[1], coords[2]),
  });

export default reverseLatLng;
