import { describe, expect, it } from 'vitest';
import L from 'leaflet';
import createClusterIcon from './createClusterIcon';
import styles from '../styles.module.css';
import { Feature, Point } from 'geojson';

const CLUSTER_STYLES = {
  default: styles.markerCluster,
  small: styles.markerClusterSmall,
  medium: styles.markerClusterMedium,
  large: styles.markerClusterLarge,
};

describe('createClusterIcon', () => {
  it('returns a leaflet marker if not a cluster', () => {
    const feature = {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [4.869341186626288, 52.41312161731963],
      },
      properties: {
        id: '110627',
      },
    };

    const latlng = L.latLng([52.41312161731963, 4.869341186626288]);
    const icon = createClusterIcon(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      feature as Feature<Point, any>,
      latlng,
      CLUSTER_STYLES
    );

    expect(icon).toEqual(
      expect.objectContaining({
        options: {},
        _latlng: {
          lat: 52.41312161731963,
          lng: 4.869341186626288,
        },
        _initHooksCalled: true,
      })
    );
  });

  it('returns a cluster divIcon if not a marker', () => {
    const feature = {
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
    };

    const latlng = L.latLng([52.376390617632865, 4.849467668376977]);
    const icon = createClusterIcon(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      feature as Feature<Point, any>,
      latlng,
      CLUSTER_STYLES
    );

    expect(icon).toEqual(
      expect.objectContaining({
        options: {
          icon: L.divIcon({
            html: `<div><span>61</span></div>`,
            className: `${CLUSTER_STYLES.default} ${CLUSTER_STYLES.medium}`,
            iconSize: L.point(40, 40),
          }),
        },
        _latlng: {
          lat: 52.376390617632865,
          lng: 4.849467668376977,
        },
        _initHooksCalled: true,
      })
    );
  });
});
