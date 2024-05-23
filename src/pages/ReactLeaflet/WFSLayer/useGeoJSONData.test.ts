import { renderHook, waitFor } from '@testing-library/react';
import useGeoJSONData from './useGeoJSONData';

const mockedGeoJsonResponse = () =>
  Promise.resolve({
    json() {
      return { data: 'mocked data' };
    },
    ok: true,
  }) as unknown as Response;

describe('useGeoJSONData', () => {
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

  it('fetches GeoJSON data ', async () => {
    const { result } = renderHook(() =>
      useGeoJSONData('http://example.com/geojson')
    );

    expect(global.fetch).toHaveBeenCalledWith('http://example.com/geojson');

    await waitFor(() => {
      expect(result.current).toEqual({ data: 'mocked data' });
    });
  });
});
