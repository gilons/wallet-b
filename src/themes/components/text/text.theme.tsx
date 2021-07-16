import styled from "styled-components";
import { fontType } from "../../themes.main";
import { TextThemeProps } from "./types.text";

export const Text = styled.div<TextThemeProps>`
  font-family: ${fontType};
  color: ${(props) => props.color || props.theme.color};
  font-size: ${(props) => props.fontSize || props.theme.textNormal};
  font-weight: ${(props) => props.fontWeight || props.theme.textFontWeight};
  font-style: ${(props) => props.fontStyle || props.theme.textFontStyle};
  display: webkit-box;
  -webkit-box-orient: vertical;
`;
