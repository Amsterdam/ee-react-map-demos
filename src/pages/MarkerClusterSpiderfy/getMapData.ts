import type { LatLngTuple } from 'leaflet';
import Supercluster, { PointFeature } from 'supercluster';
import { BBox, Feature, GeoJsonProperties, Geometry, Point } from 'geojson';
import { toGeoJSON } from '@/utils/toGeoJSON';

// Simple util to check coords within a bounding box
export const isCoordWithinBoundingBox = (
  bbox: BBox,
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
export const filterPointFeaturesWithinBoundingBox = <P>(
  features: PointFeature<P>[],
  bbox: BBox
) => {
  const featuresFiltered: PointFeature<P>[] = [];

  features.forEach(feature => {
    if (
      isCoordWithinBoundingBox(
        bbox,
        feature.geometry.coordinates as [number, number],
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
const addExpansionZoom = <D extends Supercluster.ClusterProperties>(
  superClusterIndex: Supercluster,
  feature: Feature<Geometry, D>
) => {
  try {
    feature.properties = {
      ...feature.properties,
      expansion_zoom: superClusterIndex.getClusterExpansionZoom(
        feature.properties.cluster_id
      ),
    };
  } catch (error) {
    console.error(
      "Can't add expansion zoom to cluster",
      feature.properties.cluster_id,
      feature
    );
  }
};

const getMapData = <D extends { geometry: Point }>(
  map: L.Map,
  rawData: D[]
) => {
  const bounds = map.getBounds();
  const bbox: BBox = [
    bounds.getWest(),
    bounds.getSouth(),
    bounds.getEast(),
    bounds.getNorth(),
  ];

  // Save some resources by handling only data present in the current map view
  const featuresWithinBbox = filterPointFeaturesWithinBoundingBox(
    toGeoJSON(rawData).features,
    bbox
  );

  type Dprops = (typeof featuresWithinBbox)[0];

  const superClusterIndex = new Supercluster<
    Dprops['properties'],
    Dprops['properties']
  >({
    // Enable this for console.logs with the timing to build each cluster
    log: false,
    radius: 40,
    extent: 3000,
    nodeSize: 64,
    maxZoom: 13,
  }).load(featuresWithinBbox);

  if (superClusterIndex) {
    const clusters = superClusterIndex.getClusters(bbox, map.getZoom());

    for (const feature of clusters) {
      if (isCluster(feature)) {
        // Used on cluster events to detect which cluster to zoom into
        addExpansionZoom(superClusterIndex, feature);
      }
    }
    return clusters;
  }

  return [];
};

function isCluster<P extends GeoJsonProperties>(
  feature: Supercluster.ClusterFeature<P> | PointFeature<P>
): feature is Supercluster.ClusterFeature<P> {
  return feature.properties?.cluster !== undefined;
}

export default getMapData;
