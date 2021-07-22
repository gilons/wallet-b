import styled from "styled-components";
import { currenciesMap, CurrencyAmount } from "../../services";
import { Container, ContainerShadow, FlexRowItemsCenter, H2 } from "../../themes";

interface CurrencyItemProps {
  amount: CurrencyAmount;
}

const MainContainer = styled(ContainerShadow)`
  background-color: ${(props) => props.theme.accent};
  overflow: hidden;
  flex-direction: column;
  border-radius: 5px;
  justify-content: center;
  margin: 10px;
  align-items: center;
  min-height: 200px;
  max-width: 100%;
`;

const IconContainer = styled(ContainerShadow)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  justify-content: center;
  background-color: ${(props) => props.theme.primary};
  align-items: center;
`;

const TextContainer = styled.div`
  margin: 10px;
  ${FlexRowItemsCenter}
`;
const ItemText = styled(H2)`
    ${FlexRowItemsCenter}
    text-align: center;
`
export function CurrencyItem({ amount }: CurrencyItemProps) {
  const item = currenciesMap[amount.currency];
  return item ? (
    <MainContainer>
      <IconContainer>
        {item.Icon && <item.Icon width={"50px"} height={"50px"} />}
      </IconContainer>
      <TextContainer>
        <ItemText>{`${amount.amount.toFixed(2)} ${item.code}`}</ItemText>
      </TextContainer>
    </MainContainer>
  ) : (
    <Container></Container>
  );
}
