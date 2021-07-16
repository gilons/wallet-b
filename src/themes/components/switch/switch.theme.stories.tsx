import { useState } from "react";
import { WithTheme } from "../../../providers";
import { Switch } from "./switch.theme";

const SwitchStory = {
    component: Switch,
    title: "Themes/Switches"
}
export default SwitchStory;
export const Default = () => {
    const [checked, setCheck] = useState(true)
    const toggleCheck = () => {
        setCheck((checked) => !checked)
    }
    const handleChange = () => {
        toggleCheck()
    }
    return<WithTheme><Switch checked={checked} onChange={handleChange}>
        <div></div>
    </Switch></WithTheme>
}