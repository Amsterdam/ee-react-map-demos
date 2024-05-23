import { render } from '@testing-library/react';

import WFSLayer from './WFSLayer';
import useGeoJSONData from './useGeoJSONData';

vi.mock('./useGeoJSONData', () => ({
  __esModule: true,
  default: vi.fn(),
}));

describe('WFSLayer', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the component', () => {
    const { container } = render(<WFSLayer />);
    expect(container.firstChild).toBeDefined();
  });

  it('calls useGeoJSONData', () => {
    render(<WFSLayer />);
    expect(useGeoJSONData).toHaveBeenCalled();
  });
});
