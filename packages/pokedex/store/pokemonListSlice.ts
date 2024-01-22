import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { getPokemonsList } from "@pokedex-monorepo/utils";
import { IPokemonsListApiResponse, IPokemonListState, IListApiPops } from '../interface';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from './store';

export const fetchPockemonsList =
  ({ page, pageSize = 10 }: IListApiPops) =>
    async (dispatch: Dispatch, getState: () => AppState) => {
      try {
        const fetchedData = getState().pokemonsList.fullList;
        if (fetchedData[page - 1]) {
          dispatch(setPokemonsList(fetchedData[page - 1]));
        } else {
          dispatch(setLoading(true));
          const data: IPokemonsListApiResponse = await getPokemonsList({ page, limit: pageSize });
          const allData = [...fetchedData, data.results];
          dispatch(setAllData(allData));
          dispatch(setPokemonsListWithCount(data));
          dispatch(setLoading(false));
        }
        dispatch(setPagination({ page, pageSize: pageSize }))
      } catch (e) {
        dispatch(setError({ isError: true, msg: "Something went wrong" }));
      }
    };


const initialState: IPokemonListState = {
  list: [],
  fullList: [],
  count: 0,
  loading: false,
  error: null,
  currentPage: 1,
  perPage: 10,
  errorMsg: ''
};

export const pokemonsList = createSlice({
  name: 'pokemonsList',
  initialState,
  reducers: {
    setPokemonsList: (state, action) => {
      state.list = action.payload;
    },
    setPokemonsListWithCount: (state, action) => {
      state.list = action.payload.results;
      state.count = action.payload.count;
    },
    setAllData: (state, action) => {
      state.fullList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPagination: (state, action) => {
      state.currentPage = action.payload.page,
        state.perPage = action.payload.pageSize
    },
    setError: (state, action) => {
      state.error = action.payload.isError;
      state.errorMsg = action.payload.msg;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action: any) => {
        if (
          state.currentPage > action.payload.pokemonsList.currentPage
        ) {
          return {
            ...state,
          };
        }
        return {
          ...state,
          ...action?.payload?.pokemonsList,
        };
      })
  },
});

export const { setPokemonsList, setPokemonsListWithCount, setAllData, setLoading, setPagination, setError } = pokemonsList.actions;

export default pokemonsList.reducer;

export const getPokemonList = (state: AppState) => state.pokemonsList.list;
export const getPokemonFullList = (state: AppState) => state.pokemonsList.fullList;
export const getPokemonTotalCount = (state: AppState) => state.pokemonsList.count;
export const getPage = (state: AppState) => state.pokemonsList.currentPage;
export const getPageSize = (state: AppState) => state.pokemonsList.perPage;
export const isPokemonListLoading = (state: AppState) => state.pokemonsList.loading;
