import { ContainerSolid } from "../../themes/components";
import styled from "styled-components";
import { WithThemeProps } from "../../themes/types.themes";
import { MainHeader } from "../../components";
import { storeInitSelector, useStoreSelector } from "../../store";

interface LayoutProps {
  storeInit?: boolean;
}
const Layout = styled(ContainerSolid)`
  min-height: 100vh;
  padding-top: 50px;
  width: 100vw;
  padding: 0px;
  overflow: auto;
`;
const ContentContainer = styled.div<LayoutProps>`
  max-width: 1224px;
  min-height: 100vh;
  height: auto;
  margin: auto;
  transition: all 1s 1s ease-in-out;
  margin-top: 70px;
`;

export const MainLayout = (props: WithThemeProps) => {
  const storeInit = useStoreSelector(storeInitSelector);
  return (
    <Layout>
      <MainHeader></MainHeader>
      <ContentContainer storeInit={storeInit}>
        {props.children}
      </ContentContainer>
    </Layout>
  );
};
