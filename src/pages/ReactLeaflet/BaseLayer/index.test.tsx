import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import BaseMap from './';

describe('BaseMap', () => {
  it('renders the component', () => {
    const { container } = render(<BaseMap />);
    expect(container.firstChild).toBeDefined();
  });

  it('uses the amsterdam base tile', () => {
    const { container } = render(<BaseMap />);

    // Only test on the less dynamic part of the URL
    const imgSrc = (
      container.querySelector('.leaflet-tile-container img') as HTMLImageElement
    )?.src.substring(0, 38);

    expect(
      imgSrc.match(
        /https:\/\/(t1)|(t2)|(t3)|(t4)\.data.amsterdam.nl\/topo_rd\//g
      )
    ).not.toEqual(null);
  });
});
