import type { Geometry, Feature, FeatureCollection } from 'geojson';

export function toGeoJSON<DataType extends { geometry: Geometry }>(
  data: DataType[]
) {
  type DataGeometry = DataType['geometry'];
  type DataProperties = Omit<DataType, 'geometry'>;

  const features = data.map(data => {
    const { geometry, ...other } = data;

    const feature: Feature<DataGeometry, DataProperties> = {
      type: 'Feature',
      geometry: geometry,
      properties: {
        ...other,
      },
    };
    return feature;
  });

  const geojson: FeatureCollection<DataGeometry, DataProperties> = {
    type: 'FeatureCollection',
    features,
  };

  return geojson;
}
