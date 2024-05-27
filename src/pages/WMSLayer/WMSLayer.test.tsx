import { describe, expect, it } from 'vitest';
import sinon from 'sinon';
import { render } from '@testing-library/react';
import L from 'leaflet';
import WMSLayer from './WMSLayer';

describe('WMSLayer', () => {
  let tileLayerWmsStub: sinon.SinonStub;

  beforeEach(() => {
    // Create a stub for L.tileLayer.wms
    tileLayerWmsStub = sinon
      .stub(L.tileLayer, 'wms')
      // @ts-expect-error ts(2345)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .callsFake((url, options) => {
        return {
          addTo: sinon.stub().returnsThis(),
          remove: sinon.stub().returnsThis(),
          setUrl: sinon.stub().returnsThis(),
          setParams: sinon.stub().returnsThis(),
        };
      });
  });

  afterEach(() => {
    // Restore the original method
    tileLayerWmsStub.restore();
  });

  it('renders the component', () => {
    const { container } = render(<WMSLayer />);
    expect(container.firstChild).toBeDefined();
  });

  it('renders a leaflet WMSLayer icon', () => {
    render(<WMSLayer />);
    expect(
      tileLayerWmsStub.calledWith(
        'https://map.data.amsterdam.nl/maps/adresseerbare_objecten?REQUEST=GetCapabilities&VERSION=1.1.0&SERVICE=wms'
      )
    ).toBe(true);
  });
});
