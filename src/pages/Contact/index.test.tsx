import { render } from '@testing-library/react';
import Contact from './';

describe('Contact', () => {
  it('renders the component', () => {
    const { container } = render(<Contact />);
    expect(container.firstChild).toBeDefined();
  });

  it('has the expected content', () => {
    const { container } = render(<Contact />);
    expect(container.textContent).toEqual('Contact');
  });
});
