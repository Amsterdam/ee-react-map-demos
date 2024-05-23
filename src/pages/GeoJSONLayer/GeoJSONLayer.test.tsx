import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import GeoJSONLayer from './GeoJSONLayer';

describe('GeoJSONLayer', () => {
  it('renders markers on the map', () => {
    const { container } = render(<GeoJSONLayer />);
    const markers = container.querySelectorAll('.c-marker');

    expect(markers.length).toBe(1000);
  });
});
