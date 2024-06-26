import { render } from '@testing-library/react';
import Position from './Position';

describe('Position', () => {
  it('renders the component', () => {
    const { container } = render(<Position />);
    expect(container.firstChild).toBeDefined();
  });
});
