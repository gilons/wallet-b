import styled from "styled-components";
import { Container, ContainerBlur, TextNormal } from "..";
import { shadow } from "../../themes.main";
import { FormProps } from "./form.theme.types";

const HeaderContent = styled(Container)`
  height: 20px;
  align-items: center;
`;
const Content = styled(Container)`
  margin-top: 0px;
`;
const WalletBForm = styled.form`
  padding: 6px;
  background-color: transparent;
  max-height: 90vh;
  max-width: 300px;
  border-radius: 6px;
  box-shadow: ${shadow};
`;
const MainContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
`;
export function Form(props: FormProps) {
    
    return <MainContainer>
    <ContainerBlur>
      <Content>
        <WalletBForm>
          <HeaderContent>
            <TextNormal fontWeight={"500"}>{props.title}</TextNormal>
          </HeaderContent>
          {props.children}
        </WalletBForm>
      </Content>
    </ContainerBlur>
  </MainContainer>
}