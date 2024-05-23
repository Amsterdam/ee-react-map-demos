import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import PolygonLayer from './PolygonLayer';

describe('PolygonLayer', () => {
  it('renders the component', () => {
    const { container } = render(<PolygonLayer />);
    expect(container.firstChild).toBeDefined();
  });

  // it('', () => {

  // });
});
