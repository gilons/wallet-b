import styled from "styled-components";
import { Container } from "./container.theme";

export const ContainerSolid = styled(Container)`
  background-color: ${(props) => props.theme.primary};
  
`;