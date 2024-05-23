import { describe, expect, it } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import PolygonLayer from './PolygonLayer';
import { polygonStyles, polygonHoverStyles } from './layerStyles';

describe('PolygonLayer', () => {
  it('renders the component', () => {
    const { container } = render(<PolygonLayer />);
    expect(container.firstChild).toBeDefined();
  });

  it('renders a polygon layer', () => {
    const { container } = render(<PolygonLayer />);
    const layer = container.querySelector('.c-layer');

    expect(layer).toBeInTheDocument();
  });

  it('changes background on mouseover', async () => {
    const { container } = render(<PolygonLayer />);
    const layer = container.querySelector('.c-layer');

    // getAttribute will return as a string
    expect(layer?.getAttribute('fill-opacity')).toEqual(
      `${polygonStyles.fillOpacity}`
    );

    // @ts-expect-error Type 'null' is not assignable to type
    fireEvent.mouseOver(container.querySelector('.c-layer'));
    await waitFor(() =>
      expect(layer?.getAttribute('fill-opacity')).toEqual(
        `${polygonHoverStyles.fillOpacity}`
      )
    );
  });
});
