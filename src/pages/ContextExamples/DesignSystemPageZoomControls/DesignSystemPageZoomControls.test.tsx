import { render } from '@testing-library/react';
import DesignSystemPageZoomControls from './DesignSystemPageZoomControls';

describe('DesignSystemPageZoomControls', () => {
  it('renders the component', () => {
    const { container } = render(<DesignSystemPageZoomControls />);
    expect(container.firstChild).toBeDefined();
  });
});
