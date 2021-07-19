import { render } from "@testing-library/react";
import { useEffect } from "react";
import { WalletBProvider } from "../../../providers";
import {
  modalCloserId,
  modalContainerId,
  modalContentId,
} from "./modal.common";
import { useModal } from "./use-modal";

test("modal should be in the dom", () => {
  
  function TestComponent() {
    const [modalState, setModalState] = useModal();
    const walletBModal = document.getElementById(modalContainerId);
    expect(walletBModal).toBeDefined();
    useEffect(() => {
      expect(modalState.shown).toBeFalsy();
      const modalContent = <div id={modalContentId}></div>;
      const newModalState = {
        ...modalState,
        Component: modalContent,
        shown: true,
      };
      setModalState(newModalState);
      const modalCloser = document.getElementById(modalCloserId);
      const content = document.getElementById(modalContentId);
      expect(
        modalCloser && modalCloser.style.marginLeft === "0vh"
      ).toBeDefined();
      expect(content).toBeDefined();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div></div>;
  }
  
  render(
    <WalletBProvider>
      <TestComponent></TestComponent>
    </WalletBProvider>
  );
});
