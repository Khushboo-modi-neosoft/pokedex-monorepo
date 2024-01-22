import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

import { getPokemonById } from "@pokedex-monorepo/utils";
import { IPokemonDataState } from '../interface';


export const fetchPokemonData =
  (name: string) =>
    async (dispatch: Dispatch) => {
      dispatch(setLoading(true));
      try {
        const res = await getPokemonById(name);
        dispatch(setLoading(false));
        return dispatch(setPokemonData(res));
      } catch (error) {
        dispatch(setPokemonData(null));
        dispatch(setError({ isError: true, msg: "Something went wrong" }));
        dispatch(setLoading(false));
      }
    };

const initialState: IPokemonDataState = {
  data: null,
  loading: false,
  error: null,
  errorMsg: ''
};

export const pokemonData = createSlice({
  name: "pokemonData",
  initialState,
  reducers: {
    setPokemonData(state, action) {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload.isError;
      state.errorMsg = action.payload.msg;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.pokemonData,
      };
    });
  },
});

export const { setPokemonData, setError, setLoading } = pokemonData.actions;
export default pokemonData.reducer;

export const getPokemonData = (state: AppState) =>
  state.pokemonData.data;
export const getLoadingState = (state: AppState) =>
  state.pokemonData.loading;
