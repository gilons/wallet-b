import {
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { ColorScheme } from "../../themes/types.themes";
import { ColorSchemeContext } from "../contexts";
import { ColorSchemeType } from "../types.utils";



export function useColorScheme(): [
  ColorScheme,
  Dispatch<SetStateAction<ColorScheme>>
] {
  const schemeContext = useContext<ColorSchemeType>(ColorSchemeContext);

  return [schemeContext.colorScheme, schemeContext.setColorScheme];
}
