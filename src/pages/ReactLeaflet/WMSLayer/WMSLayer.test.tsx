import { describe, expect, it } from 'vitest';
import { vi } from 'vitest';
import { render } from '@testing-library/react';
import WMSLayer from '@/pages/ReactLeaflet/WMSLayer/WMSLayer';
import { WMSTileLayer } from 'react-leaflet';

vi.mock('react-leaflet', async () => {
  const actual = await vi.importActual('react-leaflet');

  return {
    ...actual,
    WMSTileLayer: vi.fn(() => <div />),
  };
});

describe('WMSLayer', () => {
  it('renders the component', () => {
    const { container } = render(<WMSLayer />);
    expect(container.firstChild).toBeDefined();
  });
  it('renders a leaflet WMSLayer icon', () => {
    render(<WMSLayer />);
    expect(WMSTileLayer).toHaveBeenCalledWith(
      expect.objectContaining({
        url: 'https://map.data.amsterdam.nl/maps/adresseerbare_objecten?REQUEST=GetCapabilities&VERSION=1.1.0&SERVICE=wms',
        layers: 'verblijfsobjecten_woonfunctie',
        format: 'image/svg+xml',
        transparent: true,
      }),
      {}
    );
  });
});
