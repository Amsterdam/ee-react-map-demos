import { useEffect } from 'react';
import L from 'leaflet';

const useGeoJSONLayer = (map: L.Map | null, url: string) => {
  useEffect(() => {
    if (map === null) {
      return;
    }

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        L.geoJSON(data).addTo(map);
      })
      .catch(error => {
        console.error('Error fetching GeoJSON data:', error);
      });
  }, [map, url]);
};

export default useGeoJSONLayer;
