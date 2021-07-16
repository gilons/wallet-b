import { WalletBProvider } from "../../providers";
import { MainHeader } from "./main-header";

const MainHeaderStory = {
  title: "Components/Main Header",
  component: MainHeader,
};
export default MainHeaderStory;

export const Default = () => {
  return (
    <WalletBProvider>
      <MainHeader />
    </WalletBProvider>
  );
};
