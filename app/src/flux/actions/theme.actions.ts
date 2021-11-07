import { useThemeStore } from "src/flux/store"

export const toggleDarkMode = () => {
  return useThemeStore.setState(prev => ({ ...prev, darkMode: !prev.darkMode }))
}