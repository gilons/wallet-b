import { WithTheme } from "../../providers";
import { ColorSchemeSwitcher } from "./color-scheme-switcher";

const ColorSchemeSwitcherStory = {
    component: ColorSchemeSwitcher,
    title: "Components/ColorSchemeSwitcher"
}

export default ColorSchemeSwitcherStory;

export const Default = () => <WithTheme><ColorSchemeSwitcher></ColorSchemeSwitcher></WithTheme>