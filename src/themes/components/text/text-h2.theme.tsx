import styled from "styled-components";
import { Text } from "./text.theme";

export const H2 = styled(Text)`
  font-size: ${(props) => props.fontSize || props.theme.textH2};
`;
