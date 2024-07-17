import { render } from '@testing-library/react';
import ZoomControlsFullScreen from './ZoomControlsFullScreen';

describe('ZoomControlsFullScreen', () => {
  it('renders the component', () => {
    const { container } = render(<ZoomControlsFullScreen />);
    expect(container.firstChild).toBeDefined();
  });
});
