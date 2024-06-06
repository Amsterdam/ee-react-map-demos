import { useState, useEffect } from 'react';

const useGeoJSONData = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Error fetching GeoJSON data:', error));
  }, [url]);

  return data;
};

export default useGeoJSONData;
