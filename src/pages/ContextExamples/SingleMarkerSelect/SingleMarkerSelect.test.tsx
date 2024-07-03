import { render } from '@testing-library/react';
import SingleMarkerSelect from './SingleMarkerSelect';

describe('SingleMarkerSelect', () => {
  it('renders the component', () => {
    const { container } = render(<SingleMarkerSelect />);
    expect(container.firstChild).toBeDefined();
  });
});
