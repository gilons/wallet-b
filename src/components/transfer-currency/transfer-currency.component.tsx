import { useLocales } from "../../locales";
import { Button, Form, Input, Select, TextNormal } from "../../themes";

import {
  ButtonContainer,
  ButtonSubContainer,
  ButtonText,
  CurrencyActionProps,
  CurrencyFormReducerActionType,
  InputGroup,
  SelectOptionType,
  toOption,
  TransferCurrencyInputTypes,
  TransferCurrencyReducerType,
} from "../currency-management-components";
import {
  currencyAmountSelector,
  CurrencyTransfer,
  currentCurrenciesSelector,
  defaultCurrencySelector,
  transferCurrency,
  useStoreDispatch,
  useStoreSelector,
} from "../../store";
import { ExchangeIcon } from "../../svg-icons";
import { useCallback, useEffect, useMemo, useReducer } from "react";
import { currenciesMap, Currency, } from "../../services";

const transferCurrencyFormReducer = (
  state: TransferCurrencyInputTypes,
  action: CurrencyFormReducerActionType
): TransferCurrencyInputTypes => {
  const newState = { ...state };
  switch (action.type) {
    case "amount": {
      newState.amount = action.data as number;
      return newState;
    }
    case "fromCurrency": {
      newState.fromCurrency = { ...(action.data as SelectOptionType) };
      return newState;
    }
    case "toCurrency": {
      newState.toCurrency = { ...(action.data as SelectOptionType) };
      return newState;
    }
    default: {
      return newState;
    }
  }
};

export function TransferCurrency(props: CurrencyActionProps) {
  const defaultCurrency = useStoreSelector(defaultCurrencySelector);

  const defaultCurrencyAmount = useStoreSelector(
    currencyAmountSelector(defaultCurrency)
  );

  const initialValues: TransferCurrencyInputTypes = {
    fromCurrency: toOption(currenciesMap[defaultCurrency]),
    amount: defaultCurrencyAmount ?? 0,
  };

  const [inputState,   dispatchInputUpdate] = useReducer<
    TransferCurrencyReducerType,
    TransferCurrencyInputTypes
  >(transferCurrencyFormReducer, initialValues, (args) => ({ ...args }));

  const { fromCurrency, amount, toCurrency } = inputState;
  const dispatch = useStoreDispatch();
  const { t } = useLocales();
  const currencies = useStoreSelector(currentCurrenciesSelector);
  const fromCurrencySelectOptions = useMemo(() => {
    return currencies
      ?.filter((ele) => ele.name !== toCurrency?.value)
      .map((ele) => ({
        value: ele.name,
        text: t(ele.title),
        Icon: (props: any) => (
          <ele.Icon width={"35px"} height={"35px"} {...props} />
        ),
      }));
  }, [currencies, t, toCurrency]);


  const currentSelectedAmount = useStoreSelector(
    currencyAmountSelector(fromCurrency.value)
  );

  const toCurrencySelectOption = useMemo(() => {
    return fromCurrencySelectOptions?.filter(
      (ele) => ele.value !== fromCurrency.value
    );
  }, [fromCurrency, fromCurrencySelectOptions]);


  useEffect(() => {
    if (currentSelectedAmount)
      dispatchInputUpdate({ type: "amount", data: currentSelectedAmount ?? 0 });
  }, [currentSelectedAmount]);

  const saveOperation = useCallback(() => {
    if (toCurrency?.value) {
      const newAmount = amount ?? 0
      const data: CurrencyTransfer = {
        fromCurrency: fromCurrency.value,
        toCurrency: toCurrency?.value,
        amount: newAmount,
      };
      dispatch(transferCurrency(data));
      props.onDone && props.onDone()
    }
  }, [fromCurrency, toCurrency, amount, dispatch, props]);

  const canSubmit = fromCurrency && amount && toCurrency;
  
  return (
    <Form title={t("transferCurrency.title")}>
      <>
        <InputGroup>
          <TextNormal>{t("transferCurrency.fromCurrency")}</TextNormal>
          <Select<Currency>
            value={t(fromCurrency.text)}
            onChange={(item) =>
              dispatchInputUpdate({ type: "fromCurrency", data: item })
            }
            Icon={fromCurrency.Icon}
            options={fromCurrencySelectOptions}
          />
        </InputGroup>
        <InputGroup>
        <TextNormal>{"  "}</TextNormal>
          <Input
            onChange={(event) =>
              dispatchInputUpdate({
                type: "amount",
                data: parseFloat(event.target.value),
              })
            }
            placeholder={t("transferCurrency.amountPlaceholder")}
            label={t("transferCurrency.amountPlaceholder")}
            value={amount}
            type="number"
            min={0}
            max={currentSelectedAmount}
          />
        </InputGroup>
        <InputGroup>
          <TextNormal>{t("transferCurrency.toCurrency")}</TextNormal>
          <Select<Currency>
            options={toCurrencySelectOption}
            value={t(toCurrency?.text ?? "")}
            Icon={toCurrency?.Icon}
            onChange={(item) => {
              dispatchInputUpdate({ type: "toCurrency", data: item });
            }}
            placeholder={t("transferCurrency.selectPlaceholder")}
          />
        </InputGroup>
        <ButtonContainer>
          <Button onClick={saveOperation} enabled={!!canSubmit}>
            <ButtonSubContainer>
              <ButtonText>{t("transferCurrency.buttonText")}</ButtonText>
              <ExchangeIcon width={"25px"} height={"25px"} />
            </ButtonSubContainer>
          </Button>
        </ButtonContainer>
      </>
    </Form>
  );
}
