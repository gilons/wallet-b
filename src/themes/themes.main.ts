import { css, DefaultTheme, } from "styled-components";
import { useColorScheme } from "../utils";
import { ColorScheme, ColorSchemes } from "./types.themes";
declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    color: string;
    accent: string;
    inverted: string;
    textH1: string;
    textH2: string;
    textH3: string;
    textNormal: string;
    blurOpacity: string;
    blurIntensity: string;
    textTiny: string;
    textFontWeight: string;
    textFontStyle: string;
    blurFactor: number;
  }
}

const mainStyles = {
  textH1: "4em",
  textH2: "3em",
  textH3: "2em",
  textNormal: "1em",
  textTiny: "0.5em",
  blurIntensity: "150",
  blurOpacity: "1",
  textFontWeight: "300",
  textFontStyle: "normal",
};

const lightTheme = Object.freeze<DefaultTheme>({
  primary: "#f9fdff",
  inverted: "#031f22",
  color: "#032631",
  accent: "rgba(3, 37, 31, 0.05)",
  ...mainStyles,
  blurFactor: 1,
});

const darkTheme = Object.freeze<DefaultTheme>({
  primary: "#031f22",
  inverted: "#f9fdff",
  color: "#f5f5f5",
  accent: "rgba(249, 253, 255,0.1)",
  ...mainStyles,
  blurFactor: 1,
});

export const themes :{[key in ColorScheme]: DefaultTheme} = {
  [ColorSchemes.DARK]: darkTheme,
  [ColorSchemes.LIGHT]: lightTheme,
};

export const FlexRowItemsCenter = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const useTheme = () => {
  const [colorScheme] = useColorScheme();
  return themes[colorScheme];
};

export const coverScreen = css`
  position: fixed;
  padding-top: 0px;
  margin-top: -2vh;
  background-color: transparent;
  width: 100vw;
  height: 102vh;
`;
export const forMobile = (styles: string) => {
  return css`
    @media only screen and (max-width: 600px) {
      ${styles}
    }
  `;
};

export const headerShadow =
  "box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;";
export const shadow =
  "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;";
export const fontType = '"Gill Sans", sans-serif';
