import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, WalletDispatch } from "./store.ini";

export const useStoreDispatch = () => useDispatch<WalletDispatch>();
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
