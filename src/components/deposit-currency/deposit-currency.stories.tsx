import { WalletBProvider } from "../../providers";
import { DepositCurrency } from "./deposit-currency.component";

export default {
    title: "Components/Deposit Currency",
    component: DepositCurrency
}

export const Default = () => <WalletBProvider><DepositCurrency></DepositCurrency></WalletBProvider>