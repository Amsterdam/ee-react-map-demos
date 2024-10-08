import { describe, expect, it } from 'vitest';
import { render, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import L from 'leaflet';
import MarkerCluster from './MarkerCluster';
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
    geometry: {
      type: 'Point',
      coordinates: [4.869341186626288, 52.41312161731963],
    },
    properties: {
      id: '110627',
    },
  },
  {
    type: 'Feature',
    id: 1731,
    properties: {
      cluster: true,
      cluster_id: 1731,
      point_count: 61,
      point_count_abbreviated: 61,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.849467668376977, 52.376390617632865],
    },
  },
  {
    type: 'Feature',
    id: 1827,
    properties: {
      cluster: true,
      cluster_id: 1827,
      point_count: 35,
      point_count_abbreviated: 35,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.989830834524969, 52.35849648317432],
    },
  },
  {
    type: 'Feature',
    id: 1859,
    properties: {
      cluster: true,
      cluster_id: 1859,
      point_count: 88,
      point_count_abbreviated: 88,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.962408298795866, 52.314230376446915],
    },
  },
  {
    type: 'Feature',
    id: 2115,
    properties: {
      cluster: true,
      cluster_id: 2115,
      point_count: 19,
      point_count_abbreviated: 19,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.908354407862596, 52.34149413488072],
    },
  },
  {
    type: 'Feature',
    id: 6693,
    properties: {
      cluster: true,
      cluster_id: 6693,
      point_count: 2,
      point_count_abbreviated: 2,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.768871068954468, 52.37549765515507],
    },
  },
  {
    type: 'Feature',
    id: 1923,
    properties: {
      cluster: true,
      cluster_id: 1923,
      point_count: 70,
      point_count_abbreviated: 70,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.907284089497139, 52.40569099233366],
    },
  },
  {
    type: 'Feature',
    id: 2019,
    properties: {
      cluster: true,
      cluster_id: 2019,
      point_count: 5,
      point_count_abbreviated: 5,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.85016775131224, 52.34004846208785],
    },
  },
  {
    type: 'Feature',
    id: 1603,
    properties: {
      cluster: true,
      cluster_id: 1603,
      point_count: 80,
      point_count_abbreviated: 80,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.817066341638565, 52.362011642288536],
    },
  },
  {
    type: 'Feature',
    id: 1571,
    properties: {
      cluster: true,
      cluster_id: 1571,
      point_count: 111,
      point_count_abbreviated: 111,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.930841020635657, 52.36207785729161],
    },
  },
  {
    type: 'Feature',
    id: 3620,
    properties: {
      cluster: true,
      cluster_id: 3620,
      point_count: 4,
      point_count_abbreviated: 4,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.9565184116363525, 52.391291266895024],
    },
  },
  {
    type: 'Feature',
    id: 2307,
    properties: {
      cluster: true,
      cluster_id: 2307,
      point_count: 24,
      point_count_abbreviated: 24,
    },
    geometry: {
      type: 'Point',
      coordinates: [4.987105429172529, 52.29661378569142],
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
        // @ts-expect-error actual.default is unknown
        ...actual.default.prototype,
        load: vi.fn(),
        getClusters: vi.fn(() => fakeClusterData),
        getClusterExpansionZoom: getClusterExpansionZoomMock,
      };
    }),
  };
});

describe('MarkerCluster', () => {
  it('shows an alert on marker click', async () => {
    const alertMock = vi
      .spyOn(window, 'alert')
      .mockImplementation(() => undefined);
    const { container } = render(<MarkerCluster />);

    const marker = container.querySelector(
      '.leaflet-marker-pane img.leaflet-marker-icon'
    );

    expect(marker).toBeInTheDocument();
    await act(() => userEvent.click(marker as Element));

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledOnce();
      expect(alertMock).toHaveBeenLastCalledWith(
        `Marker click ID ${fakeClusterData[0].properties.id}`
      );
    });
  });

  it('shows an alert on marker enter keypress', async () => {
    const alertMock = vi
      .spyOn(window, 'alert')
      .mockImplementation(() => undefined);
    const { container } = render(<MarkerCluster />);

    const marker = container.querySelector(
      '.leaflet-marker-pane img.leaflet-marker-icon'
    );

    await act(async () => {
      (marker as HTMLElement)?.focus();
      expect(marker).toHaveFocus();
      userEvent.keyboard('{enter}');

      await waitFor(() => {
        expect(alertMock).toHaveBeenCalledOnce();
        expect(alertMock).toHaveBeenLastCalledWith(
          `Marker click ID ${fakeClusterData[0].properties.id}`
        );
      });
    });
  });

  it('cluster clicks trigger marker click callbacks', async () => {
    const setZoomAroundSpy = vi
      .spyOn(L.Map.prototype, 'setZoomAround')
      .mockImplementation(() => {
        return {} as L.Map;
      });

    const { container } = render(<MarkerCluster />);
    const cluster = container.querySelector(
      `div.leaflet-marker-icon.${styles.markerCluster}`
    );

    expect(cluster).toBeInTheDocument();
    await act(() => userEvent.click(cluster as Element));
    expect(setZoomAroundSpy).toHaveBeenCalled();
  });

  it('shows length values that corresponds with the fake data length', () => {
    const { container } = render(<MarkerCluster />);

    const individualClusters = container.querySelectorAll(
      `div.leaflet-marker-icon.${styles.markerCluster}`
    );
    const individualClustersArr = Array.from(individualClusters);
    const individualMarkers = container.querySelectorAll(
      '.leaflet-marker-pane img.leaflet-marker-icon'
    ).length;
    const clusterTotal = individualClustersArr.reduce(
      (accumulator, cluster) =>
        accumulator +
        parseInt(cluster.querySelector('span')?.textContent as string),
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
