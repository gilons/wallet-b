import { WalletBProvider } from "../../providers";
import { TransferCurrency } from "./transfer-currency.component";

export default {
    title: "Components/Transfer Currency",
    component: TransferCurrency
}

export const Default = () => <WalletBProvider><TransferCurrency></TransferCurrency></WalletBProvider>