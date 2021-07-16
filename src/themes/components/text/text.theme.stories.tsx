import { TextNormal, H1, H2, H3, TextTiny } from ".";
import { WithTheme } from "../../../providers";
const TextStory = {
  title: "Themes/Text",
  component: Text,
};

export default TextStory;
const storyText = "Giles' Story";
const TemplateNormal = (args: any) => (
  <WithTheme>
    <TextNormal {...args}>{storyText}</TextNormal>
  </WithTheme>
);
const TemplateH1 = (args: any) => (
  <WithTheme>
    <H1 {...args}>{storyText}</H1>
  </WithTheme>
);
const TemplateH2 = (args: any) => (
  <WithTheme>
    <H2 {...args}>{storyText}</H2>
  </WithTheme>
);
const TemplateH3 = (args: any) => (
  <WithTheme>
    <H3 {...args}>{storyText}</H3>
  </WithTheme>
);
const TemplateTiny = (args: any) => (
  <WithTheme>
    <TextTiny {...args}>{storyText}</TextTiny>
  </WithTheme>
);

export const Default = TemplateNormal.bind({});
export const H1Text = TemplateH1.bind({});
export const H2Text = TemplateH2.bind({});
export const H3Text = TemplateH3.bind({});
export const TinyText = TemplateTiny.bind({});
