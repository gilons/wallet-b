import { useCallback, useEffect, useMemo } from "react";
import { ModalState } from "../../contexts";
import { walletBModalHash } from "./modal.common";
import { useModal } from "./use-modal";

export const useModalWithClose = (hashId?: string): [ModalState, () => void] => {
  const [modalState, setModalState] = useModal();
   const hash = useMemo(() => hashId ?? walletBModalHash, [hashId])
  const { shown } = modalState;

  const toggle = () => {
    setModalState({ shown: !shown });
  };

  const closeModal = useCallback(() => {
    setModalState({ shown: false, Component: <div></div> });
  }, [setModalState]);

  const closeModalFromBack = useCallback(
    (event: HashChangeEvent) => {
      if (window.location.hash !== `#${hash}` && shown)
        closeModal();
    },
    [shown, closeModal, hash]
  );

  const closeModalFromEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    window.addEventListener("keyup", closeModalFromEsc);
    window.addEventListener("hashchange", closeModalFromBack);

    return () => {
      window.removeEventListener("keypress", closeModalFromEsc);
      window.removeEventListener("hashchange", closeModalFromBack);
    };
  }, [closeModalFromBack, closeModalFromEsc]);

  useEffect(() => {
    if (shown) {
      window.location.hash = hash;
    } else {
      if (window.location.hash === `#${hash}`)
        window.history.go(-1);
    }
  }, [shown, hash]);

  return [modalState, toggle];
};
