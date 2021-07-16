import styled, { DefaultTheme } from "styled-components";
import { shadow } from "../../themes.main";
import { WithThemeProps } from "../../types.themes";
import { Container } from "./container.theme";

type BlurFuncParamsType = { theme: DefaultTheme } & BlurContentPropsType;
const blurIntensity = (props: BlurFuncParamsType) => {
  const intensity = parseInt(
    (props.intensity || props.theme.blurIntensity) as string
  );
  return intensity * props.theme.blurFactor;
};
const blurOpacity = (props: BlurFuncParamsType) =>
  props.opacity || props.theme.blurOpacity;

const BlurContent = styled.div<BlurContentPropsType>`
  width: 100%;
  background-color: ${(props) => props.theme.inverted};
  height: 100%;
  -webkit-filter: blur(${blurIntensity}px);
  -moz-filter: blur(${blurIntensity}px);
  -o-filter: blur(${blurIntensity}px);
  -ms-filter: blur(${blurIntensity}px);
  filter: blur(${blurIntensity}px);
  opacity: ${blurOpacity};
  position: absolute;
`;
interface BlurContentPropsType {
  intensity?: number;
  opacity?: number;
}

const BlurContainerPiece = styled.div`
  overflow: visible;
  width: 100%;
  position: relative;
  flex: 1;
  box-shadow: ${shadow};
`;
const MainContent = styled(Container)`
  filter: blur(0px);
`;
export const ContainerBlur = (props: BlurContainerPropsType) => {
  return (
    <BlurContainerPiece>
      <BlurContent opacity={props.opacity} intensity={props.intensity} />
      <MainContent>{props.children}</MainContent>
    </BlurContainerPiece>
  );
};

interface BlurContainerPropsType extends WithThemeProps {
  opacity?: number;
  intensity?: number;
}
