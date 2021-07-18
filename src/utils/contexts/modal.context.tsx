import React from "react";

export const DefaultModalState = {
  shown: false,
  maxHeight: 300,
  key: "",
  maxWidth: 500,
  Component:  <div></div>,
};
const DefaultModalContextValue: ModalContextValue = {
  modalState: DefaultModalState,
  setModalState: (state) => {},
};
export interface ModalContextValue {
  modalState: ModalState;
  setModalState: (state: ModalState) => void;
}
export interface ModalState {
  shown?: boolean;
  maxWidth?: number;
  key?: any; // option any key used to trigger a refresh from any where in the virtual dom
  maxHeight?: number;
  Component?: React.ReactElement<any>;
}

export const ModalContext = React.createContext(DefaultModalContextValue);
