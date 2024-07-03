import { render } from '@testing-library/react';
import Alert from './Alert';
import { LatLngTuple } from 'leaflet';

const position: LatLngTuple = [52.36036, 4.89956];

vi.mock('./MapContext', () => {
  const actual = vi.importActual('./MapContext');
  return {
    ...actual,
    useMapInstance: () => ({
      position,
    }),
  };
});

describe('Position Alert', () => {
  it('renders the component', () => {
    const { container } = render(<Alert />);
    expect(container.firstChild).toBeDefined();
  });

  it('renders the context instance position', () => {
    const { container } = render(<Alert />);
    expect(container).toHaveTextContent(`${position[0]}, ${position[1]}`);
  });
});
