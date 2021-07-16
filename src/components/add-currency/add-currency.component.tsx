import { useCallback, useMemo, useRef, useState } from "react";
import { useLocales } from "../../locales";
import { currenciesMap, Currency, CurrencyAmount } from "../../services";
import {
  addCurrency,
  unUsedCurrenciesSelector,
  useStoreDispatch,
  useStoreSelector,
} from "../../store";
import { Button, Form, Option, Select } from "../../themes";
import {
  ButtonContainer,
  ButtonSubContainer,
  ButtonText,
  CurrencyActionProps
} from "../currency-management-components";
import { CheckedIcon } from "../../svg-icons";

export const AddCurrency = (props: CurrencyActionProps) => {
  const unusedCurrencies = useStoreSelector(unUsedCurrenciesSelector);
  const dispatch = useStoreDispatch();
  const initialStateValue = "";

  const { t } = useLocales();
  const selectedCurrency = useRef<Option<Currency> | null>(null);
  const [inputValue, setValue] = useState<Currency>(
    initialStateValue as Currency
  );

  const handleChange = (item: Option<Currency>) => {
    selectedCurrency.current = item;
    setValue(item.value);
  };

  const options = useMemo(() => {
    return unusedCurrencies?.map((ele) => ({
      value: ele.name,
      text: t(ele.title),
      Icon: (props: any) => (
        <ele.Icon width={"35px"} height={"35px"} {...props} />
      ),
    }));
  }, [unusedCurrencies, t]);

  const value = t(
    currenciesMap[inputValue] ? currenciesMap[inputValue].title : ""
  );
  const saveNewCurrency = useCallback(() => {
    if (selectedCurrency.current) {
      const data: CurrencyAmount = {
        amount: 0,
        currency: selectedCurrency.current.value,
      };

      dispatch(addCurrency(data));
      props.onDone && props.onDone();
    }
  }, [selectedCurrency, dispatch, props]);
  const Ico = currenciesMap[inputValue] && currenciesMap[inputValue].Icon;
  const Icon = Ico ? () => <Ico width={"35px"} height={"35px"} /> : Ico;
  return (
    <Form title={t("addCurrency.title")}>
      <>
        <Select<Currency>
          Icon={Icon}
          options={options || []}
          value={value}
          placeholder={t("addCurrency.placeholder")}
          onChange={handleChange}
        />
        <ButtonContainer>
          <Button
            onClick={saveNewCurrency}
            enabled={!!selectedCurrency.current}
          >
            <ButtonSubContainer>
              <ButtonText>{t("addCurrency.buttonText")}</ButtonText>
              <CheckedIcon width={"30px"} height={"30px"} />
            </ButtonSubContainer>
          </Button>
        </ButtonContainer>
      </>
    </Form>
  );
};
