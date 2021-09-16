import { useThemeStore } from "@/flux/store"
import { ThemeStoreTypes } from "@/flux/types";

export const toggleDarkMode = () => {
  const dispatch = useThemeStore.getState().dispatch;
  return dispatch({ type: ThemeStoreTypes.TOGGLE_DARK_MODE })
}