import styled from "styled-components";
import { H3, forMobile, Header, Container } from "../../themes";
import { ColorSchemeSwitcher } from "../color-scheme-switcher";
import { ManagerCurrencies } from "../currencies-manager";
import { MainHeaderIcon } from "../../svg-icons";
import { Translator } from "../translator";

const BlurContent = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  width: 100vw;
`;

const Title = styled(H3)`
  margin-left: 30px;
  flex: 1;
  ${forMobile(`
      display: none;
  `)}
`;
const Right = styled(Container)`
  padding-right: 10px;
  align-items: center;
`;
const HeaderIconContainer = styled.div`
  ${forMobile(`
     flex: 1;
    `)}
`;
const ManagerContainer = styled.div`
  margin-right: 20px;
  margin-bottom: 7px;
  ${forMobile(`
    display: none
  `)}
`;
export const MainHeader = () => {
  return (
    <Header>
      <BlurContent>
        <HeaderIconContainer>
          <MainHeaderIcon />
        </HeaderIconContainer>
        <Title>Wallet-B</Title>
        <Right>
          <ManagerContainer>
            <ManagerCurrencies />
          </ManagerContainer>
          <Translator />
          <ColorSchemeSwitcher />
        </Right>
      </BlurContent>
    </Header>
  );
};
