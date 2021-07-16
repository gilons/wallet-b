import { WalletBProvider } from "../../providers";
import { CurrencyBanner } from "./currency-banner.component";

export default {
  component: CurrencyBanner,
  title: "Components/Currency Banner",
};

export const Default = () => (
  <WalletBProvider>
    <CurrencyBanner></CurrencyBanner>
  </WalletBProvider>
);
