import { render } from '@testing-library/react';
import MapProvider from './MapProvider';

describe('Position MapProvider', () => {
  it('renders the component', () => {
    const { container } = render(<MapProvider />);
    expect(container.firstChild).toBeDefined();
  });
});
