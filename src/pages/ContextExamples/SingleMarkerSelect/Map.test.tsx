import { render } from '@testing-library/react';
import Map from './Map';
import MapProvider from './MapProvider';
import data from './data.json';
import { GeoJSONFeature } from './types';

describe('SingleMarkerSelect Map', () => {
  it('renders the component', () => {
    const { container } = render(
      <MapProvider>
        <Map />
      </MapProvider>
    );
    expect(container.firstChild).toBeDefined();
  });

  it('uses the marker data when calling leaflet geojson', () => {
    const geoJsonMock = vi.fn((data, options) => {
      data?.features?.forEach((feature: GeoJSONFeature) =>
        options.onEachFeature(feature, {})
      );
      return {
        addTo: vi.fn(),
        remove: vi.fn(),
        removeFrom: vi.fn(),
      };
    });

    // Replace L.geoJson with our mock
    // @ts-expect-error missing the following properties from type
    L.geoJson = geoJsonMock;

    render(
      <MapProvider>
        <Map />
      </MapProvider>
    );

    expect(geoJsonMock).toHaveBeenCalledWith(
      data as GeoJSONFeature[],
      expect.objectContaining({
        pointToLayer: expect.any(Function),
      })
    );
    expect(geoJsonMock).toHaveBeenCalledTimes(1);
  });
});
