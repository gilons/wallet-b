import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { WalletState } from "./wallet-slice";
import { init, initialState, walletReducer } from "./wallet-slice/wallet-slice";

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
  middleware: [...getDefaultMiddleware()],
});

const storageKey = "wallet-b-wallet";
store.subscribe(() => {
  const { wallet } = store.getState();
  localStorage.setItem(storageKey, JSON.stringify(wallet));
});

function initializerStoreFromStorage() {
  try {
    const storageValue = localStorage.getItem(storageKey);
    if (storageValue) {
      const walletState: WalletState = JSON.parse(storageValue);
      store.dispatch(init(walletState));
    } else {
      store.dispatch(init(initialState));
    }
  } catch (err) {
    store.dispatch(init(initialState));
  }
}

initializerStoreFromStorage();

export type RootState = ReturnType<typeof store.getState>;
export type WalletDispatch = typeof store.dispatch;
