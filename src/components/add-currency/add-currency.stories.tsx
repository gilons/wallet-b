import { WalletBProvider } from "../../providers";
import { AddCurrency } from "./add-currency.component";

export default {
    title: "Components/Add Currency",
    component: AddCurrency
}

export const Default = () => <WalletBProvider><AddCurrency></AddCurrency></WalletBProvider>