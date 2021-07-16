import styled from "styled-components";
import { Currency, CurrencyItem } from "../../services";
import { Container, TextNormal,Option } from "../../themes";

export const ButtonContainer = styled(Container)`
  justify-content: flex-end;
  margin-top: 20px;
`;
export const ButtonSubContainer = styled.div`
  max-width: 200px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonText = styled(TextNormal)`
margin-right: 10px;
` 

export const InputGroup = styled.div`
    display: flex;
    padding:6px;
    flex-direction: column;
`
export function toOption(item: CurrencyItem): Option<Currency> {
  return {
    value: item.name,
    Icon: () => <item.Icon width={"35px"} height="35px" />,
    text: item.title,
  };
}
export * from "./currency-management.types"