import { IPokemonData } from "@pokedex-monorepo/utils";

export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonsListApiResponse {
  results: IPokemon[];
  count: number;
}

export interface IPokemonListState {
  list: IPokemon[];
  fullList: IPokemon[][];
  count: number;
  loading: boolean;
  error: string | null | undefined;
  currentPage: number;
  perPage: number;
  errorMsg: string;
}

export interface IListApiPops {
  page: number;
  pageSize: number;
}

export interface IPokemonDataState {
  data: IPokemonData | null;
  loading: boolean;
  error: string | null;
  errorMsg: string;
}
