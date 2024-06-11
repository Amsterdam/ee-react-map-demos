import type { Point } from 'geojson';
import Supercluster from 'supercluster';

export type ClusterOptions = {
  clusterShape: 'circle' | 'spiral';
  spiderfyOnMaxZoom?: boolean;
};

export type DataRecord = {
  id: string;
  geometry: Point;
};

type DatasetFeatureProperties = {
  id: string;
};

export type DatasetClusterFeatureProperties = {
  id: string;
  cluster?: boolean;
  point_count?: number;
};

export type MapFeature<
  G extends GeoJSON.Geometry = Exclude<
    GeoJSON.Geometry,
    GeoJSON.GeometryCollection
  >,
> = GeoJSON.Feature<G, DatasetFeatureProperties>;
export type MapPointFeature = MapFeature<Point>;

export type MapSuperClusterFeature =
  | Supercluster.PointFeature<DatasetClusterFeatureProperties>
  | Supercluster.ClusterFeature<DatasetClusterFeatureProperties>;
