import { WithLocaleProvider } from "../../locales";
import { ContainerSolid } from "../../themes";
import { WithTheme } from "../../providers";
import { Translator } from "./translator";

const TranslatorStory = {
  component: Translator,
  title: "Components/Translator",
};
export default TranslatorStory;

export const Default = () => (
  <WithLocaleProvider>
    <WithTheme>
      <ContainerSolid><Translator></Translator></ContainerSolid>
    </WithTheme>
  </WithLocaleProvider>
);
