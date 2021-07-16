import styled, { keyframes } from "styled-components";
import { Container, coverScreen } from "../../themes";

const LoaderContainer = styled(Container)`
  ${coverScreen}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
`;
const LoaderKeyframe = keyframes`
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingDiv = styled.div`
  border: 16px solid ${props => props.theme.inverted};
  border-radius: 50%;
  border-top: 16px solid ${props => props.theme.color };
  border-bottom: 16px solid ${props => props.theme.primary};
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: ${LoaderKeyframe} 2s linear infinite;
`;
export function Loader() {
  return <LoaderContainer>
      <LoadingDiv/>
  </LoaderContainer>;
}
