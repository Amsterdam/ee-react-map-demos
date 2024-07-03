import { render } from '@testing-library/react';
import MultiMarkerSelect from './MultiMarkerSelect';

describe('MultiMarkerSelect', () => {
  it('renders the component', () => {
    const { container } = render(<MultiMarkerSelect />);
    expect(container.firstChild).toBeDefined();
  });
});
