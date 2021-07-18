import { Currency, CurrencyAmount } from "../../services";

export interface WalletState {
  defaultCurrency: Currency;
  initialized: boolean,
  currentCurrencies: Array<CurrencyAmount>;
  transactionHistory: Array<TransactionHistory>;
}

export enum TransactionTypes  {
  DEPOSIT = "deposit",
  TRANSFER = "transfer"
}

export type TransactionType = `${TransactionTypes}`;
export interface TransactionHistory {
  currency: Currency;
  amount: number;
  toCurrency?: Currency;
  transactionType: TransactionType;
  transactionDate: string;
}

export interface CurrencyTransfer {
  fromCurrency: Currency;
  toCurrency: Currency;
  amount: number;
}
