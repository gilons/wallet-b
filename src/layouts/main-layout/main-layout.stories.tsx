import styled from "styled-components";
import { MainLayout } from ".";
import { WalletBProvider } from "../../providers";

const MainLayoutStory = {
  title: "Layouts/Main Layout",
  component: MainLayout,
};

const Content = styled.div`
  width: 100%;
  height: 200vh;
`;

export default MainLayoutStory;
export const Default = () => {
  return (
    <WalletBProvider>
      <MainLayout>
        <Content></Content>
      </MainLayout>
    </WalletBProvider>
  );
};
