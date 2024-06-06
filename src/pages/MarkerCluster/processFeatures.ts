import { LineString } from 'geojson';
import L from 'leaflet';
import Supercluster from 'supercluster';
import { MapFeature } from './getExternalFeatures';

type DatasetClusterFeatureProperties = {
  id: string;
  cluster?: boolean;
  point_count?: number;
};

export type MapSuperClusterFeature =
  | Supercluster.PointFeature<DatasetClusterFeatureProperties>
  | Supercluster.ClusterFeature<DatasetClusterFeatureProperties>;

function round(num: number, decimalPlaces: number = 6) {
  const num2 = Math.round((num + 'e' + decimalPlaces) as unknown as number);

  return Number(num2 + 'e' + -decimalPlaces);
}

const twoPi = Math.PI * 2;
const circleFootSeparation = 23;
const circleStartAngle = twoPi / 12;
const spiralLengthStart = 11;
const spiralLengthFactor = 4;
const spiralFootSeparation = 26;

// @see https://github.com/jawj/OverlappingMarkerSpiderfier-Leaflet/blob/master/lib/oms.coffee#L92
function pointsCircle(count: number, centerPt: L.Point) {
  const circumference = circleFootSeparation * (2 + count);
  const legLength = circumference / twoPi;
  const angleStep = twoPi / count;
  const points = [];

  let angle = 0;
  let i = 0;

  for (i; i < legLength; i += 1) {
    angle = circleStartAngle + i * angleStep;

    points.push(
      new L.Point(
        centerPt.x + legLength * Math.cos(angle),
        centerPt.y + legLength * Math.sin(angle)
      )
    );
  }

  return points;
}

// @see https://github.com/jawj/OverlappingMarkerSpiderfier-Leaflet/blob/master/lib/oms.coffee#L101
function pointsSpiral(count: number, centerPt: L.Point) {
  const points = [];
  let angle = 0;
  let i = 0;
  let legLength = spiralLengthStart;

  for (i; i < legLength; i += 1) {
    angle += spiralFootSeparation / legLength + i * 0.0005;

    const x = centerPt.x + legLength * Math.cos(angle);
    const y = centerPt.y + legLength * Math.sin(angle);

    legLength += (twoPi * spiralLengthFactor) / angle;

    points.push(L.point(x, y));
  }

  return points;
}

const processFeatures = (
  map: L.Map,
  features: MapSuperClusterFeature[],
  options = { clusterShape: 'circle', spiderfyOnMaxZoom: true }
) => {
  const items: Record<string, MapSuperClusterFeature[]> = {};
  const markersFinal: MapSuperClusterFeature[] = [];
  const linesFinal: MapFeature<LineString>[] = [];

  for (const feature of features) {
    if (!feature.properties.cluster) {
      const c = `${round(feature.geometry.coordinates[0])}-${round(
        feature.geometry.coordinates[1]
      )}`;

      if (!items[c]) {
        items[c] = [feature];
      } else {
        items[c].push(feature);
      }
    } else {
      markersFinal.push(feature);
    }
  }

  for (const [, features] of Object.entries(items)) {
    // No point modification needed
    if (features.length === 1) {
      markersFinal.push(features[0]);
    } else {
      const [lng, lat] = features[0].geometry.coordinates;
      const parentLatLng = [lng, lat];
      const centerPoint = map.latLngToLayerPoint({
        lat,
        lng,
      });
      const featureCount = features.length;
      const pts =
        options.clusterShape === 'circle'
          ? pointsCircle(featureCount, centerPoint)
          : pointsSpiral(featureCount, centerPoint);

      const modifiedMarkers = pts
        .filter((pt, index) => !!features[index])
        .map((pt, index) => {
          const { lng, lat } = map.layerPointToLatLng(pt);
          const feature: MapSuperClusterFeature = {
            ...features[index],
            geometry: {
              coordinates: [lng, lat],
              type: 'Point',
            },
          };

          if (options.spiderfyOnMaxZoom) {
            // Generate spider legs
            const leg = {
              type: 'Feature',
              geometry: {
                type: 'LineString',
                coordinates: [
                  [lat, lng],
                  [parentLatLng[1], parentLatLng[0]],
                ],
              },
              properties: {},
            };

            linesFinal.push(leg);
          }

          return feature;
        });

      markersFinal.push(...modifiedMarkers);
    }
  }

  return {
    markersFinal,
    linesFinal,
  };
};

export default processFeatures;
