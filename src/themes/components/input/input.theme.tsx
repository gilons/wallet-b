import {
  InputHTMLAttributes,
  useCallback,
  useMemo,
  useState,
  FocusEvent,
} from "react";
import styled, { css } from "styled-components";
import { fontType, shadow } from "../../themes.main";
import { ContainerSolid } from "../container";
import { TextNormal } from "../text";

export const InputContainer = styled(ContainerSolid)`
  min-width: 200px;
  border-radius: 5px;
  min-height: 35px;
  box-shadow: ${shadow};
  position: relative;
  flex-direction: row;
  overflow: visible;
  & > div:nth-child(2) {
    transition: all 0.2s 0.2s ease-in-out;
    border: none;
    margin-top: 7px;
    position: absolute;
    background-color: transparent;
    z-index: 2;
  }
`;
const InputModifier = css`
  background-color: ${(props) => props.theme.accent};
  padding: 10px;
  transition: all 0.2s ease-in-out;
  box-shadow: ${shadow};
  border-radius: 10px;
  margin-top: -30px;
  max-width: 100px;
  -webkit-line-clamp: 1;
  font-size: ${(props) => props.theme.textTiny};
  font-weight: 600;
  margin-left: 10px;
  overflow: hidden;
`;
const InputContent = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  flex: 1;
  font-family: ${fontType};
  background-color: transparent;
  border: none;
  z-index: 4;
  color: transparent;
  overflow: hidden;
  ::placeholder {
    color: transparent;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: transparent;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: transparent;
  }

  font-weight: ${(props) => props.theme.textFontWeight};
  font-size: ${(props) => props.theme.textNormal};
  color: ${(props) => props.theme.color};
  :focus {
    outline: none;
  }
  :focus + div {
    & > div {
      ${InputModifier}
    }
  }
  :not(:placeholder-shown):not(:focus) + div {
    & > div {
      ${InputModifier}
    }
  }
`;
export const Input = (
  props: InputHTMLAttributes<HTMLInputElement> & { label?: string }
) => {
  const { label = "", placeholder = "" } = props;

  const [labelText, setLabelText] = useState(placeholder);
  const onFocusChange = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      if (event.type === "focus") {
        setLabelText(label);
        props.onFocus && props.onFocus(event);
      } else if (event.type === "blur") {
        setLabelText(placeholder);
        props.onBlur && props.onBlur(event);
      }
    },
    [label, placeholder, props]
  );
  const handleFocus = useMemo(() => onFocusChange, [onFocusChange]);
  const handleBlur = useMemo(() => onFocusChange, [onFocusChange]);
  const newProps = { ...props };
  return (
    <InputContainer>
      <InputContent onFocus={handleFocus} onBlur={handleBlur} {...newProps} />
      <div>
        <TextNormal>{labelText}</TextNormal>
      </div>
    </InputContainer>
  );
};
