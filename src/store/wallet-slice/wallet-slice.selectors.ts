import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { currenciesMap, Currency, sumToCurrency, unusedCurrencies } from "../../services";
import { RootState } from "../store.ini";

const selectDefaultCurrency = (state: RootState) =>
state.wallet.defaultCurrency;

const selectCurrentCurrencies = (state: RootState) =>
state.wallet.currentCurrencies;

export const defaultCurrencySelector = createDraftSafeSelector(
selectDefaultCurrency,
(currency) => currency
);

export const defaultCurrencyAmountSelector = createDraftSafeSelector(
selectDefaultCurrency,
selectCurrentCurrencies,
(currency, currencies) => currencies.find((ele) => ele.currency === currency)
);

export const currencySelector = (currency: Currency) =>
createDraftSafeSelector(selectCurrentCurrencies, (currencies) =>
  currencies.find((ele) => ele.currency === currency)
);

export const currencyAmountSelector = (currency: Currency) =>
createDraftSafeSelector(selectCurrentCurrencies, (currencies) => {
  const newCurrency = currencies.find((ele) => ele.currency === currency);
  return newCurrency?.amount;
});

export const currentCurrenciesSelector = createDraftSafeSelector(
selectCurrentCurrencies,
(currencies) => currencies.map((ele) => currenciesMap[ele.currency])
);

export const currenciesAmountsSelector = createDraftSafeSelector(
selectCurrentCurrencies,
(currencies) => currencies
);

export const totalAmountSelector = createDraftSafeSelector(
selectCurrentCurrencies,
selectDefaultCurrency,
(currencies, defaultCurrency) => sumToCurrency(currencies, defaultCurrency)
);

export const unUsedCurrenciesSelector = createDraftSafeSelector(
selectCurrentCurrencies,
(currencies) => unusedCurrencies(currencies.map((ele) => ele.currency))
);

const selectTransactionHistory = (state: RootState) =>
state.wallet.transactionHistory;

export const transactionHistorySelector = createDraftSafeSelector(
selectTransactionHistory,
(history) => history
);

export const storeInitSelector = createDraftSafeSelector((state: RootState) => state.wallet.initialized, (init) => init)