import { DefaultTheme } from "styled-components";

export type TextThemeProps  = {theme: DefaultTheme} & {
    bold?: boolean;
    italic?: boolean;
    fontWeight?: string;
    fontStyle?: string;
    fontSize?: string;
    color?: string
}