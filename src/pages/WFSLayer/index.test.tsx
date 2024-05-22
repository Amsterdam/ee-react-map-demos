import { render } from '@testing-library/react';
import WFSLayer from '.';
import useGeoJSONLayer from './useGeoJSONLayer';
import useLeafletMap from './useLeafletMap';

vi.mock('./useGeoJSONLayer', () => ({
  __esModule: true,
  default: vi.fn(),
}));

vi.mock('./useLeafletMap', () => ({
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

  it('calls useLeafletMap', () => {
    render(<WFSLayer />);
    expect(useGeoJSONLayer).toHaveBeenCalled();
  });

  it('calls useGeoJSONLayer', () => {
    render(<WFSLayer />);
    expect(useLeafletMap).toHaveBeenCalled();
  });
});
