// TODO spiderify?
import { useCallback, useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import L, { LatLngTuple, LeafletKeyboardEvent, LeafletEvent, LatLngBounds } from 'leaflet';
import Supercluster from 'supercluster';
import type { BBox, GeoJsonObject } from 'geojson';
import getCrsRd from '@/utils/getCrsRd';
import { toGeoJSON } from '@/utils/toGeoJSON';
import styles from './styles.module.css';
import { Record } from './types';
import data from './data-xl.json';
import createClusterIcon from './utils/createClusterIcon';
import toBoundsLiteral from '@/utils/toBoundsLiteral';

const CLUSTER_STYLES = {
  default: styles.markerCluster,
  small: styles.markerClusterSmall,
  medium: styles.markerClusterMedium,
  large: styles.markerClusterLarge,
};

// TODO
// 1. With raw data, filter results WITHIN bounds
// 2. With data from #1 create supercluster index + get clusters
// 2i. addExpansionZoom -> https://github.com/Amsterdam/mijn-amsterdam-frontend/blob/5a4ed571a7a5ca7806c496ec0ad4717fbe2033cc/src/server/services/buurt/supercluster.ts#L83
// 3. Use this data with processFeatures

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
  features: MaFeature[],
  bbox: [number, number, number, number]
) => {
  const featuresFiltered = [];
  let i = 0;
  const len = features.length;

  for (i; i < len; i += 1) {
    if (
      isCoordWithingBoundingBox(
        bbox,
        features[i].geometry.coordinates as LatLngTuple,
        0,
        1
      )
    ) {
      featuresFiltered.push(features[i]);
    }
  }

  return featuresFiltered;
};

const loadClusterData = (
  data: any,
  bbox: [number, number, number, number],
  zoom: number
) => {
  const superclusterIndex = new Supercluster({
    log: true,
    radius: 40,
    extent: 3000,
    nodeSize: 64,
    maxZoom: 13,
  }).load(data);
  const clusters = superclusterIndex.getClusters(bbox, zoom);
  const withinBbox = filterPointFeaturesWithinBoundingBox(data, bbox);

  console.log('clusters', clusters);

  // TODO this has nothing to do with what's returned
  for (const feature of clusters) {
    feature.properties.expansion_zoom =
      superclusterIndex.getClusterExpansionZoom(feature.properties.cluster_id);
  }

  return withinBbox;
};

// Code taken from https://github.com/yagoferrer/marker-spider/blob/master/lib/oms.coffee
const twoPi = Math.PI * 2;
const circleFootSeparation = 23;
const circleStartAngle = twoPi / 12;
const spiralLengthStart = 11;
const spiralLengthFactor = 4;
const spiralFootSeparation = 26;

// @see https://github.com/jawj/OverlappingMarkerSpiderfier-Leaflet/blob/master/lib/oms.coffee#L92
export function pointsCircle(count: number, centerPt: L.Point) {
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
export function pointsSpiral(count: number, centerPt: L.Point) {
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

export function round(num: number, decimalPlaces: number = 6) {
  const num2 = Math.round((num + 'e' + decimalPlaces) as unknown as number);

  return Number(num2 + 'e' + -decimalPlaces);
}

type DatasetFeatureProperties = {
  id: string;
  // datasetId: string;
  // color?: string;
  // zIndex?: number;
  [propertyName: string /*DatasetPropertyName*/]: string;
};

type DatasetClusterFeatureProperties = DatasetFeatureProperties & {
  cluster?: boolean;
  point_count?: number;
};

type MaFeature<
  G extends GeoJSON.Geometry = Exclude<
    GeoJSON.Geometry,
    GeoJSON.GeometryCollection
  >,
> = GeoJSON.Feature<G, DatasetFeatureProperties>;

type MaSuperClusterFeature =
  | Supercluster.PointFeature<DatasetClusterFeatureProperties>
  | Supercluster.ClusterFeature<DatasetClusterFeatureProperties>;

const processFeatures = (map: L.Map, features: MaSuperClusterFeature[]) => {
  const items: Record<string, MaSuperClusterFeature[]> = {};
  const markersFinal: MaSuperClusterFeature[] = [];

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
      const centerPoint = map.latLngToLayerPoint({
        lat,
        lng,
      });
      const featureCount = features.length;
      const pts =
        featureCount > 11
          ? pointsSpiral(featureCount, centerPoint)
          : pointsCircle(featureCount, centerPoint);

      const modifiedMarkers = pts
        .filter((pt, index) => !!features[index])
        .map((pt, index) => {
          const { lng, lat } = map.layerPointToLatLng(pt);
          const feature: MaSuperClusterFeature = {
            ...features[index],
            geometry: {
              coordinates: [lng, lat],
              type: 'Point',
            },
          };
          return feature;
        });
      markersFinal.push(...modifiedMarkers);
    }
  }

  return markersFinal;

  return toGeoJSON(data as Record[]);
};

