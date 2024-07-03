import { render } from '@testing-library/react';
import Header from './Header';

describe('ZoomControlsFullScreen Header', () => {
  it('renders the component', () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toBeDefined();
  });
});
