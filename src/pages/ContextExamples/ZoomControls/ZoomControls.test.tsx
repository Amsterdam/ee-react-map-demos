import { render } from '@testing-library/react';
import ZoomControls from './ZoomControls';

describe('ZoomControls', () => {
  it('renders the component', () => {
    const { container } = render(<ZoomControls />);
    expect(container.firstChild).toBeDefined();
  });
});
