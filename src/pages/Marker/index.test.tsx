import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Marker from './';

describe('Marker', () => {
  it('renders the component', () => {
    const { container } = render(<Marker />);
    expect(container.firstChild).toBeDefined();
  });

  it('renders a leaflet marker icon', () => {
    const { container } = render(<Marker />);
    const icon = container.querySelector(
      '.leaflet-marker-icon.leaflet-interactive'
    );

    expect(icon).toBeInTheDocument();
    expect((icon as HTMLImageElement)?.alt).toEqual('Marker');
  });
});
