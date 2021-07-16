import { useMemo } from "react";
import styled from "styled-components";
import { useLocales } from "../../locales";
import { currenciesAmountsSelector, useStoreSelector } from "../../store";
import { Container, ContainerSolid, H2 } from "../../themes";
import { CurrencyItem } from "../currency-item";

const MainContainer = styled(Container)`
  max-width: 800px;
  margin: auto;
  margin-top: 70px;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
const ContentContainer = styled(ContainerSolid)`
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
const CurrenciesTitle = styled(H2) `
    margin: 10px;
    text-align: center;
`

export function CurrenciesItemList() {
  const currencies = useStoreSelector(currenciesAmountsSelector);
  const Currencies = useMemo(() => {
    return currencies.slice()
      .sort((a, b) => (a.amount >= b.amount ? -1 : 1))
      .map((currency) => (
        <CurrencyItem key={currency.currency} amount={currency} />
      ));
  }, [currencies]);
  const {t} = useLocales()
  return (
    <MainContainer>
        <CurrenciesTitle>
            {t("currenciesCard.title")}
        </CurrenciesTitle>
        <ContentContainer>{Currencies}</ContentContainer>
    </MainContainer>
  );
}
