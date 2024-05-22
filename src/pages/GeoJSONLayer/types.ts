import type { Point } from 'geojson';

export type BaseApiResponse<T, PropertyName extends string> = {
  _embedded: {
    [P in PropertyName]: T[];
  };
  page: {
    number: number;
    size: number;
    totalElements?: number;
    totalPages?: number;
  };
};

export type Boom = {
  id: number;
  gbdBuurtId: string;
  geometrie: Point;
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

export type BoomApiResponse = BaseApiResponse<Boom, 'stamgegevens'>;
