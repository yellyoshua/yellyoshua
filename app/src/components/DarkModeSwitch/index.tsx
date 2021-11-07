import { changeDarkMode } from "@/app/flux/actions";
import { useThemeStore } from "@/app/flux/stores";
import Switch from "react-switch";
import { UniconIcon } from "@/app/components";

export const DarkModeSwitch = () => {
  const isDarkMode = useThemeStore(state => state.darkMode)

  return <div>
    <Switch
      className="shadow-sm"
      checkedIcon={<UniconIcon uniconIcon="uil uil-moon" className="p-2 text-white" />}
      uncheckedIcon={<UniconIcon uniconIcon="uil uil-sun" className="p-2 text-yellow-600" />}
      onColor="#303030"
      offColor="#FFF200"
      onChange={(checked) => changeDarkMode(checked)}
      checked={isDarkMode}
    />

  </div>

}