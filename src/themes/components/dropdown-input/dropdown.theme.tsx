import { useMemo, useState } from "react";
import styled from "styled-components";
import { ContainerShadow, Container, ContainerBlur } from "../container";
import { TextNormal } from "../text";
import { OptionContainerProps } from "../../types.themes";
import { DropdownItemsContentProps, DropdownProps } from "./dropdown.types";
import { coverScreen, shadow } from "../../themes.main";
import { ChevronDownIcon, ChevronUpIcon } from "../../../svg-icons";

const SelectContainer = styled(ContainerShadow)`
  justify-content: center;
  border-radius: 5px;
  padding: 4px;
  background-color: ${(props) => props.theme.accent};
  overflow: visible;
  padding-left: 8px;
  min-height: 30px;
  max-height: 100px;
`;
const SelectHeaderContent = styled(Container)`
  display: flex;
  width: 100%;
  padding: 0px;
  flex: 1;
  flex-wrap: nowrap;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
`;

const OptionsContainer = styled.div<OptionContainerProps>`
  margin-left: -8px;
  margin-top: -4px;
  transition: all 0.5s ease-out;
  height: auto;
  z-index: 10;
  overflow: ${(props) => (props.show ? "auto" : "hidden")};
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  min-height: 0%;
  border-radius: 5px;
  max-height: ${(props) => (props.show ? "600px" : "0px")};
`;

const OptionsSubContainer = styled(ContainerBlur)`
  height: 100%;
  min-height: 0%;
`;

const IconContainer = styled.div`
  width: 35px;
  margin-right: 5px;
  padding: 0px;
  cursor: pointer;
  height: 100%;
  flex-direction: column;
`;

const Closer = styled.div`
  ${coverScreen}
`;
interface OptionContainerProp {
  selected?: boolean;
}
const OptionContainer = styled(Container)<OptionContainerProp>`
  align-items: center;
  cursor: pointer;
  flex-wrap: nowrap;
  border-radius: 5px;
  box-shadow: ${(props) => (props.selected ? shadow : "none")};
  background-color: ${(props) =>
    props.selected ? props.theme.accent : "transparent"};
  width: 100%;
  min-height: 35px;
`;
const OptionsContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Divider = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.primary};
  box-shadow: ${shadow};
  width: 100%;
`;
export function ItemsContent<T>({
  options,
  onClick,
  toggleOptions,
}: DropdownItemsContentProps<T>) {
  const content = useMemo(
    () =>
      options &&
      options.map((ele) => {
        const handleChange = () => {
          onClick && onClick(ele);
          toggleOptions && toggleOptions();
        };
        return (
          <Container key={ele.text}>
            <OptionContainer selected={ele.selected} onClick={handleChange}>
              <IconContainer>{ele.Icon && <ele.Icon />}</IconContainer>
              <TextNormal>{ele.text}</TextNormal>
            </OptionContainer>
            <Divider />
          </Container>
        );
      }),
    [options, onClick, toggleOptions]
  );
  return <OptionsContent>{content}</OptionsContent>;
}
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RightIcon = styled(IconContainer)`
  width: 20px;
`;
export function Select<T = string>(props: DropdownProps<T>) {
  const [show, setShow] = useState(false);
  const { placeholder, value } = props;
  const title = value || placeholder;
  const toggleOptions = () => setShow((show) => !show);
  const iconSize = { width: "20px", height: "20px" };
  return (
    <SelectContainer>
      <SelectHeaderContent onClick={toggleOptions}>
        <TitleContainer>
          {props.Icon && <IconContainer>{<props.Icon />}</IconContainer>}
          <TextNormal fontWeight="500">{title}</TextNormal>
        </TitleContainer>
        <RightIcon>
          {show ? (
            <ChevronUpIcon {...iconSize} />
          ) : (
            <ChevronDownIcon {...iconSize} />
          )}
        </RightIcon>
      </SelectHeaderContent>
      <OptionsContainer show={show}>
        <OptionsSubContainer opacity={0.7} intensity={100}>
          <ItemsContent<T>
            options={props.options}
            toggleOptions={toggleOptions}
            onClick={props.onChange}
          />
        </OptionsSubContainer>
      </OptionsContainer>
      {show && <Closer onClick={toggleOptions}></Closer>}
    </SelectContainer>
  );
}
