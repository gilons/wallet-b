import { useLocales } from "../../locales";
import { Button, Form, Input, Select, TextNormal } from "../../themes";

import {
  ButtonContainer,
  ButtonSubContainer,
  ButtonText,
  CurrencyActionProps,
  DepositCurrencyActionType,
  DepositCurrencyReducerType,
  InputGroup,
  toOption,
} from "../currency-management-components";
import {
  addAmountToCurrency,
  currentCurrenciesSelector,
  defaultCurrencySelector,
  useStoreDispatch,
  useStoreSelector,
} from "../../store";
import { useCallback, useMemo, useReducer } from "react";
import { currenciesMap, Currency, CurrencyAmount } from "../../services";
import { DepositIcon } from "../../svg-icons";

const depositCurrencyReducer = (
  state: CurrencyAmount,
  action: DepositCurrencyActionType
): CurrencyAmount => {
  const newState = { ...state };
  switch (action.type) {
    case "amount": {
      newState.amount = action.data as number;
      return newState;
    }
    case "currency": {
      newState.currency = action.data as Currency;
      return newState;
    }
    default: {
      return newState;
    }
  }
};

export function DepositCurrency(props: CurrencyActionProps) {

  const defaultCurrency = useStoreSelector(defaultCurrencySelector);
  const initialValues: CurrencyAmount = {
    currency: defaultCurrency,
    amount: 0,
  };
  const [inputState, dispatchInputUpdate] = useReducer<
    DepositCurrencyReducerType,
    CurrencyAmount
  >(depositCurrencyReducer, initialValues, (args) => ({ ...args }));

  const { currency, amount } = inputState;
  const dispatch = useStoreDispatch();
  const { t } = useLocales();
  const currencies = useStoreSelector(currentCurrenciesSelector);


  const options = useMemo(() => {
    return currencies?.map((ele) => ({
      value: ele.name,
      text: t(ele.title),
      Icon: (props: any) => (
        <ele.Icon width={"35px"} height={"35px"} {...props} />
      ),
    }));
  }, [currencies, t]);

  const saveOperation = useCallback(() => {
    if (amount) {
      const data: CurrencyAmount = {
        currency,
        amount,
      };
      dispatch(addAmountToCurrency(data));
      props.onDone && props.onDone();
    }
  }, [currency, amount, dispatch, props]);

  const canSubmit = currency && amount;
  const dpValue = toOption(currenciesMap[currency]);

  
  return (
    <Form title={t("depositCurrency.title")}>
      <>
        <InputGroup>
          <TextNormal>{t("depositCurrency.currency")}</TextNormal>
          <Select<Currency>
            id={"deposit-currency-to"}
            value={t(dpValue.text)}
            onChange={(item) =>
              dispatchInputUpdate({ type: "currency", data: item.value })
            }
            Icon={dpValue.Icon}
            options={options}
          />
        </InputGroup>
        <InputGroup>
          <TextNormal>{t("depositCurrency.amount")}</TextNormal>
          <Input
            onChange={(event) =>
              dispatchInputUpdate({
                type: "amount",
                data: parseInt(event.target.value, 10),
              })
            }
            min={0}
            placeholder={t("depositCurrency.amountPlaceholder")}
            label={t("depositCurrency.amountPlaceholder")}
            value={amount?.toFixed(0)}
            type="number"
          />
        </InputGroup>
        <ButtonContainer>
          <Button onClick={saveOperation} enabled={!!canSubmit}>
            <ButtonSubContainer>
              <ButtonText>{t("depositCurrency.buttonText")}</ButtonText>
              <DepositIcon width={"25px"} height={"25px"} />
            </ButtonSubContainer>
          </Button>
        </ButtonContainer>
      </>
    </Form>
  );
}
