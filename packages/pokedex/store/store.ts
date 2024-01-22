import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { pokemonsList } from "./pokemonListSlice";
import { pokemonData } from "./pokemonDataSlice";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () =>
  configureStore({
    reducer: {
      [pokemonsList.name]: pokemonsList.reducer,
      [pokemonData.name]: pokemonData.reducer,
    },
    devTools: true,
  });
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
export type AppStore = ReturnType<typeof makeStore>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
