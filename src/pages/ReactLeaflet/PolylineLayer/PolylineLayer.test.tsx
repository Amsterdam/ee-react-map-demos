import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import PolylineLayer from './PolylineLayer';

describe('PolylineLayer', () => {
  it('renders the component', () => {
    const { container } = render(<PolylineLayer />);
    expect(container.firstChild).toBeDefined();
  });
  it('shows the polyline svg', () => {
    const { container } = render(<PolylineLayer />);
    const svgPolyline = container.querySelector('svg path');
    const stroke = svgPolyline && svgPolyline.getAttribute('stroke');
    const fill = svgPolyline && svgPolyline.getAttribute('fill');

    expect(svgPolyline).toBeInTheDocument();
    expect(stroke).toEqual('#3388ff');
    expect(fill).toEqual('none');
  });
});
