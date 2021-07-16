import { WalletBProvider } from "../../providers"
import { Loader } from "./loader.component"


export default {
    title: "Components/Loader",
    component: Loader,
}

export const Default = () => <WalletBProvider>
    <Loader/>
</WalletBProvider>