import { InputHTMLAttributes } from "react";
import { WithThemeProps } from "../../types.themes";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    checked: boolean;
}

export type SwitchPropsType = Props & WithThemeProps 
export interface SwitchLabelProps {
    checked: boolean;
}