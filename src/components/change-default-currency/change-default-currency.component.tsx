import { useCallback, useMemo, useRef, useState } from "react";
import { useLocales } from "../../locales";
import { currenciesMap, Currency } from "../../services";
import {
  changeDefaultCurrency,
  currentCurrenciesSelector,
  defaultCurrencySelector,
  useStoreDispatch,
  useStoreSelector,
} from "../../store";
import { Button, Form, Option, Select } from "../../themes";
import {
  ButtonContainer,
  ButtonSubContainer,
  ButtonText,
  CurrencyActionProps,
} from "../currency-management-components";
import { ExchangeIcon } from "../../svg-icons";

export function ChangeDefaultCurrency(props: CurrencyActionProps) {
  const currencies = useStoreSelector(currentCurrenciesSelector);
  const defaultCurrency = useStoreSelector(defaultCurrencySelector);
  const dispatch = useStoreDispatch();

  const { t } = useLocales();
  const selectedCurrency = useRef<Option<Currency> | null>(null);
  const [inputValue, setValue] = useState<Currency>(defaultCurrency);

  const handleChange = (item: Option<Currency>) => {
    selectedCurrency.current = item;
    setValue(item.value);
  };

  const options = useMemo(() => {
    return currencies?.map((ele) => ({
      value: ele.name,
      text: t(ele.title),
      Icon: (props: any) => (
        <ele.Icon width={"35px"} height={"35px"} {...props} />
      ),
    }));
  }, [currencies, t]);

  const value = t(
    currenciesMap[inputValue] ? currenciesMap[inputValue].title : ""
  );

  const saveNewCurrency = useCallback(() => {
    if (selectedCurrency.current) {
      dispatch(changeDefaultCurrency(selectedCurrency.current.value));
      props.onDone && props.onDone();
    }
  }, [selectedCurrency, dispatch, props]);

  
  const Ico = currenciesMap[inputValue] && currenciesMap[inputValue].Icon;
  const Icon = Ico ? () => <Ico width={"35px"} height={"35px"} /> : Ico;


  return (
    <Form title={t("changeCurrency.title")}>
      <>
        <Select<Currency>
          Icon={Icon}
          id={"change-default-currency"}
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
              <ButtonText>{t("changeCurrency.buttonText")}</ButtonText>
              <ExchangeIcon width={"25px"} height={"25px"} />
            </ButtonSubContainer>
          </Button>
        </ButtonContainer>
      </>
    </Form>
  );
}
