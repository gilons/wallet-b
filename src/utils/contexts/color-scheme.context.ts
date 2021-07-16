import { createContext } from "react";
import { ColorSchemeType } from "../types.utils";

const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export const DefaultScheme :ColorSchemeType = {
  colorScheme: isDarkMode ? "dark" : "light",
  setColorScheme: () => {}
}

export const ColorSchemeContext = createContext(DefaultScheme);