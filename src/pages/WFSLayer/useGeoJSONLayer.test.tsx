import { render } from '@testing-library/react';
import L from 'leaflet';
import useGeoJSONLayer from './useGeoJSONLayer';

vi.mock('leaflet', () => ({
  __esModule: true,
  default: {
    map: () => ({ setView: () => ({}) }),
    tileLayer: () => ({ addTo: () => ({}) }),
    geoJSON: () => ({ addTo: () => ({}) }),
  },
}));

const mockedGeoJsonResponse = () =>
  Promise.resolve({
    json() {
      return { data: 'mocked data' };
    },
    ok: true,
  }) as unknown as Response;

describe('useGeoJSONLayer', () => {
  let originalFetch: typeof global.fetch;

  beforeAll(() => {
    originalFetch = global.fetch;
  });

  beforeEach(() => {
    // @ts-expect-error mock fetch
    global.fetch = vi.fn(mockedGeoJsonResponse);
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  it('fetches GeoJSON data and adds it to the map', async () => {
    // @ts-expect-error mock fetch
    global.fetch = vi.fn(mockedGeoJsonResponse);

    // Test component that uses the hook
    const TestComponent = () => {
      const map = L.map(document.createElement('div'));
      useGeoJSONLayer(map, 'http://example.com/geojson');

      return <div>Test component</div>;
    };

    render(<TestComponent />);

    expect(global.fetch).toHaveBeenCalledWith('http://example.com/geojson');
  });
});
