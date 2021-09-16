import { AppStoreTypes } from "flux/types";
import { SocialLink, Project, DispatchStore } from "./app";

export interface AppReducer {
  name: string,
  API_URL?: string,
  socialLinks: SocialLink[],
  copyright: string,
  projects: Project[]
}

export interface AppReducerActions {
  dispatch: (args: DispatchStore<AppStoreTypes>) => void;
}