import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import PolygonLayer from './PolygonLayer';

describe('PolygonLayer', () => {
  it('renders the component', () => {
    const { container } = render(<PolygonLayer />);
    expect(container.firstChild).toBeDefined();
  });
  it('renders the Polygo nLayer', () => {
    const { container } = render(<PolygonLayer />);
    const svgPolygon = container.querySelector('svg path');
    const strokeColor = svgPolygon && svgPolygon.getAttribute('stroke');
    const fillOpacity = svgPolygon && svgPolygon.getAttribute('fill-opacity');

    expect(svgPolygon).toBeInTheDocument();
    expect(strokeColor).toEqual('#3388ff');
    expect(fillOpacity && parseFloat(fillOpacity)).toBeCloseTo(0.2);
  });
});
