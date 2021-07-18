import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { Currency, CurrencyAmount, CurrencyTypes } from "../../services";
import { convertToCurrency } from "../../services/currencies-service/currency-service";
import {
  CurrencyTransfer,
  TransactionHistory,
  TransactionTypes,
  WalletState,
} from "./wallet-slice.types";

export const initialState: WalletState = {
  defaultCurrency: CurrencyTypes.USD,
  initialized: false,
  currentCurrencies: [
    {
      amount: 0,
      currency: CurrencyTypes.USD,
    },
    {
      amount: 580.42,
      currency: CurrencyTypes.EUR,
    },
    {
      amount: 10000,
      currency: CurrencyTypes.SWISS_FRANC,
    },
  ],
  transactionHistory: [],
};

const findCurrency = (state: WalletState, currency: Currency) =>
  state.currentCurrencies.find((ele) => ele.currency === currency);

const addTransactionHistory = (
  state: WalletState,
  history: TransactionHistory
) => {
  if (history) state.transactionHistory.unshift(history);
};

const walletSlice = createSlice({
  name: "wallet-store",
  initialState,
  reducers: {
    init(state: WalletState, action: PayloadAction<WalletState>) {
      const newState = action.payload;
      state.currentCurrencies = newState.currentCurrencies;
      state.defaultCurrency = newState.defaultCurrency;
      state.initialized = true;
      state.transactionHistory = newState.transactionHistory;
    },

    addCurrency(state, action: PayloadAction<CurrencyAmount>) {
      if (action.payload) state.currentCurrencies.push(action.payload);
    },

    changeDefaultCurrency(state, action: PayloadAction<Currency>) {
      state.defaultCurrency = action.payload;
    },

    addAmountToCurrency(state, action: PayloadAction<CurrencyAmount>) {
      const currency = findCurrency(state, action.payload?.currency);
      if (currency) {
        currency.amount += action.payload.amount;
        const history: TransactionHistory = {
          ...currency,
          amount: action.payload.amount,
          transactionDate: moment().format(),
          transactionType: TransactionTypes.DEPOSIT,
        };
        addTransactionHistory(state, history);
      }
    },

    transferCurrency(state, action: PayloadAction<CurrencyTransfer>) {
      const fromCurrency = findCurrency(state, action.payload?.fromCurrency);
      const toCurrency = findCurrency(state, action.payload?.toCurrency);
      if (fromCurrency && toCurrency) {
        if (fromCurrency.amount >= action.payload.amount) {
          const amount: CurrencyAmount = {
            currency: action.payload.fromCurrency,
            amount: action.payload.amount,
          };
          const newAmount = convertToCurrency(amount, toCurrency.currency);
          if (newAmount) {
            toCurrency.amount += newAmount;
            fromCurrency.amount -= action.payload.amount;
            const history: TransactionHistory = {
              amount: action.payload.amount,
              transactionType: TransactionTypes.TRANSFER,
              currency: action.payload.fromCurrency,
              transactionDate: moment().format(),
              toCurrency: action.payload.toCurrency,
            };
            addTransactionHistory(state, history);
          }
        }
      }
    },
  },
});

export const walletReducer = walletSlice.reducer;

export const {
  changeDefaultCurrency,
  addAmountToCurrency,
  transferCurrency,
  addCurrency,
  init,
} = walletSlice.actions;
