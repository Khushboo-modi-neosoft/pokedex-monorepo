export type IPokemonSingleData = {
  id: number;
  name: string;
};

export type IPokemonListResponse = {
  count: number;
  results: IPokemonSingleData[];
};

export interface IPokemonData {
  id: number;
  name: string;
  height?: number;
  weight?: number;
  location_area_encounters?: string;
  abilities?: any;
  order: number;
  base_experience?: number;
  stats?: {
    base_stat: number | string;
    stat: {
      name: string;
    };
  }[];
  sprites?: {
    other: { dream_world: { front_default: string } };
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}
