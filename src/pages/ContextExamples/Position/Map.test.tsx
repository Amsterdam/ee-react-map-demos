import { render } from '@testing-library/react';
import Map from './Map';
import MapProvider from './MapProvider';

describe('Position Map', () => {
  it('renders the component', () => {
    const { container } = render(
      <MapProvider>
        <Map />
      </MapProvider>
    );
    expect(container.firstChild).toBeDefined();
  });
});
