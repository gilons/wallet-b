import styled, { css } from "styled-components";
import {
  modalCloserId,
  modalContainerId,
  useModalWithClose,
} from "../../../utils";

interface ModalState {
  shown?: boolean;
  maxWidth?: number;
  maxHeight?: number;
}

const coverScreenStyles = css<ModalState>`
  position: fixed;
  overflow: hidden;
  border-radius: ${(props) => (props.shown ? 0 : 200)}px;
  padding-top: 0px;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  height: ${(props) => (props.shown ? 100 : 0)}vh;
  margin-left: ${(props) => (props.shown ? 0 : -110)}vw;
  width: 100vw;
  z-index: ${(props) => (props.shown ? 11 : 0)};
`;

const ModalContainer = styled.div<ModalState>`
  ${coverScreenStyles}
`;

const ModalSubContainer = styled.div<ModalState>`
  display: flex;
  flex-direction: column;
  position: relative;
  transition-property: margin-left, height, width;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  align-items: center;
  margin-left: ${(props) => (props.shown ? 0 : -110)}vw;
  width: 100vw;
  height: ${(props) => (props.shown ? 100 : 0)}vh;
`;

const CloserContainer = styled.div<ModalState>`
  ${coverScreenStyles}
  background-color: rgba(0,0,0,0.5);
  transition-property: border-radius, margin-left, height, width;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  z-index: ${(props) => (props.shown ? 12 : 0)};
`;

const ContentContainer = styled.div<ModalState>`
  max-width: ${(props) => (props.shown ? props.maxWidth : 0)}px;
  max-height: ${(props) => (props.shown ? props.maxHeight : 0)}px;
  z-index: 15;
  margin-top: 20vh;
  height: auto;
  position: absolute;
`;

export const Modal = () => {
  const [modalState, toggle] = useModalWithClose();
  const { shown, Component, maxHeight = 300, maxWidth = 500, key } = modalState;

  return (
    <ModalContainer id={modalContainerId} shown={shown}>
      <ModalSubContainer shown={shown}>
        <ContentContainer
          key={key}
          maxHeight={maxHeight}
          maxWidth={maxWidth}
          shown={shown}
        >
          {Component}
        </ContentContainer>
        <CloserContainer id={modalCloserId} onClick={toggle} shown={shown} />
      </ModalSubContainer>
    </ModalContainer>
  );
};
