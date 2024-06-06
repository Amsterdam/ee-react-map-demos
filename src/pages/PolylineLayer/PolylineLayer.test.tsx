import { describe, expect, it } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import PolylineLayer from './PolylineLayer';
import { lineStyles, lineHoverStyles } from './layerStyles';

describe('PolylineLayer', () => {
  it('renders the component', () => {
    const { container } = render(<PolylineLayer />);
    expect(container.firstChild).toBeDefined();
  });

  it('renders a polygon layer', () => {
    const { container } = render(<PolylineLayer />);
    const layer = container.querySelector('.c-layer');

    expect(layer).toBeInTheDocument();
  });

  it('changes background on mouseover', async () => {
    const { container } = render(<PolylineLayer />);
    const layer = container.querySelector('.c-layer');

    expect(layer?.getAttribute('stroke')).toEqual(lineStyles.color);

    // @ts-expect-error Type 'null' is not assignable to type
    fireEvent.mouseOver(container.querySelector('.c-layer'));
    await waitFor(() =>
      expect(layer?.getAttribute('stroke')).toEqual(lineHoverStyles.color)
    );
  });
});
