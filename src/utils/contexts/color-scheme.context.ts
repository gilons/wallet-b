import { createContext } from "react";
import { ColorSchemes } from "../../themes/types.themes";
import { ColorSchemeType } from "../types.utils";

const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export const DefaultScheme :ColorSchemeType = {
  colorScheme: isDarkMode ? ColorSchemes.DARK : ColorSchemes.LIGHT,
  setColorScheme: () => {}
}

export const ColorSchemeContext = createContext(DefaultScheme);