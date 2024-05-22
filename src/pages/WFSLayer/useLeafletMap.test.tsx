import { useRef } from 'react';
import { render, screen } from '@testing-library/react';
import useLeafletMap from './useLeafletMap';

describe('useLeafletMap', () => {
  it('initializes a Leaflet map', async () => {
    // Test component that uses the hook
    const TestComponent = () => {
      const containerRef = useRef<HTMLDivElement>(null);
      const mapInstance = useLeafletMap(containerRef);

      return (
        <div ref={containerRef}>
          {mapInstance ? 'Map initialized' : 'Map not initialized'}
        </div>
      );
    };

    render(<TestComponent />);

    // Wait for the map to be initialized
    const mapElement = await screen.findByText('Map initialized');

    expect(mapElement).toBeInTheDocument();
  });
});