const MarkerCluster: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const [markersInstance, setMarkersInstance] = useState<L.GeoJSON | null>(
    null
  );
  const createdMapInstance = useRef(false);

  const [center, setCenter] = useState<LatLngTuple>([
    52.37554542380609, 4.9193494747220905,
  ]);
  const [zoom, setZoom] = useState(10);

  const clusterIndex = new Supercluster({
    // Enable this for console.logs with the timing to build each cluster
    log: false,
    radius: 40,
    extent: 3000,
    nodeSize: 64,
    maxZoom: 13,
  });

  const onMarkerClick = useCallback(
    (event: LeafletEvent) => {
      const { feature } = event.propagatedFrom;
      console.log('zoom', mapInstance?.getZoom());

      // if (mapInstance) {
      //   if (mapInstance.getZoom() < SPIDERIFY_AFTER_ZOOM) {
      //     //
      //   } else {
      //     spiderifiedCluster = {
      //       id: feature.properties.cluster_id,
      //       coordinates: feature.geometry.coordinates,
      //     };
      //   }
      //   // spiderifyCluster({
      //   //   map: map,
      //   //   source: SOURCE_EARTHQUAKE,
      //   //   clusterToSpiderify: spiderifiedCluster
      //   // });
      // }

      if (feature.properties.cluster && feature.properties.cluster_id) {
        // We must be dealing with a cluster click
        mapInstance?.setZoomAround(
          event.propagatedFrom.getLatLng(),
          clusterIndex.getClusterExpansionZoom(feature.properties.cluster_id)
        );
      } else if (feature.properties.id) {
        // We must be dealing with a marker click
        alert(`Marker click ID ${feature.properties.id}`);
      }
    },
    [mapInstance]
  );

  const onClick = useCallback(onMarkerClick, [mapInstance]);

  const onKeyup = useCallback(
    (event: LeafletKeyboardEvent) => {
      if (event.originalEvent.key === 'Enter') {
        onMarkerClick(event);
      }
    },
    [onClick]
  );

  // Set the Leaflet map and Amsterdam base layer
  useEffect(() => {
    if (containerRef.current === null || createdMapInstance.current !== false) {
      return;
    }

    const map = new L.Map(containerRef.current, {
      center,
      zoom,
      layers: [
        L.tileLayer('https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png', {
          attribution: '',
          subdomains: ['t1', 't2', 't3', 't4'],
          tms: true,
        }),
      ],
      zoomControl: false,
      maxZoom: 16,
      minZoom: 6, // TODO in ARM this is 3?
      crs: getCrsRd(),
      maxBounds: [
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ],
    });

    map.attributionControl.setPrefix(false);

    // Empty Layer Group that will receive the clusters data on the fly.
    const markers = L.geoJSON(null, {
      pointToLayer: (...args) => createClusterIcon(...args, CLUSTER_STYLES),
    }).addTo(map);

    createdMapInstance.current = true;
    setMapInstance(map);
    setMarkersInstance(markers);

    // Listen for map changes to know when to update the clusters
    map.on('moveend', () => {
      console.log('latlng', [map.getCenter().lat, map.getCenter().lng])
      setZoom(map.getZoom());
      setCenter([map.getCenter().lat, map.getCenter().lng]);
    });

    return () => {
      if (mapInstance) mapInstance.remove();

      if (markersInstance) {
        markersInstance.off();
        markersInstance.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (mapInstance) {
      // Clear any already rendered clusters/markers
      markersInstance?.clearLayers();
      markersInstance?.off();

      // Parse any API data to GeoJSON
      const parsedGeoJson = toGeoJSON(data as Record[]);
      console.log({ parsedGeoJson });

      // TODO why this returns empty?
      const moreParsed = loadClusterData(
        parsedGeoJson,
        // @ts-ignore
        toBoundsLiteral(mapInstance.getBounds()).flat(),
        zoom
      );
      console.log({
        moreParsed,
        bounds: toBoundsLiteral(mapInstance.getBounds()).flat(),
      });
      // Load the parsed GeoJSON data into the cluster index
      // clusterIndex.load(parsedGeoJson.features);
      const processed = processFeatures(mapInstance, parsedGeoJson.features);
      clusterIndex.load(processed);

      // Get the current map bounds to prevent clustering every data record
      const bounds = mapInstance.getBounds();
      const bbox = [
        bounds.getWest(),
        bounds.getSouth(),
        bounds.getEast(),
        bounds.getNorth(),
      ];

      // Return any map data within the current bounds
      const clusterMarkers = clusterIndex.getClusters(
        bbox as BBox,
        mapInstance.getZoom()
      );

      if (markersInstance && parsedGeoJson.features.length) {
        // Render the cluster(s) and marker(s) to the map
        markersInstance?.addData(clusterMarkers as unknown as GeoJsonObject);

        // Add event listeners to enable dynamic clustering
        markersInstance?.on('click', onClick);
        markersInstance?.on('keyup', onKeyup);
      }
    }
  }, [mapInstance, zoom, center]);

  return <div className={styles.container} ref={containerRef} />;
};

export default MarkerCluster;
