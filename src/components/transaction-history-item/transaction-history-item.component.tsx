import moment from "moment";
import styled from "styled-components";
import { currentLocale, useLocales } from "../../locales";
import { currenciesMap } from "../../services";
import { TransactionHistory } from "../../store";
import {
  Container,
  ContainerShadow,
  ContainerSolid,
  TextNormal,
  TextTiny as TinyText,
} from "../../themes";

interface HistoryProps {
  transaction: TransactionHistory;
}
const MainContainer = styled(ContainerShadow)`
  max-width: 300px;
  background-color: ${(props) => props.theme.accent};
  border-radius: 3px;
  width: 100%;
  flex-direction: column;
  overflow: visible;
  margin-top: 15px;
`;

const TransactionTypeContainer = styled(ContainerShadow)`
  border-radius: 3px;
  background-color: ${(props) => props.theme.accent};
  max-width: 40px;
`;

const TransactionContainer = styled(Container)``;
const DateContainer = styled(ContainerSolid)`
  border-radius: 15px;
  width: 100%;
  margin-left: -40px;
  max-width: 60px;
`;
const DateText = styled(TinyText)`
  width: 100%;
  text-align: center;
`;
export function TransactionHistoryItem({ transaction }: HistoryProps) {
  const fromCurrency = currenciesMap[transaction.currency];
  const toCurrency =
    transaction.toCurrency && currenciesMap[transaction.toCurrency];
  const { t } = useLocales();
  const locale = currentLocale();
  return (
    <MainContainer>
      <TransactionTypeContainer>
        <TinyText fontSize={"12px"}>
          {t(`transactionTypes.${transaction.transactionType}`)}
        </TinyText>
      </TransactionTypeContainer>
      <TransactionContainer>
        <TextNormal fontSize={"20px"}>
          {`${transaction.amount.toFixed(2)} ${fromCurrency.code} ${
            toCurrency ? ` ${t('to')} ${toCurrency.code}` : ""
          }`}
        </TextNormal>
      </TransactionContainer>
      <DateContainer>
        <DateText fontWeight={"600"}>
          {moment(transaction.transactionDate).locale(locale).calendar()}
        </DateText>
      </DateContainer>
    </MainContainer>
  );
}
