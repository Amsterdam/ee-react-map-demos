import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L, { circleMarker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './styles.module.css';
import { Boom } from './types';
import data from './data.json';
import getCrsRd from '@/utils/getCrsRd';
import { toGeoJSON } from '@/utils/toGeoJSON';
import { Feature, Point } from 'geojson';

const GeoJSONLayer = (): JSX.Element => {
  const pointToLayer = (
    _feature: Feature<Point, never>,
    latlng: L.LatLngExpression
  ) => {
    return circleMarker(latlng, {
      fillColor: '#247514',
      fill: true,
      color: '#247514',
      radius: 3,
      className: 'c-marker',
    });
  };

  console.log('pointlayer: ', { pointToLayer });
  return (
    <div className={styles.container}>
      <MapContainer
        center={L.latLng([52.370216, 4.895168])}
        zoom={8}
        maxBounds={[
          [52.25168, 4.64034],
          [52.50536, 5.10737],
        ]}
        crs={getCrsRd()}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png"
          subdomains={['t1', 't2', 't3', 't4']}
          tms
        />
        <GeoJSON data={toGeoJSON(data as Boom[])} pointToLayer={pointToLayer} />
      </MapContainer>
    </div>
  );
};

export default GeoJSONLayer;
