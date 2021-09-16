import createStore from "zustand"
import { AppReducer, AppReducerActions, DispatchStore } from "@/interfaces/index"
import { APP_NAME, COPYRIGHT, PROJECTS, SOCIAL_LINKS } from "@/config/app";
import { AppStoreTypes } from "../types";

interface FullReducer extends AppReducer, AppReducerActions { }

const initialState: AppReducer = {
  name: APP_NAME,
  socialLinks: SOCIAL_LINKS,
  copyright: COPYRIGHT,
  projects: PROJECTS,
}

function reducer(state: AppReducer, options: DispatchStore<AppStoreTypes>): AppReducer {
  switch (options.type) {
    default:
      return { ...state }
  }
}


export const useAppStore = createStore<FullReducer>((updater, _) => ({
  ...initialState,
  dispatch: (options: DispatchStore<AppStoreTypes>) => updater(state => reducer(state, options))
}))