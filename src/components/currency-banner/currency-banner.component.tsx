import styled from "styled-components";
import { useLocales } from "../../locales";
import { currenciesMap } from "../../services";
import {
  defaultCurrencySelector,
  totalAmountSelector,
  useStoreSelector,
} from "../../store";
import { Container, H1, TextNormal } from "../../themes";

const MainContainer = styled(Container)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleText = styled(H1)`
  text-align: center;
  margin: 10px;
`;
const SubTitle = styled(TextNormal)`
  text-align: center;
`;

const AmountText = styled(H1)`
  text-align: center;
`;


export function CurrencyBanner() {
  const { t } = useLocales();
  const totalAmountInWallet = useStoreSelector(totalAmountSelector);
  const defaultCurrency = useStoreSelector(defaultCurrencySelector);
  const currency = currenciesMap[defaultCurrency];

  
  return (
    <MainContainer>
      <TitleText>{t("banner.title")}</TitleText>
      <SubTitle>{t("banner.subtitle")}:</SubTitle>
      <AmountText fontWeight={"600"}>
        {`${totalAmountInWallet?.toFixed(2)} ${currency.code}`}
      </AmountText>
    </MainContainer>
  );
}
