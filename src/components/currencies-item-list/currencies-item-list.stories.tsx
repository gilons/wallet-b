import { WalletBProvider } from "../../providers";
import { CurrenciesItemList } from "./currencies-item-list.component";

export default {
  component: CurrenciesItemList,
  title: "Components/Currency Item List",
};

export const Default = () => (
  <WalletBProvider>
    <CurrenciesItemList></CurrenciesItemList>
  </WalletBProvider>
);
