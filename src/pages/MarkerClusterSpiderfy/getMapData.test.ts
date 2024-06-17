import { describe, expect, it } from 'vitest';
import getMapData, {
  filterPointFeaturesWithinBoundingBox,
  isCoordWithingBoundingBox,
} from './getMapData';
import L from 'leaflet';

const fakeClusterData = [
  {
    type: 'Feature',
    id: 22,
    properties: {
      cluster: true,
      cluster_id: 22,
      point_count: 2,
      point_count_abbreviated: 2,
      expansion_zoom: 13,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.878358840942383, 52.39106374279018],
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.882518432148812, 52.39100244113094],
    },
    properties: {
      id: '109717',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.880095232197966, 52.39566794110363],
    },
    properties: {
      id: '119917',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    id: 119,
    properties: {
      cluster: true,
      cluster_id: 119,
      point_count: 2,
      point_count_abbreviated: 2,
      expansion_zoom: 14,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.8776185512542725, 52.39415404191834],
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.874522677880726, 52.394535444992],
    },
    properties: {
      id: '131252',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.88260143186347, 52.39262641981734],
    },
    properties: {
      id: '172869',
      expansion_zoom: null,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.872686102783296, 52.39248931334058],
    },
    properties: {
      id: '192349',
      expansion_zoom: null,
    },
  },
];

vi.mock('leaflet', async () => {
  const actual = await vi.importActual('leaflet');

  return {
    ...actual,
    map: vi.fn().mockImplementation(() => ({
      setView: vi.fn().mockReturnThis(),
      getZoom: vi.fn(() => 7),
    })),
  };
});

vi.mock('supercluster', async () => {
  const actual = await vi.importActual('supercluster');

  return {
    ...actual,
    default: vi.fn(() => {
      return {
        ...actual.default.prototype,
        load: vi.fn(() => ({
          getClusters: vi.fn(() => fakeClusterData),
          getClusterExpansionZoom: vi.fn(() => 1),
        })),
      };
    }),
  };
});

describe('getMapData', () => {
  it('returns the expected geo data', () => {
    const mapData = getMapData(
      new L.Map(document.createElement('div'), {
        center: [52.370216, 4.895168],
        zoom: 7,
      })
    );
    expect(mapData).toEqual(fakeClusterData);
  });

  it('isCoordWithingBoundingBox checks coordinates truly inside bounding box', () => {
    expect(isCoordWithingBoundingBox([10, 10, 20, 20], [15, 15])).toBe(true);
    expect(isCoordWithingBoundingBox([10, 10, 20, 20], [5, 33])).toBe(false);
  });

  it('filterPointFeaturesWithinBoundingBox checks features are truly inside bounding box', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const features: any = [
      {
        geometry: { coordinates: [15, 15] },
      },
      {
        geometry: { coordinates: [25, 25] },
      },
    ];
    expect(
      filterPointFeaturesWithinBoundingBox(features, [10, 10, 20, 20]).length
    ).toBe(1);
  });
});
