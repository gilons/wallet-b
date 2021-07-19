import { useCallback } from "react";
import { useMemo } from "react";
import styled from "styled-components";
import { useLocales } from "../../locales";
import { Select, Option } from "../../themes";
import { useModal } from "../../utils";
import { AddCurrency } from "../add-currency";
import { ChangeDefaultCurrency } from "../change-default-currency";
import {
  ActionUnion,
  ManageOperations,
} from "../currency-management-components";
import { DepositCurrency } from "../deposit-currency";
import { CheckedIcon, DepositIcon, ExchangeIcon } from "../../svg-icons";
import { ManagerIcon } from "../../svg-icons/manage.icon";
import { TransferCurrency } from "../transfer-currency";

const MainContainer = styled.div`
  max-width: 220px;
  height: 30px;
  display: flex;
`;
interface ManagerCurrenciesProps {}
export function ManagerCurrencies(_: ManagerCurrenciesProps) {
  const [, setModal] = useModal();

  const handleClose = useCallback(() => {
    setModal({ shown: false });
  }, [setModal]);
  const modalContent = useMemo(
    () => ({
      [ManageOperations.ADD_CURRENCY]: <AddCurrency onDone={handleClose} />,
      [ManageOperations.CHANGE_CURRENCY]: (
        <ChangeDefaultCurrency onDone={handleClose} />
      ),
      [ManageOperations.DEPOSIT_CURRENCY]: (
        <DepositCurrency onDone={handleClose} />
      ),
      [ManageOperations.TRANSFER_CURRENCY]: (
        <TransferCurrency onDone={handleClose} />
      ),
    }),
    [handleClose]
  );

  const { t } = useLocales();

  const options: Array<Option<ActionUnion>> = useMemo(() => {
    const dims = {
      width: "25px",
      height: "25px",
    };
    return [
      {
        value: ManageOperations.ADD_CURRENCY,
        text: t("addCurrency.title"),
        Icon: () => <CheckedIcon {...dims} />,
      },
      {
        value: ManageOperations.CHANGE_CURRENCY,
        text: t("changeCurrency.title"),
        Icon: () => <ExchangeIcon {...dims} />,
      },
      {
        value: ManageOperations.DEPOSIT_CURRENCY,
        text: t("depositCurrency.title"),
        Icon: () => <DepositIcon {...dims} />,
      },
      {
        value: ManageOperations.TRANSFER_CURRENCY,
        text: t("transferCurrency.title"),
        Icon: () => <ExchangeIcon {...dims} />,
      },
    ];
  }, [t]);

  const onChange = useCallback(
    (item: Option<ActionUnion>) => {
      setModal({
        shown: true,
        Component: modalContent[item.value],
      });
    },
    [modalContent, setModal]
  );

  return (
    <MainContainer>
      <Select
        placeholder={t("manageCurrencies.title")}
        onChange={onChange}
        Icon={() => <ManagerIcon width={"30px"} height={"30px"} />}
        options={options}
      />
    </MainContainer>
  );
}
