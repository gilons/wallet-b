import moment from "moment";
import { WalletBProvider } from "../../providers";
import { CurrencyTypes } from "../../services";
import { TransactionTypes } from "../../store";
import { TransactionHistoryItem } from "./transaction-history-item.component";

export default {
  title: "Components/Transaction History",
  component: TransactionHistoryItem,
};

export const Deposit = () => (
  <WalletBProvider>
    <TransactionHistoryItem
      transaction={{
        transactionType: TransactionTypes.DEPOSIT,
        amount: 500,
        currency: CurrencyTypes.USD,
        transactionDate: moment().format(),
      }}
    ></TransactionHistoryItem>
  </WalletBProvider>
);

export const Transfer = () => (
  <WalletBProvider>
    <TransactionHistoryItem
      transaction={{
        transactionType: TransactionTypes.TRANSFER,
        amount: 500,
        toCurrency: CurrencyTypes.EUR,
        currency: CurrencyTypes.USD,
        transactionDate: moment().format(),
      }}
    ></TransactionHistoryItem>
  </WalletBProvider>
);
