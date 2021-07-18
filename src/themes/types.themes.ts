export enum ColorSchemes {
  DARK = 'dark',
  LIGHT = 'light',
}
export type ColorScheme = `${ColorSchemes}`
export interface WithThemeProps {
    children: React.ReactNode,
}

export interface OptionContainerProps {
    show: boolean;
  }
  
  export interface Option<T = string> {
    text: string;
    value: T;
    selected?: boolean;
    Icon?: React.ComponentType<any>;
    iconColor?: string;
  }