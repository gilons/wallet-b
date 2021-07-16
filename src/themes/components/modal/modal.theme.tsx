import { useEffect } from "react";
import styled, { css } from "styled-components";
import { useModal } from "../../../utils";

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
  margin-left: ${(props) => (props.shown ? 0 : -110)}vw;
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
  transition: all 0.5s 0.5s ease-out;
  align-items: center;
  margin-left: ${(props) => (props.shown ? 0 : -110)}vw;
  width: 100vw;
  height: ${(props) => (props.shown ? 100 : 0)}vh;
`;

const CloserContainer = styled.div<ModalState>`
  ${coverScreenStyles}
  background-color: rgba(0,0,0,0.5);
  transition: all 0.5s 0.5s ease-out;
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
  const [modalState, setModalState] = useModal();
  const { shown, Component, maxHeight = 300, maxWidth = 500, key } = modalState;
  const toggle = () => {
    setModalState({ shown: !shown });
  };
  useEffect(() => {
    const fun = (e: KeyboardEvent) => {
      if(e.key === "Escape") {
        setModalState({shown: false})
      }
    }
    window.addEventListener("keyup", fun)
    return () => window.removeEventListener("keypress", fun)
  },[])
  return (
    <ModalContainer shown={shown}>
      <ModalSubContainer shown={shown}>
        <ContentContainer
          key={key}
          maxHeight={maxHeight}
          maxWidth={maxWidth}
          shown={shown}
        >
          {Component}
        </ContentContainer>
        <CloserContainer onClick={toggle} shown={shown} />
      </ModalSubContainer>
    </ModalContainer>
  );
};
