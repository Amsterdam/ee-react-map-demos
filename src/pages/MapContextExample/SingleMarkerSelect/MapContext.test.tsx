import React, { useState } from 'react';
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
    displayAlert,
    selectedMarker,
    setMapInstance,
    setPosition,
    setMarkerData,
    setDisplayAlert,
    setSelectedMarker,
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
                id: 1,
              },
              geometry: {
                type: 'Point',
                coordinates: [0, 0],
              },
            },
          ])
        }
      >
        Set Marker Data
      </button>
      <button onClick={() => setDisplayAlert(true)}>Set Display Alert</button>
      <button onClick={() => setSelectedMarker(1)}>Set Selected Marker</button>
      <div data-testid="mapInstance">
        {mapInstance !== null ? 'Map Set' : 'No Map'}
      </div>
      <div data-testid="position">{position.join(',')}</div>
      <div data-testid="markerData">{markerData.length}</div>
      <div data-testid="displayAlert">
        {displayAlert ? 'Show Alert' : 'No Alert'}
      </div>
      <div data-testid="selectedMarker">{selectedMarker}</div>
    </div>
  );
};

describe('SingleMarkerSelect MapContext', () => {
  it('provides and updates context values', async () => {
    const initialState: MapState = {
      mapInstance: null,
      position: [0, 0],
      markerData: [],
      displayAlert: false,
      selectedMarker: null,
    };

    const Wrapper = ({ children }: { children: React.ReactNode }) => {
      const [mapInstance, setMapInstance] = useState<Map | null>(
        initialState.mapInstance
      );
      const [position, setPosition] = useState<LatLngTuple>(
        initialState.position
      );
      const [markerData, setMarkerData] = useState<GeoJSONFeature[]>(
        initialState.markerData
      );
      const [displayAlert, setDisplayAlert] = useState(false);
      const [selectedMarker, setSelectedMarker] = useState<number | null>(
        initialState.selectedMarker
      );

      const value: MapContextProps = {
        mapInstance,
        position,
        markerData,
        displayAlert,
        selectedMarker,
        setMapInstance,
        setPosition,
        setMarkerData,
        setDisplayAlert,
        setSelectedMarker,
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
    expect(screen.getByTestId('displayAlert').textContent).toBe('No Alert');
    expect(screen.getByTestId('selectedMarker').textContent).toBe('');

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
      await userEvent.click(screen.getByText('Set Display Alert'));
    });
    expect(screen.getByTestId('displayAlert').textContent).toBe('Show Alert');

    await act(async () => {
      await userEvent.click(screen.getByText('Set Selected Marker'));
    });
    expect(screen.getByTestId('selectedMarker').textContent).toBe('1');
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
