import customMarkerOptions from './customMarker';
import MapMarkerIcon from '../../../../assets/icons/map-marker.svg';

describe('customMarker', () => {
  it('returns the expected values', () => {
    expect(customMarkerOptions).toEqual(
      expect.objectContaining({
        iconUrl: MapMarkerIcon,
        iconSize: [24, 32],
        iconAnchor: [12, 32],
        className: 'c-marker',
      })
    );
  });
});
