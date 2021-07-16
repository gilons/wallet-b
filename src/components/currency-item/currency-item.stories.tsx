import { WalletBProvider } from "../../providers";
import { CurrencyTypes } from "../../services";
import { CurrencyItem } from "./currency-item.component";

export default {
  title: "Components/Currency Item",
  component: CurrencyItem,
};

export const Default = () => (
  <WalletBProvider>
    <CurrencyItem
      amount={{ currency: CurrencyTypes.AUSTRALIAN_DOLLAR, amount: 4000 }}
    />
  </WalletBProvider>
);
