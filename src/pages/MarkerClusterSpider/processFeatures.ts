import { LineString, Position } from 'geojson';
import L, { LatLngLiteral } from 'leaflet';
import { ClusterOptions, MapFeature, MapSuperClusterFeature } from './types';
import roundNumber from './utils/roundNumber';
import {
  createPointsCircle,
  createPointsSpiral,
} from './utils/createClusterShapes';

const generateKey = (coordinates: Position) =>
  `${roundNumber(coordinates[0])}-${roundNumber(coordinates[1])}`;

// Group markers at the same coordinates under the same coordinates key
const getMarkerItems = (features: MapSuperClusterFeature[]) => {
  const items: Record<string, MapSuperClusterFeature[]> = {};
  features.forEach(feature => {
    const key = generateKey(feature.geometry.coordinates);

    if (!items[key]) {
      items[key] = [feature];
    } else {
      items[key].push(feature);
    }
  });

  return items;
};

// Build GeoJSON
const buildClusteredMarkerFeature = (
  { lng, lat }: LatLngLiteral,
  primaryLatLng: LatLngLiteral,
  originalFeature: MapSuperClusterFeature,
  options: ClusterOptions
) => {
  const legs: MapFeature<LineString>[] = [];
  const feature: MapSuperClusterFeature = {
    ...originalFeature,
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
          [lng, lat],
          [primaryLatLng.lng, primaryLatLng.lat],
        ],
      },
      properties: {},
    };

    legs.push(leg as MapFeature<LineString>);
  }

  return {
    feature,
    legs,
  };
};

const processFeatures = (
  map: L.Map,
  features: MapSuperClusterFeature[],
  options: ClusterOptions = { clusterShape: 'circle', spiderfyOnMaxZoom: true }
) => {
  const spiderLines: MapFeature<LineString>[] = [];

  // Prepare the marker items, which we will later merge into the clusterItems array
  const markerItems = getMarkerItems(
    features.filter(feature => !feature.properties.cluster)
  );
  const clusterItems = features.filter(feature => feature.properties.cluster);

  for (const [, features] of Object.entries(markerItems)) {
    if (features.length === 1) {
      // Only one marker exists at this location so no modifications necessary
      // markersFinal.push(features[0]);
      clusterItems.push(features[0]);
    } else {
      // Multiple markers exist at this location, therefore, prepare the zoomed in cluster markers
      const primaryLatLng = {
        lng: features[0].geometry.coordinates[0],
        lat: features[0].geometry.coordinates[1],
      };

      // Convert the center latlng to a Point (x, y coords)
      const centerPoint = map.latLngToLayerPoint(primaryLatLng);

      // Create the new marker positions (positioned around the center point)
      const points =
        options.clusterShape === 'circle'
          ? createPointsCircle(features.length, centerPoint)
          : createPointsSpiral(features.length, centerPoint);

      // Filter out unncessary points otherwise there's 4x too many markers
      const clusteredMarkerFeatures = points
        .filter((_point, index) => !!features[index])
        .map((point, index) => {
          // Format and convert the point back to GeoJSON + latlng
          const { lng, lat } = map.layerPointToLatLng(point);
          const { feature, legs } = buildClusteredMarkerFeature(
            { lng, lat },
            primaryLatLng,
            features[index],
            options
          );

          // Handle the spider lines separately for easier separataion between clickable markers and static lines
          spiderLines.push(...legs);

          return feature;
        });

      clusterItems.push(...clusteredMarkerFeatures);
    }
  }

  return {
    clusterItems,
    spiderLines: spiderLines,
  };
};

export default processFeatures;
