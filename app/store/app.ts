import createStore from "zustand"
import { APP_NAME, COPYRIGHT, PROJECTS, SOCIAL_LINKS } from "@/config/app"
import { Project, SocialLink } from "@/interfaces/app"

type AppStoreType = {
  name?: string,
  API_URL?: string,
  socialLinks: SocialLink[],
  copyright: string,
  projects: Project[]
}

type DispatchOptionsType<T> = {
  value: T,
  type: any
}

function appReducer(state: AppStoreType, options: DispatchOptionsType<string>): AppStoreType {
  return { name: options.value, ...state }
}

export const useAppStore = createStore<AppStoreType>(updater => ({
  name: APP_NAME,
  socialLinks: SOCIAL_LINKS,
  copyright: COPYRIGHT,
  projects: PROJECTS,
  dispatch: (options: DispatchOptionsType<string>) => updater(state => appReducer(state, options))
}))