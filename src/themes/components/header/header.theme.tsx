import styled from "styled-components";
import { headerShadow } from "../../themes.main";
import { ContainerBlur } from "../container";

import { WithThemeProps } from "../..";

const HeaderContainer = styled.div`
  box-shadow: ${headerShadow};
  position: fixed;
  padding-top: 0px;
  z-index: 6;
  background-color: ${(props) => props.theme.primary};
  height: auto;
  width: 100%;
`;

export const Header = (props: WithThemeProps) => {
  return (
    <HeaderContainer>
      <ContainerBlur intensity={100}>
        {props.children}
      </ContainerBlur>
    </HeaderContainer>
  );
};
