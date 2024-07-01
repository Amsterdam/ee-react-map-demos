import { render } from '@testing-library/react';
import Footer from './Footer';

describe('ZoomControlsFullScreen Footer', () => {
  it('renders the component', () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toBeDefined();
  });
});
