export const DEFAULT_MAP_OPTIONS = {
  center: [52.370216, 4.895168] as [number, number],
  zoom: 12,
  zoomControl: false,
  maxZoom: 18,
  minZoom: 11,
  // Prevent the user browsing too far outside Amsterdam otherwise the map will render blank greyspace. Amsterdam tile layer only supports Amsterdam and the immediate surrounding areas
  maxBounds: [
    [52.25168, 4.64034],
    [52.50536, 5.10737],
  ] as [number, number][],
};
