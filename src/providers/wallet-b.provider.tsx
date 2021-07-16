import { useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../store";
import { Modal, useTheme, WithThemeProps } from "../themes";
import 'moment/locale/he';
import 'moment/locale/fr';
import 'moment/locale/en-ca';
import 'moment/locale/zh-cn';


import {
  ColorSchemeContext,
  DefaultModalState,
  DefaultScheme,
  ModalContext,
  ModalState,
  useLocalStorage,
} from "../utils";

export const WithTheme = (props: WithThemeProps) => {
  const [colorScheme, setColorScheme] = useLocalStorage("wb-color-scheme",DefaultScheme.colorScheme);
  const listenerRef = useRef<MediaQueryList | null>(null);
  const schemeValue = { colorScheme, setColorScheme };
  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => {
      const scheme = e.matches ? "dark" : "light";
      setColorScheme(scheme);
    };
    if (window) {
      listenerRef.current =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

      listenerRef.current?.addEventListener("change", listener);
    }

    return () => listenerRef.current?.removeEventListener("change", listener);
  }, [setColorScheme]);

  return (
    <ColorSchemeContext.Provider value={schemeValue}>
      <SchemeConsumer>{props.children}</SchemeConsumer>
    </ColorSchemeContext.Provider>
  );
};

const WithModal = (props: WithThemeProps) => {
  const [modalState, setState] = useState<ModalState>(DefaultModalState);
  const setModalState = (state: ModalState) => {
    setState((currentState) => ({ ...currentState, ...state }));
  };

  return (
    <ModalContext.Provider value={{ modalState, setModalState }}>
      <>
        <Modal />
        {props.children}
      </>
    </ModalContext.Provider>
  );
};
const SchemeConsumer = (props: WithThemeProps) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <WithModal>{props.children}</WithModal>
    </ThemeProvider>
  );
};
export const WalletBProvider = (props: WithThemeProps) => {

  return <Provider store={store}>
    <WithTheme>{props.children}</WithTheme>
  </Provider>

}