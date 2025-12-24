import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import BaseLayer from './BaseLayer';

describe('BaseLayer', () => {
  it('renders the component', () => {
    const { container } = render(<BaseLayer />);
    expect(container.firstChild).toBeDefined();
  });

  it('uses the amsterdam base tile', () => {
    const { container } = render(<BaseLayer />);

    // Only test on the less dynamic part of the URL
    const imgSrc = (
      container.querySelector('.leaflet-tile-container img') as HTMLImageElement
    )?.src.substring(0, 38);

    expect(
      /^https:\/\/(t1|t2|t3|t4)\.data\.amsterdam\.nl\/topo_wm\//.test(imgSrc)
    ).toBe(true);
  });
});
