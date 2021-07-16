import { WalletBProvider } from "../../providers";
import { ChangeDefaultCurrency } from "./change-default-currency.component";

export default {
  title: "Components/Change Currency",
  component: ChangeDefaultCurrency,
};

export const Default = () => (
  <WalletBProvider>
    <ChangeDefaultCurrency></ChangeDefaultCurrency>
  </WalletBProvider>
);
