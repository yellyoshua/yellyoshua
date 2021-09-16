import { ThemeStoreTypes } from "flux/types";
import { DispatchStore } from "./app";

export interface ThemeReducer {
  darkMode: boolean;
}

export interface ThemeReducerActions {
  dispatch: (args: DispatchStore<ThemeStoreTypes>) => void;
}