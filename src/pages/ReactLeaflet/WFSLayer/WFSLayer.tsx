import type { FunctionComponent } from 'react';
import { GeoJSON } from 'react-leaflet';
import BaseLayer from './BaseLayer';
import useGeoJSONData from './useGeoJSONData';

const WFSLayer: FunctionComponent = () => {
  const geoJsonData = useGeoJSONData(
    'https://map.data.amsterdam.nl/maps/bag?REQUEST=Getfeature&VERSION=1.1.0&SERVICE=wfs&TYPENAME=ms:pand&srsName=EPSG:4326&outputformat=geojson&bbox=4.886568897250246%2C52.36966606270195%2C4.892099548064893%2C52.37253554766886'
  );

  return <BaseLayer>{geoJsonData && <GeoJSON data={geoJsonData} />}</BaseLayer>;
};

export default WFSLayer;
