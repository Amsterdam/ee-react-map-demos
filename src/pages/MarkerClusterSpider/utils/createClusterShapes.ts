import L from 'leaflet';

// Most of this code is taken from https://github.com/fritz-c/OverlappingMarkerSpiderfier
// This same library is used in the leaflet.markercluster library for spidery-ing

const twoPi = Math.PI * 2;
const circleFootSeparation = 23;
const circleStartAngle = twoPi / 12;
const spiralLengthStart = 11;
const spiralLengthFactor = 4;
const spiralFootSeparation = 26;

// @see https://github.com/jawj/OverlappingMarkerSpiderfier-Leaflet/blob/master/lib/oms.coffee#L92
export function createPointsCircle(count: number, centerPt: L.Point) {
  const circumference = circleFootSeparation * (2 + count);
  const legLength = circumference / twoPi;
  const angleStep = twoPi / count;
  const points = [];

  let angle = 0;
  let i = 0;

  for (i; i < legLength; i += 1) {
    angle = circleStartAngle + i * angleStep;

    points.push(
      new L.Point(
        centerPt.x + legLength * Math.cos(angle),
        centerPt.y + legLength * Math.sin(angle)
      )
    );
  }

  return points;
}

// @see https://github.com/jawj/OverlappingMarkerSpiderfier-Leaflet/blob/master/lib/oms.coffee#L101
export function createPointsSpiral(count: number, centerPt: L.Point) {
  const points = [];
  let angle = 0;
  let i = 0;
  let legLength = spiralLengthStart;

  for (i; i < legLength; i += 1) {
    angle += spiralFootSeparation / legLength + i * 0.0005;

    const x = centerPt.x + legLength * Math.cos(angle);
    const y = centerPt.y + legLength * Math.sin(angle);

    legLength += (twoPi * spiralLengthFactor) / angle;

    points.push(L.point(x, y));
  }

  return points;
}
