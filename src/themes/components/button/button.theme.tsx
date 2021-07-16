import styled from "styled-components";
import { shadow } from "../../themes.main";
import { WithThemeProps } from "../../types.themes";

interface ButtonProps extends WithThemeProps {
  enabled?: boolean;
  onClick?: () => any;
}
const ButtonContainer = styled.div<ButtonProps>`
  border: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  display: flex;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.accent};
  transition-delay: 500ms;
  min-width: 60px;
  min-height: 40px;
  border-radius: 3px;
  transition: all 0.5s 0.1s ease-in-out;
  overflow: hidden;
  position: relative;
  & > div:first-of-type {
    position: absolute;
    height: 100%;
    box-shadow: ${shadow};
    width: 0%;
    background-color: transparent;
    transition: all 1s 0.1s ease-in-out;
  }
  :hover > div:first-of-type {
    width: ${(props) => (props.enabled ? "100%" : "0%")};
    z-index: 2;
    transition: all 0.2s 0.1s ease-in-out;
    background-color: ${(props) =>
      props.enabled ? props.theme.primary : "transparent"};
  }
`;
const ButtonContent = styled.div<ButtonProps>`
  height: 100%;
  display: flex;
  z-index: 5;
  padding: 5px;
  transition: all 0.5s 1s ease-in-out;
  :hover {
    transition: all 0.5s 1s ease-in-out;
    transform: ${(props) => (props.enabled ? "scale(1.05)" : "scale(1)")};
  }
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const Button = (props: ButtonProps) => {
  return (
    <ButtonContainer
      onClick={() => props.enabled && props.onClick && props.onClick()}
      enabled={props.enabled}
    >
      <div></div>
      <ButtonContent enabled={props.enabled}>{props.children}</ButtonContent>
    </ButtonContainer>
  );
};
