import { ChangeEvent } from "react";
import styled from "styled-components";
import { shadow } from "../../themes.main";
import { SwitchLabelProps, SwitchPropsType } from "./switch.types";

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel = styled.label<SwitchLabelProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 40px;
  background-color: ${(props) =>
    props.checked ? props.theme.accent : "transparent"};
  height: 15px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.accent};
  position: relative;
  transition: background-color 0.2s;
`;

const SwitchButton = styled.span`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 15px;
  height: 15px;
  border-radius: 45px;
  transition: 0.2s;
  background-color: ${(props) => props.theme.accent};
  box-shadow: ${shadow};
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 0px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 20px;
  }
`;

export const Switch = (props: SwitchPropsType) => {
  const onClick = () =>
    props.onChange &&
    props.onChange((undefined as unknown) as ChangeEvent<HTMLInputElement>);
  return (
    <>
      <SwitchInput
        {...{ props, children: undefined }}
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <SwitchLabel checked={props.checked}>
        <SwitchButton onClick={onClick}>{props.children}</SwitchButton>
      </SwitchLabel>
    </>
  );
};
