import L from 'leaflet';
import { CLUSTER_OPTIONS } from './mapStyles';
import processFeatures, { getMarkerItems } from './processFeatures';
import { MapSuperClusterFeature } from './types';

vi.mock('leaflet', async () => {
  const actual = await vi.importActual('leaflet');

  return {
    ...actual,
    map: vi.fn().mockImplementation(() => ({
      setView: vi.fn().mockReturnThis(),
      getBounds: vi.fn(() => ({
        northEast: { lat: '', lng: '' },
        southWest: { lat: '', lng: '' },
      })),
      getZoom: vi.fn(() => 7),
      // latLngToLayerPoint: vi.fn(() => L.Point(1, 1))
    })),
  };
});

// All clusters except one marker
const fakeFeaturesZoomedOut = [
  {
    type: 'Feature',
    id: 1569,
    properties: {
      cluster: true,
      cluster_id: 1569,
      point_count: 408,
      point_count_abbreviated: 408,
      expansion_zoom: 8,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.921538198695474, 52.370872656890185],
    },
  },
  {
    type: 'Feature',
    id: 1601,
    properties: {
      cluster: true,
      cluster_id: 1601,
      point_count: 238,
      point_count_abbreviated: 238,
      expansion_zoom: 8,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.813891609175847, 52.36059802111214],
    },
  },
  {
    type: 'Feature',
    id: 1729,
    properties: {
      cluster: true,
      cluster_id: 1729,
      point_count: 325,
      point_count_abbreviated: 325,
      expansion_zoom: 8,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.862498650184062, 52.369845768807664],
    },
  },
  {
    type: 'Feature',
    id: 1793,
    properties: {
      cluster: true,
      cluster_id: 1793,
      point_count: 54,
      point_count_abbreviated: 54,
      expansion_zoom: 8,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.986799160639435, 52.36176196106081],
    },
  },
  {
    type: 'Feature',
    id: 1825,
    properties: {
      cluster: true,
      cluster_id: 1825,
      point_count: 152,
      point_count_abbreviated: 152,
      expansion_zoom: 8,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.960701104841743, 52.31548893880412],
    },
  },
  {
    type: 'Feature',
    id: 1921,
    properties: {
      cluster: true,
      cluster_id: 1921,
      point_count: 81,
      point_count_abbreviated: 81,
      expansion_zoom: 8,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.905632072024879, 52.41080735297254],
    },
  },
  {
    type: 'Feature',
    id: 1985,
    properties: {
      cluster: true,
      cluster_id: 1985,
      point_count: 102,
      point_count_abbreviated: 102,
      expansion_zoom: 8,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.86971686868106, 52.33280064366002],
    },
  },
  {
    type: 'Feature',
    id: 2081,
    properties: {
      cluster: true,
      cluster_id: 2081,
      point_count: 116,
      point_count_abbreviated: 116,
      expansion_zoom: 8,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.900848331122556, 52.34568473498618],
    },
  },
  {
    type: 'Feature',
    id: 2177,
    properties: {
      cluster: true,
      cluster_id: 2177,
      point_count: 49,
      point_count_abbreviated: 49,
      expansion_zoom: 8,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.946222451268394, 52.39522780607311],
    },
  },
  {
    type: 'Feature',
    id: 2273,
    properties: {
      cluster: true,
      cluster_id: 2273,
      point_count: 30,
      point_count_abbreviated: 30,
      expansion_zoom: 8,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.989832878112788, 52.29599612786663],
    },
  },
  {
    type: 'Feature',
    id: 2721,
    properties: {
      cluster: true,
      cluster_id: 2721,
      point_count: 5,
      point_count_abbreviated: 5,
      expansion_zoom: 8,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.996054172515869, 52.39071868960744],
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [5.028688243101398, 52.4136393328284],
    },
    properties: {
      id: '201169',
      expansion_zoom: null,
    },
  },
];

// All records except one have the same geometry
const fakeFeaturesZoomedIn = [
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '102125',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919845952453137, 52.376646895165564],
    },
    properties: {
      id: '85769',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '91012',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '91033',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '91055',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '91064',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '91094',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '91147',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '91215',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '91266',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '91270',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '91347',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '91356',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '91374',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '91395',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '91471',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '91513',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '93584',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '93616',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '93630',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '93637',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '9600',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.919360631817759, 52.375825041139166],
    },
    properties: {
      id: '97846',
      expansion_zoom: null,
    },
  },
];

describe('processFeatures', () => {
  let map: L.Map;

  beforeEach(() => {
    map = new L.Map(document.createElement('div'), {
      center: [52.370216, 4.895168],
      zoom: 7,
    });
  });

  it('returns expected counts', () => {
    const features = processFeatures(
      map,
      fakeFeaturesZoomedOut as MapSuperClusterFeature[],
      CLUSTER_OPTIONS
    );

    expect(features.clusterItems).toHaveLength(fakeFeaturesZoomedOut.length);
  });

  it('returns spider legs when features are at the same geometry and the spiderfyOnMaxZoom option is true', () => {
    const features = processFeatures(
      map,
      fakeFeaturesZoomedIn as MapSuperClusterFeature[],
      CLUSTER_OPTIONS
    );

    expect(features.clusterItems).toHaveLength(fakeFeaturesZoomedIn.length);
    expect(features.spiderLines).toHaveLength(fakeFeaturesZoomedIn.length - 1);
  });

  it('returns no spider legs when features are at the same geometry and the spiderfyOnMaxZoom option is false', () => {
    const features = processFeatures(
      map,
      fakeFeaturesZoomedIn as MapSuperClusterFeature[],
      { ...CLUSTER_OPTIONS, spiderfyOnMaxZoom: false }
    );

    expect(features.clusterItems).toHaveLength(fakeFeaturesZoomedIn.length);
    expect(features.spiderLines).toHaveLength(0);
  });

  it('collates items with the same geometry', () => {
    const items = getMarkerItems(
      fakeFeaturesZoomedIn as MapSuperClusterFeature[]
    );

    expect(Object.keys(items)).toHaveLength(2);
    expect(items['4.919846-52.376647']).toHaveLength(1);
    expect(items['4.919361-52.375825']).toHaveLength(
      fakeFeaturesZoomedIn.length - 1
    );
  });
});
