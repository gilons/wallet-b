import { WalletBProvider } from "../../providers";
import { TransactionHistoryList } from "./transaction-history-list.component";

export default {
  title: "Components/Transaction History List",
  component: TransactionHistoryList,
};

export const Default = () => (
  <WalletBProvider>
    <TransactionHistoryList></TransactionHistoryList>
  </WalletBProvider>
);
