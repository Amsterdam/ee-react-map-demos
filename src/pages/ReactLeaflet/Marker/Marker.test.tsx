import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Marker from './Marker';

describe('Marker', () => {
  it('renders the component', () => {
    const { container } = render(<Marker />);
    expect(container.firstChild).toBeDefined();
  });
  it('shows the marker', () => {
    const { container } = render(<Marker />);
    expect(container.querySelector('.map-marker')).toBeInTheDocument();
  });
});
