import type { Point } from 'geojson';

export type Boom = {
  id: number;
  gbdBuurtId: string;
  geometry: Point;
  typeBeheerderPlus: string | null;
  boomhoogteklasseActueel: string | null;
  typeEigenaarPlus: string | null;
  jaarVanAanleg: number | null;
  soortnaam: string | null;
  stamdiameterklasse: string | null;
  standplaatsGedetailleerd: string | null;
  typeObject: string | null;
  typeSoortnaam: string | null;
  soortnaamKort: string | null;
  soortnaamTop: string | null;
};
