import type { Feature, Geometry, GeometryCollection, Point } from 'geojson';
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
  G extends Geometry = Exclude<Geometry, GeometryCollection>,
> = Feature<G, DatasetFeatureProperties>;
export type MapPointFeature = MapFeature<Point>;

export type MapSuperClusterFeature =
  | Supercluster.PointFeature<DatasetClusterFeatureProperties>
  | Supercluster.ClusterFeature<DatasetClusterFeatureProperties>;
