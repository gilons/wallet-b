import { Button } from ".";
import { WithTheme } from "../../../providers";

const ButtonStory = {
    component: Button,
    title: "Themes/Button"
}
export default ButtonStory


export const Default = () => <WithTheme><Button>Button Text</Button></WithTheme>
export const Enabled = () => <WithTheme><Button enabled>Button Text</Button></WithTheme>