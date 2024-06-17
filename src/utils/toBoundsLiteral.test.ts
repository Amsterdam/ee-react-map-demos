import L from 'leaflet';
import toBoundsLiteral from './toBoundsLiteral';

describe('toBoundsLiteral', () => {
  it('returns an array of bounds', () => {
    expect(
      toBoundsLiteral(
        L.latLngBounds([
          [52.259513275612356, 4.749786604950208],
          [52.48056974598709, 5.040988711846206],
        ])
      )
    ).toEqual([
      [4.749786604950208, 52.259513275612356],
      [5.040988711846206, 52.48056974598709],
    ]);
  });
});
