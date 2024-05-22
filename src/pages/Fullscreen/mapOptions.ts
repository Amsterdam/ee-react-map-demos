import L from 'leaflet';
import getCrsRd from '@/utils/getCrsRd';

export const MAP_OPTIONS = {
  center: [52.370216, 4.895168] as [number, number],
  zoom: 12,
  layers: [
    L.tileLayer('https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png', {
      attribution: '',
      subdomains: ['t1', 't2', 't3', 't4'],
      tms: true,
    }),
  ],
  zoomControl: false,
  maxZoom: 16,
  minZoom: 3,
  // Ensure proper handling for Rijksdriehoekcoördinaten
  crs: getCrsRd(),
  // Prevent the user browsing too far outside Amsterdam otherwise the map will render blank greyspace. Amsterdam tile layer only supports Amsterdam and the immediate surrounding areas
  maxBounds: [
    [52.25168, 4.64034],
    [52.50536, 5.10737],
  ] as [number, number][],
};
