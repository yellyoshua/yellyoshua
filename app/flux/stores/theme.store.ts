import createStore from "zustand"
import { ThemeReducer, ThemeReducerActions, DispatchStore } from "@/interfaces/index"
import { ThemeStoreTypes } from "../types";

interface FullReducer extends ThemeReducer, ThemeReducerActions { }

const initialState: ThemeReducer = {
  darkMode: false
}

function reducer(state: ThemeReducer, options: DispatchStore<ThemeStoreTypes>): ThemeReducer {
  switch (options.type) {
    case ThemeStoreTypes.TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode }
    default:
      return { ...state }
  }
}

export const useThemeStore = createStore<FullReducer>((updater, _) => ({
  ...initialState,
  dispatch: (options: DispatchStore<ThemeStoreTypes>) => updater(state => reducer(state, options))
}))