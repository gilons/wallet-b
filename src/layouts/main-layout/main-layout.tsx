import { ContainerSolid } from "../../themes/components";
import styled from "styled-components";
import { WithThemeProps } from "../../themes/types.themes";
import { MainHeader } from "../../components";
import { storeInitSelector, useStoreSelector } from "../../store";

interface LayoutProps {
  storeInit?: boolean;
}
const Layout = styled(ContainerSolid)<LayoutProps>`
  min-height: 100vh;
  padding-top: ${(props) => (props.storeInit ? "50px" : "100vh")};
  transition: padding-top 0.5s ease-in-out;
  width: 100vw;
  padding: 0px;
  overflow: auto;
`;
const ContentContainer = styled.div`
  max-width: 1224px;
  min-height: 100vh;
  height: auto;
  margin: auto;
  margin-top: 70px;
`;

export const MainLayout = (props: WithThemeProps) => {
  const storeInit = useStoreSelector(storeInitSelector);

  return (
    <Layout storeInit={storeInit}>
      <MainHeader />
      <ContentContainer>
        {props.children}
      </ContentContainer>
    </Layout>
  );
};
