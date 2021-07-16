import { useMemo } from "react";
import styled from "styled-components";
import { useLocales } from "../../locales";
import { transactionHistorySelector, useStoreSelector } from "../../store";
import { Container, H2 } from "../../themes";
import { TransactionHistoryItem } from "../transaction-history-item";

const MainContainer = styled(Container)`
  margin: auto;
  max-width:600px;
  margin-top: 80px;
  margin-bottom: 20px;
  margin-left: 25px;
  flex-direction: column;
`;
const MainContent = styled(Container)`
  flex-direction: row;
  margin: 10px;
  justify-content: flex-start;
`;
const Timeline = styled.div`
  width: 4px;
  background-color: ${(props) => props.theme.inverted};
  border-radius: 14px;
`;
const TitleText = styled(H2)`
  text-align: center;
  margin: 5px;
`;
const Content = styled.div`
  margin-left: -3px;
  margin-top: 20px;
  display: flex;
  z-index: 6;
  margin-bottom: 10px;
  flex-direction: column;
`;
export function TransactionHistoryList() {
  const { t } = useLocales();
  const transactionHistory = useStoreSelector(transactionHistorySelector);
  const History = useMemo(() => {
    return transactionHistory.map((transaction) => (
      <TransactionHistoryItem key={transaction.transactionDate} transaction={transaction} />
    ));
  }, [transactionHistory]);
  return (
    <MainContainer>
      <TitleText>{t("transactions.title")}</TitleText>
      <MainContent>
        <Timeline />
        <Content>{History}</Content>
      </MainContent>
    </MainContainer>
  );
}
