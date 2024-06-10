import type { LatLngTuple } from 'leaflet';
import Supercluster, { AnyProps, PointFeature } from 'supercluster';
import { Feature, Geometry } from 'geojson';
import { toGeoJSON } from '@/utils/toGeoJSON';
import toBoundsLiteral from '@/utils/toBoundsLiteral';
import { DataRecord } from '../MarkerCluster/types';
import rawData from './data.json';

// Simple util to check coords within a bounding box
const isCoordWithingBoundingBox = (
  bbox: [number, number, number, number],
  coord: LatLngTuple,
  xIndex = 1,
  yIndex = 0
) => {
  const [x1, y1, x2, y2] = bbox;
  const y = coord[yIndex]!;
  const x = coord[xIndex]!;

  if (x1 <= x && x <= x2 && y1 <= y && y <= y2) {
    return true;
  }

  return false;
};

// Restrict data to that within specified bounding box
const filterPointFeaturesWithinBoundingBox = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  features: PointFeature<any>[],
  bbox: [number, number, number, number]
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const featuresFiltered: PointFeature<any>[] = [];

  features.forEach(feature => {
    if (
      isCoordWithingBoundingBox(
        bbox,
        feature.geometry.coordinates as LatLngTuple,
        0,
        1
      )
    ) {
      featuresFiltered.push(feature);
    }
  });

  return featuresFiltered;
};

// Helpful for cluster events to detect which cluster to follow
const addExpansionZoom = (
  superClusterIndex: Supercluster,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  feature: Feature<Geometry, any>
) => {
  try {
    feature.properties.expansion_zoom =
      superClusterIndex.getClusterExpansionZoom(feature.properties.cluster_id);
  } catch (error) {
    console.error(
      "Can't add expansion zoom to cluster",
      feature.properties.cluster_id,
      feature
    );
  }
};

const getMapData = (map: L.Map) => {
  const bounds = toBoundsLiteral(map.getBounds()).flat() as [
    number,
    number,
    number,
    number,
  ];

  // Save some resources by handling only data present in the current map view
  const featuresWithinBbox = filterPointFeaturesWithinBoundingBox(
    toGeoJSON(rawData as DataRecord[]).features,
    bounds
  );

  let clusters: PointFeature<AnyProps>[] = [];

  const superClusterIndex = new Supercluster({
    // Enable this for console.logs with the timing to build each cluster
    log: false,
    radius: 40,
    extent: 3000,
    nodeSize: 64,
    maxZoom: 13,
  }).load(featuresWithinBbox);

  if (superClusterIndex) {
    clusters = superClusterIndex.getClusters(bounds, map.getZoom());

    for (const feature of clusters) {
      // Used on cluster events to detect which cluster to zoom into
      addExpansionZoom(superClusterIndex, feature);
    }
  }

  return clusters;
};

export default getMapData;
