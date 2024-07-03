import { PropsWithChildren, useState } from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import type { Map, LatLngTuple } from 'leaflet';
import {
  MapContext,
  MapContextProps,
  MapState,
  useMapInstance,
} from './MapContext';
import { GeoJSONFeature } from './types';

// Helper component to test the context
const TestComponent = () => {
  const {
    mapInstance,
    position,
    markerData,
    selectedMarkers,
    setMapInstance,
    setPosition,
    setMarkerData,
    setSelectedMarkers,
  } = useMapInstance();

  return (
    <div>
      <button onClick={() => setMapInstance({} as Map)}>
        Set Map Instance
      </button>
      <button onClick={() => setPosition([10, 20] as LatLngTuple)}>
        Set Position
      </button>
      <button
        onClick={() =>
          setMarkerData([
            {
              type: 'Feature',
              properties: {
                id: '1',
                street: 'Amsterdamstraat',
              },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [0, 0],
                    [0, 0],
                  ],
                ],
              },
            },
          ])
        }
      >
        Set Marker Data
      </button>
      <button onClick={() => setSelectedMarkers(['marker1'])}>
        Set Selected Markers
      </button>
      <div data-testid="mapInstance">
        {mapInstance !== null ? 'Map Set' : 'No Map'}
      </div>
      <div data-testid="position">{position.join(',')}</div>
      <div data-testid="markerData">{markerData.length}</div>
      <div data-testid="selectedMarkers">{selectedMarkers.join(',')}</div>
    </div>
  );
};

describe('MultiMarkerSelect MapContext', () => {
  it('provides and updates context values', async () => {
    const initialState: MapState = {
      mapInstance: null,
      position: [0, 0],
      markerData: [],
      selectedMarkers: [],
    };

    const Wrapper = ({ children }: PropsWithChildren) => {
      const [mapInstance, setMapInstance] = useState<Map | null>(
        initialState.mapInstance
      );
      const [position, setPosition] = useState<LatLngTuple>(
        initialState.position
      );
      const [markerData, setMarkerData] = useState<GeoJSONFeature[]>(
        initialState.markerData
      );
      const [selectedMarkers, setSelectedMarkers] = useState<string[]>(
        initialState.selectedMarkers
      );

      const value: MapContextProps = {
        mapInstance,
        position,
        markerData,
        selectedMarkers,
        setMapInstance,
        setPosition,
        setMarkerData,
        setSelectedMarkers,
      };

      return (
        <MapContext.Provider value={value}>{children}</MapContext.Provider>
      );
    };

    render(
      <Wrapper>
        <TestComponent />
      </Wrapper>
    );

    // Initial state
    expect(screen.getByTestId('mapInstance').textContent).toBe('No Map');
    expect(screen.getByTestId('position').textContent).toBe('0,0');
    expect(screen.getByTestId('markerData').textContent).toBe('0');
    expect(screen.getByTestId('selectedMarkers').textContent).toBe('');

    // Validate state changes
    await act(async () => {
      await userEvent.click(screen.getByText('Set Map Instance'));
    });
    expect(screen.getByTestId('mapInstance').textContent).toBe('Map Set');

    await act(async () => {
      await userEvent.click(screen.getByText('Set Position'));
    });
    expect(screen.getByTestId('position').textContent).toBe('10,20');

    await act(async () => {
      await userEvent.click(screen.getByText('Set Marker Data'));
    });
    expect(screen.getByTestId('markerData').textContent).toBe('1');

    await act(async () => {
      await userEvent.click(screen.getByText('Set Selected Markers'));
    });
    expect(screen.getByTestId('selectedMarkers').textContent).toBe('marker1');
  });

  it('throws error when not used within MapContext provider', () => {
    // Catch the error thrown by the hook when used outside the provider
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<TestComponent />)).toThrow(
      'Fout, geen mapinstance gevonden in context.'
    );
    spy.mockRestore();
  });
});
