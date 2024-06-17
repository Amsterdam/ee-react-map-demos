import { describe, expect, it } from 'vitest';
import { createPointsCircle, createPointsSpiral } from './createClusterShapes';
import L from 'leaflet';

describe('createClusterShapes', () => {
  it('createPointsCircle', () => {
    const points = createPointsCircle(8, L.point(468, 378));
    expect(points).toEqual([
      { x: 499.70141148675305, y: 396.30281845556794 },
      { x: 477.4742359907098, y: 413.3583300802266 },
      { x: 449.69718154443206, y: 409.70141148675305 },
      { x: 432.6416699197734, y: 387.4742359907098 },
      { x: 436.29858851324695, y: 359.69718154443206 },
      { x: 458.52576400929024, y: 342.6416699197734 },
      { x: 486.30281845556794, y: 346.29858851324695 },
      { x: 503.3583300802266, y: 368.52576400929024 },
      { x: 499.70141148675305, y: 396.30281845556794 },
      { x: 477.4742359907098, y: 413.3583300802266 },
      { x: 449.69718154443206, y: 409.70141148675305 },
      { x: 432.64166991977345, y: 387.4742359907099 },
      { x: 436.29858851324695, y: 359.69718154443206 },
      { x: 458.5257640092902, y: 342.6416699197734 },
      { x: 486.30281845556794, y: 346.29858851324695 },
      { x: 503.35833008022655, y: 368.5257640092901 },
      { x: 499.70141148675305, y: 396.30281845556794 },
      { x: 477.4742359907098, y: 413.3583300802266 },
      { x: 449.69718154443206, y: 409.70141148675305 },
      { x: 432.64166991977345, y: 387.4742359907099 },
      { x: 436.29858851324695, y: 359.69718154443206 },
      { x: 458.5257640092902, y: 342.6416699197734 },
      { x: 486.3028184555679, y: 346.2985885132469 },
      { x: 503.35833008022655, y: 368.5257640092901 },
      { x: 499.70141148675305, y: 396.30281845556794 },
      { x: 477.4742359907098, y: 413.3583300802266 },
      { x: 449.697181544432, y: 409.70141148675305 },
      { x: 432.64166991977345, y: 387.4742359907099 },
      { x: 436.29858851324695, y: 359.69718154443206 },
      { x: 458.5257640092902, y: 342.6416699197734 },
      { x: 486.30281845556783, y: 346.2985885132469 },
      { x: 503.35833008022655, y: 368.5257640092901 },
      { x: 499.7014114867531, y: 396.30281845556794 },
      { x: 477.4742359907098, y: 413.3583300802266 },
      { x: 449.69718154443206, y: 409.70141148675305 },
      { x: 432.64166991977345, y: 387.4742359907099 },
      { x: 436.2985885132469, y: 359.6971815444321 },
    ]);
  });

  it('createPointsSpiral', () => {
    const points = createPointsSpiral(8, L.point(301, 669));

    // Points returns an object of 200+ items so just test the first 10
    expect(points.slice(0, 10)).toEqual([
      { x: 293.1641571327026, y: 676.7200755539712 },
      { x: 281.286134338105, y: 660.0919265108704 },
      { x: 294.21408088025953, y: 641.1333706629412 },
      { x: 318.0625528516052, y: 639.2460812028582 },
      { x: 337.26594268468546, y: 654.3805347019445 },
      { x: 343.3266386192589, y: 678.4169787929878 },
      { x: 334.8239633874952, y: 701.9593234248033 },
      { x: 315.1783812392491, y: 717.76977723855 },
      { x: 290.16579526208335, y: 722.0127655511601 },
      { x: 265.8935965420404, y: 714.195531804346 },
    ]);
  });
});