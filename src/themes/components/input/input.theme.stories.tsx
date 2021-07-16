import { WithTheme } from "../../../providers"
import { Input } from "./input.theme"

const TextInputStory = {
    component: Input,
    title: "Themes/Input",
}

export default TextInputStory

export const Default = () => <WithTheme><Input label={"Enter Text In me"} placeholder="Type in me" /></WithTheme>