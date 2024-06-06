import type { LatLngTuple } from 'leaflet';
import { toGeoJSON } from '@/utils/toGeoJSON';
import rawData from './data-xl.json';
import toBoundsLiteral from '@/utils/toBoundsLiteral';
import Supercluster, { AnyProps, PointFeature } from 'supercluster';
import { DataRecord, MapFeature } from './types';

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

const filterPointFeaturesWithinBoundingBox = (
  features: MapFeature[],
  bbox: [number, number, number, number]
) => {
  const featuresFiltered = [];

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

const addExpansionZoom = (superClusterIndex: any, feature: any) => {
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

const getExternalFeatures = (map: L.Map) => {
  const bounds = toBoundsLiteral(map.getBounds()).flat();
  const featuresWithinBbox = filterPointFeaturesWithinBoundingBox(
    toGeoJSON(rawData as DataRecord[]).features,
    bounds
  );

  let clusters: PointFeature<AnyProps>[] = [];

  const superClusterIndex = new Supercluster({
    log: true,
    radius: 40,
    extent: 3000,
    nodeSize: 64,
    maxZoom: 13,
  }).load(featuresWithinBbox);

  if (superClusterIndex) {
    clusters = superClusterIndex.getClusters(bounds, map.getZoom());

    for (const feature of clusters) {
      addExpansionZoom(superClusterIndex, feature);
    }
  }

  return clusters;
};

export default getExternalFeatures;
