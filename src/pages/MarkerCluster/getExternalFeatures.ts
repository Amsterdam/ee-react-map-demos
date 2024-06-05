import type { LatLngBounds, LatLngTuple, Point } from 'leaflet';
import { toGeoJSON } from '@/utils/toGeoJSON';
import rawData from './data-xl.json';
import toBoundsLiteral from '@/utils/toBoundsLiteral';
import Supercluster, { AnyProps, PointFeature } from 'supercluster';

// mijn.amsterdam generates clusters via their BFF, taking the frontend boundingbox + zoom
// const externalFeatures = [
//   {
//     type: 'Feature',
//     geometry: {
//       type: 'Point',
//       coordinates: [4.818762834731431, 52.37945040271383],
//     },
//     properties: {
//       id: '448',
//       datasetId: 'sportaanbieder',
//       stadspasJeugd: 'Nee',
//       aangepastSporten: 'Nee',
//       typeSport: 'Dans',
//       expansion_zoom: null,
//     },
//   },
//   {
//     type: 'Feature',
//     geometry: {
//       type: 'Point',
//       coordinates: [4.818762834731431, 52.37945040271383],
//     },
//     properties: {
//       id: '1082',
//       datasetId: 'sportaanbieder',
//       stadspasJeugd: 'Nee',
//       aangepastSporten: 'Nee',
//       typeSport: 'Diverse sportactiviteiten,Voetbal',
//       expansion_zoom: null,
//     },
//   },
//   {
//     type: 'Feature',
//     geometry: {
//       type: 'Point',
//       coordinates: [4.818762834731431, 52.37945040271383],
//     },
//     properties: {
//       id: '1226',
//       datasetId: 'sportaanbieder',
//       stadspasJeugd: 'Ja',
//       aangepastSporten: 'Nee',
//       typeSport: 'Karate,Vechtsport',
//       expansion_zoom: null,
//     },
//   },
// ];

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

// For your custom data
type DatasetFeatureProperties = {
  id: string;
};

type MapFeature<
  G extends GeoJSON.Geometry = Exclude<
    GeoJSON.Geometry,
    GeoJSON.GeometryCollection
  >,
> = GeoJSON.Feature<G, DatasetFeatureProperties>;
export type MapPointFeature = MapFeature<GeoJSON.Point>;

const filterPointFeaturesWithinBoundingBox = (
  features: MapFeature[],
  bbox: [number, number, number, number]
) => {
  const featuresFiltered = [];
  console.log(
    'filterPointFeaturesWithinBoundingBox',
    typeof features,
    features
  );
  features.forEach(feature => {
    console.log('feature')
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
  // for (let i = 0; i < features.length; i += 1) {
  //   console.log(i)
  //   if (
  //     isCoordWithingBoundingBox(
  //       bbox,
  //       features[i].geometry.coordinates as LatLngTuple,
  //       0,
  //       1
  //     )
  //   ) {
  //     featuresFiltered.push(features[i]);
  //   } else {
  //     console.log("FALSE")
  //   }
  // }
  console.log({ featuresFiltered });
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

export type RawDataRecord = {
  id: string;
  geometry: Point;
};

// bounds = [4.818329608450931, 52.37915454604335, 4.819322343182089, 52.37954528979109]
const getExternalFeatures = (map: L.Map) => {
  const bounds = toBoundsLiteral(map.getBounds()).flat();
  const featuresWithinBbox = filterPointFeaturesWithinBoundingBox(
    toGeoJSON(rawData as RawDataRecord[]).features,
    bounds.flat()
  );
  console.log('bounds', toBoundsLiteral(map.getBounds()).flat());
  console.log('data', toGeoJSON(rawData as RawDataRecord[]).features);
  console.log('featuresWithinBbox', featuresWithinBbox);

  let clusters: PointFeature<AnyProps>[] = [];

  const superClusterIndex = new Supercluster({
    log: true,
    radius: 40,
    extent: 3000,
    nodeSize: 64,
    maxZoom: 13,
  }).load(featuresWithinBbox);

  if (superClusterIndex) {
    clusters = superClusterIndex.getClusters(bounds.flat(), map.getZoom());

    for (const feature of clusters) {
      addExpansionZoom(superClusterIndex, feature);
    }
  }

  return clusters;
};

export default getExternalFeatures;
