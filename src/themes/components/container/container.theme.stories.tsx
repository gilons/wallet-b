import {
  ContainerBlur,
  ContainerShadow,
  ContainerSolid,
} from "../..";
import { WithTheme } from "../../../providers";
import { Container } from "./container.theme";

const TemplateSimple = (args: any) => (
  <WithTheme>
    <Container {...args}></Container>
  </WithTheme>
);
const TemplateBlur = (args: any) => (
  <WithTheme>
    <ContainerSolid>
      <div
        style={{
          width: "200px",
          height: "300px",
          borderRadius: "20px"
        }}
      >
        <ContainerBlur {...args}>
          <div>
            Hi Giles
          </div>
        </ContainerBlur>
      </div>
    </ContainerSolid>
  </WithTheme>
);
const TemplateShadow = (args: any) => (
  <WithTheme>
    <ContainerShadow {...args}></ContainerShadow>
  </WithTheme>
);
const TemplateSolid = (args: any) => (
  <WithTheme>
    <ContainerSolid {...args}></ContainerSolid>
  </WithTheme>
);

const ContainerStory = {
  component: Container,
  title: "Themes/Container",
};
export default ContainerStory;
export const Primary = TemplateSimple.bind({});
export const Blur = TemplateBlur.bind({});
export const Shadow = TemplateShadow.bind({});
export const solid = TemplateSolid.bind({});
