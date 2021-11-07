import { useThemeStore } from "src/flux/store"

export const changeDarkMode = (active: boolean) => {
  active ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove("dark")
  return useThemeStore.setState(prev => ({ ...prev, darkMode: active }))
}

export const toggleDarkMode = () => {
  return useThemeStore.setState(prev => ({ ...prev, darkMode: !prev.darkMode }))
}