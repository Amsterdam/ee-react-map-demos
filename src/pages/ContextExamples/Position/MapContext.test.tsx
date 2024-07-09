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

// Helper component to test the context
const TestComponent = () => {
  const { mapInstance, position, setMapInstance, setPosition } =
    useMapInstance();

  return (
    <div>
      <button onClick={() => setMapInstance({} as Map)}>
        Set Map Instance
      </button>
      <button onClick={() => setPosition([10, 20] as LatLngTuple)}>
        Set Position
      </button>
      <div data-testid="mapInstance">
        {mapInstance !== null ? 'Map Set' : 'No Map'}
      </div>
      <div data-testid="position">{position.join(',')}</div>
    </div>
  );
};

describe('Position MapContext', () => {
  it('provides and updates context values', async () => {
    const initialState: MapState = {
      mapInstance: null,
      position: [0, 0],
    };

    const Wrapper = ({ children }: PropsWithChildren) => {
      const [mapInstance, setMapInstance] = useState<Map | null>(
        initialState.mapInstance
      );
      const [position, setPosition] = useState<LatLngTuple>(
        initialState.position
      );

      const value: MapContextProps = {
        mapInstance,
        position,
        setMapInstance,
        setPosition,
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

    // Validate state changes
    await act(async () => {
      await userEvent.click(screen.getByText('Set Map Instance'));
    });
    expect(screen.getByTestId('mapInstance').textContent).toBe('Map Set');

    await act(async () => {
      await userEvent.click(screen.getByText('Set Position'));
    });
    expect(screen.getByTestId('position').textContent).toBe('10,20');
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
