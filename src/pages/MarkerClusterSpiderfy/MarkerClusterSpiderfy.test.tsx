import { describe, expect, it } from 'vitest';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import L from 'leaflet';
import MarkerClusterSpiderfy from './MarkerClusterSpiderfy';
import styles from './styles.module.css';

// In happy-dom the Leaflet Map bounds return the same, for example:
// bounds: {
//   _southWest: { lat: 52.37013184724128, lng: 4.895024918433285 },
//   _northEast: { lat: 52.37013184724128, lng: 4.895024918433285 }
// },
// Therefore, Supercluster will render nothing, so we mock the return methods from Supercluster to return data.

const fakeClusterData = [
  {
    type: 'Feature',
    id: 1572,
    properties: {
      cluster: true,
      cluster_id: 1572,
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
    id: 1604,
    properties: {
      cluster: true,
      cluster_id: 1604,
      point_count: 239,
      point_count_abbreviated: 239,
      expansion_zoom: 8,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.813719713538243, 52.36056421790491],
    },
  },
  {
    type: 'Feature',
    id: 1732,
    properties: {
      cluster: true,
      cluster_id: 1732,
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
    id: 1796,
    properties: {
      cluster: true,
      cluster_id: 1796,
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
    id: 1828,
    properties: {
      cluster: true,
      cluster_id: 1828,
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
    id: 1924,
    properties: {
      cluster: true,
      cluster_id: 1924,
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
    id: 1988,
    properties: {
      cluster: true,
      cluster_id: 1988,
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
    id: 2084,
    properties: {
      cluster: true,
      cluster_id: 2084,
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
    id: 2180,
    properties: {
      cluster: true,
      cluster_id: 2180,
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
    id: 2276,
    properties: {
      cluster: true,
      cluster_id: 2276,
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
    id: 6566,
    properties: {
      cluster: true,
      cluster_id: 6566,
      point_count: 2,
      point_count_abbreviated: 2,
      expansion_zoom: 10,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.768871068954468, 52.37549765515507],
    },
  },
  {
    type: 'Feature',
    id: 2756,
    properties: {
      cluster: true,
      cluster_id: 2756,
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

const getClusterExpansionZoomMock = vi.fn();

vi.mock('supercluster', async () => {
  const actual = await vi.importActual('supercluster');

  return {
    ...actual,
    default: vi.fn(() => {
      return {
        ...actual.default.prototype,
        load: vi.fn(),
        getClusters: vi.fn(() => fakeClusterData),
        getClusterExpansionZoom: getClusterExpansionZoomMock,
      };
    }),
  };
});

vi.mock('./getMapData', () => ({
  default: () => fakeClusterData,
}));

describe('MarkerClusterSpiderfy', () => {
  it('shows an alert on marker click', async () => {
    const alertMock = vi
      .spyOn(window, 'alert')
      .mockImplementation(() => undefined);
    const { container } = render(<MarkerClusterSpiderfy />);

    const marker = container.querySelector(
      '.leaflet-marker-pane img.leaflet-marker-icon'
    );

    expect(marker).toBeInTheDocument();
    fireEvent(marker, new MouseEvent('click', { bubbles: true }));

    const markerRecord = fakeClusterData.find(record => record.properties.id);

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledOnce();
      expect(alertMock).toHaveBeenLastCalledWith(
        `Marker click ID ${markerRecord?.properties.id}`
      );
    });
  });

  it('shows an alert on marker enter keypress', async () => {
    const alertMock = vi
      .spyOn(window, 'alert')
      .mockImplementation(() => undefined);
    const { container } = render(<MarkerClusterSpiderfy />);

    const marker = container.querySelector(
      '.leaflet-marker-pane img.leaflet-marker-icon'
    );

    await act(async () => {
      marker?.focus();
      expect(marker).toHaveFocus();
      userEvent.keyboard('{enter}');

      await waitFor(() => {
        const markerRecord = fakeClusterData.find(
          record => record.properties.id
        );

        expect(alertMock).toHaveBeenCalledOnce();
        expect(alertMock).toHaveBeenLastCalledWith(
          `Marker click ID ${markerRecord?.properties.id}`
        );
      });
    });
  });

  it('cluster clicks trigger marker click callbacks', () => {
    const setZoomAroundSpy = vi
      .spyOn(L.Map.prototype, 'setZoomAround')
      .mockImplementation(() => {
        console.log('setZoomAround called');
      });

    const { container } = render(<MarkerClusterSpiderfy />);
    const cluster = container.querySelector(
      `div.leaflet-marker-icon.${styles.markerCluster}`
    );

    expect(cluster).toBeInTheDocument();
    fireEvent(cluster, new MouseEvent('click', { bubbles: true }));

    expect(setZoomAroundSpy).toHaveBeenCalled();
  });

  it('shows length values that corresponds with the fake data length', () => {
    const { container } = render(<MarkerClusterSpiderfy />);

    const individualClusters = container.querySelectorAll(
      `div.leaflet-marker-icon.${styles.markerCluster}`
    );
    const individualClustersArr = Array.from(individualClusters);
    const individualMarkers = container.querySelectorAll(
      '.leaflet-marker-pane img.leaflet-marker-icon'
    ).length;
    const clusterTotal = individualClustersArr.reduce(
      (accumulator, cluster) =>
        accumulator + parseInt(cluster.querySelector('span').textContent),
      0
    );
    const fakeClusterDataLength = fakeClusterData.reduce(
      (accumulator, data) =>
        accumulator +
        (data.properties.cluster ? data.properties.point_count : 1),
      0
    );

    expect(individualMarkers + clusterTotal).toEqual(fakeClusterDataLength);
  });
});
