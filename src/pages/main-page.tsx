import styled from "styled-components";
import {
  CurrenciesItemList,
  CurrencyBanner,
  ManagerCurrencies,
  TransactionHistoryList,
} from "../components";
import { MainLayout } from "../layouts/main-layout";
import { forMobile } from "../themes";

const ManageContainer = styled.div`
  display: none;
  ${forMobile(`
     display: flex;
     justify-content: center;
     margin-bottom: 20px;
    `)}
`;

export default function MainPage() {
  
  return (
    <MainLayout>
      <ManageContainer>
        <ManagerCurrencies />
      </ManageContainer>
      <CurrencyBanner />
      <CurrenciesItemList />
      <TransactionHistoryList />
    </MainLayout>
  );
}
