import { WalletBProvider } from "../../providers";
import { ManagerCurrencies } from "./manage-currencies.component";

export default {
  title: "Components/Manager Currencies",
  component: ManagerCurrencies,
};

export const Default = () => (
  <WalletBProvider>
    <ManagerCurrencies id={"manager-currencies-stories"}></ManagerCurrencies>
  </WalletBProvider>
);
