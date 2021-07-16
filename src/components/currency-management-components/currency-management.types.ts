import { Currency, CurrencyAmount } from "../../services";
import { Option } from "../../themes";

export interface CurrencyActionProps {
    onDone?:() => void,
    close?: () => void
}
export type SelectOptionType = Option<Currency>
export interface TransferCurrencyInputTypes {
    fromCurrency: SelectOptionType;
    toCurrency?: SelectOptionType;
    amount?: number
}

export interface CurrencyFormReducerActionType {
    type: "toCurrency" | "fromCurrency" | "amount" | "init",
    data: SelectOptionType | number
}
export interface DepositCurrencyActionType {
    type: "currency" | "amount"| "init", 
    data: Currency | number
}

export enum ManageOperations {
    ADD_CURRENCY = "add-currency",
    CHANGE_CURRENCY = "change-currency",
    TRANSFER_CURRENCY = "transfer-currency",
    DEPOSIT_CURRENCY = "deposit-currency",
}
export type ActionUnion = `${ManageOperations}`
export type TransferCurrencyReducerType = (state: TransferCurrencyInputTypes, action:CurrencyFormReducerActionType) => TransferCurrencyInputTypes
export type DepositCurrencyReducerType = (state: CurrencyAmount, action: DepositCurrencyActionType) => CurrencyAmount