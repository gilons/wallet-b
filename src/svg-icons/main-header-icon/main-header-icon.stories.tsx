import { WithTheme } from "../../providers";
import { MainHeaderIcon } from "./main-header-icon";

const LogoStory = {
    component: MainHeaderIcon,
    title: "Components/SVG Main Header Logo"
}
export default LogoStory;
export const Default  = () => <WithTheme><MainHeaderIcon></MainHeaderIcon></WithTheme>