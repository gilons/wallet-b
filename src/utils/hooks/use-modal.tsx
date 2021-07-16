import { useContext } from "react";
import { ModalContext, ModalState } from "../contexts";

export const useModal = (): [ModalState, (newState: ModalState) => void] => {
  const { modalState, setModalState } = useContext(ModalContext);

  return [modalState, setModalState];
};
