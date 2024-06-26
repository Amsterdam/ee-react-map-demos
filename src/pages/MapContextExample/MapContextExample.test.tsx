import { render } from '@testing-library/react';
import MapContextExample from './MapContextExample';

describe('MapContextExample', () => {
  it('renders the component', () => {
    const { container } = render(<MapContextExample />);
    expect(container.firstChild).toBeDefined();
  });
});
