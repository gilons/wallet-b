import {
  currenciesMap,
  Currency,
  CurrencyAmount,
  CurrencyAmounts,
} from "./currency-service.types";

export function sumToCurrency(
  amounts: CurrencyAmounts,
  defaultCurrency: Currency
) {
  if (amounts && Array.isArray(amounts) && defaultCurrency) {
    const defaultDollarFactor = currenciesMap[defaultCurrency].dollarFactor;
    const totalAmountInDollars = amounts
      .map((ele) => ele.amount * currenciesMap[ele.currency].dollarFactor)
      .reduce((previousValue, currentValue) => currentValue + previousValue, 0);
    const result = totalAmountInDollars / defaultDollarFactor
    return result;
  }
}

export function convertToCurrency(
  amount: CurrencyAmount,
  outputCurrency: Currency
) {
  if (amount && outputCurrency) {
    const outputCurrencyDollarFactor =
      currenciesMap[outputCurrency].dollarFactor;
    const amountInDollars =
      amount.amount * currenciesMap[amount.currency].dollarFactor;
     const result = amountInDollars / outputCurrencyDollarFactor;
    return result
  }
}

export function unusedCurrencies(usedCurrencies: Array<Currency>) {
  if (usedCurrencies && Array.isArray(usedCurrencies)) {
    const unusedKeys = (Object.keys(currenciesMap) as Array<Currency>).filter(
      (element) => usedCurrencies.indexOf(element) < 0
    );
    return unusedKeys.map((ele) => currenciesMap[ele]);
  }
}
