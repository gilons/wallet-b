import { render } from "@testing-library/react";
import { useEffect } from "react";
import { WalletBProvider } from "../../providers";
import { currenciesMap, Currency, CurrencyTypes } from "../../services";
import { useStoreDispatch, useStoreSelector } from "../store.hooks";
import { store } from "../store.ini";
import {
  addAmountToCurrency,
  addCurrency,
  changeDefaultCurrency,
  transferCurrency,
} from "./wallet-slice";
import { currencySelector } from "./wallet-slice.selectors";

test("it should change default currency", () => {
  const TestComponent = () => {
    const dispatch = useStoreDispatch();
    dispatch(changeDefaultCurrency(CurrencyTypes.EUR));
    expect(store.getState().wallet.defaultCurrency).toEqual(CurrencyTypes.EUR);
    return <div></div>;
  };

  render(
    <WalletBProvider>
      <TestComponent />
    </WalletBProvider>
  );
});

test("it should not change default currency", () => {
  const TestComponent = () => {
    const dispatch = useStoreDispatch();
    dispatch(changeDefaultCurrency(CurrencyTypes.DINAR));
    expect(store.getState().wallet.defaultCurrency).toEqual(CurrencyTypes.EUR);
    return <div></div>;
  };

  render(
    <WalletBProvider>
      <TestComponent />
    </WalletBProvider>
  );
});

test("it should add new currency", () => {
  const TestComponent = () => {
    const dispatch = useStoreDispatch();
    dispatch(addCurrency({ currency: CurrencyTypes.DINAR, amount: 0 }));
    expect(
      store
        .getState()
        .wallet.currentCurrencies.find(
          (ele) => ele.currency === CurrencyTypes.DINAR
        )
    ).toEqual({ currency: CurrencyTypes.DINAR, amount: 0 });
    return <div></div>;
  };

  render(
    <WalletBProvider>
      <TestComponent />
    </WalletBProvider>
  );
});

it("should deposit in a currency", () => {
  const TestComponent = () => {
    const currentCurrency = useStoreSelector(
      currencySelector(CurrencyTypes.USD)
    );
    const dispatch = useStoreDispatch();
    useEffect(() => {
      dispatch(
        addAmountToCurrency({ currency: CurrencyTypes.USD, amount: 50 })
      );
      expect(
        store
          .getState()
          .wallet.currentCurrencies.find(
            (ele) => ele.currency === CurrencyTypes.USD
          )
      ).toEqual({
        currency: CurrencyTypes.USD,
        amount: (currentCurrency?.amount ?? 0) + 50,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div></div>;
  };

  render(
    <WalletBProvider>
      <TestComponent />
    </WalletBProvider>
  );
});

it("should not deposit in a currency", () => {
  const TestComponent = () => {
    const dispatch = useStoreDispatch();
    useEffect(() => {
      dispatch(
        addAmountToCurrency({ currency: CurrencyTypes.YEN, amount: 50 })
      );
      expect(
        store
          .getState()
          .wallet.currentCurrencies.find(
            (ele) => ele.currency === CurrencyTypes.YEN
          )
      ).toBeUndefined();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div></div>;
  };

  render(
    <WalletBProvider>
      <TestComponent />
    </WalletBProvider>
  );
});
it("should transfer currencies", () => {
  const TestComponent = () => {
    const fromCurrency = useStoreSelector(currencySelector(CurrencyTypes.USD));
    const toCurrency = useStoreSelector(currencySelector(CurrencyTypes.EUR));
    const dispatch = useStoreDispatch();
    useEffect(() => {
      dispatch(
        transferCurrency({
          fromCurrency: fromCurrency?.currency as Currency,
          amount: 50,
          toCurrency: toCurrency?.currency as Currency,
        })
      );
      expect(
        store
          .getState()
          .wallet.currentCurrencies.find(
            (ele) => ele.currency === toCurrency?.currency
          )
      ).toEqual({
        currency: toCurrency?.currency as Currency,
        amount:
          (toCurrency?.amount ?? 0) +
          50 / currenciesMap[toCurrency?.currency as Currency]?.dollarFactor,
      });
      expect(
        store
          .getState()
          .wallet.currentCurrencies.find(
            (ele) => ele.currency === fromCurrency?.currency
          )
      ).toEqual({
        currency: fromCurrency?.currency as Currency,
        amount: (fromCurrency?.amount ?? 0) - 50,
      });

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div></div>;
  };

  render(
    <WalletBProvider>
      <TestComponent />
    </WalletBProvider>
  );
});

it("should not transfer currencies", () => {
    const TestComponent = () => {
      const fromCurrency = useStoreSelector(currencySelector(CurrencyTypes.DINAR));
      const toCurrency = useStoreSelector(currencySelector(CurrencyTypes.EUR));
      const dispatch = useStoreDispatch();
      useEffect(() => {
        dispatch(
          transferCurrency({
            fromCurrency: fromCurrency?.currency as Currency,
            amount: 50,
            toCurrency: toCurrency?.currency as Currency,
          })
        );
        expect(
          store
            .getState()
            .wallet.currentCurrencies.find(
              (ele) => ele.currency === toCurrency?.currency
            )
        ).toEqual({
          currency: toCurrency?.currency as Currency,
          amount:
            (toCurrency?.amount ?? 0),
        });
        expect(
          store
            .getState()
            .wallet.currentCurrencies.find(
              (ele) => ele.currency === fromCurrency?.currency
            )
        ).toEqual({
          currency: fromCurrency?.currency as Currency,
          amount: (fromCurrency?.amount ?? 0),
        });
  
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
  
      return <div></div>;
    };
  
    render(
      <WalletBProvider>
        <TestComponent />
      </WalletBProvider>
    );
  });
