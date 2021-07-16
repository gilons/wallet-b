import styled from "styled-components";
import { Text } from "./text.theme";

export const TextTiny = styled(Text)`
  font-size: ${(props) => props.fontSize || props.theme.textTiny};
`;