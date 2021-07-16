import { WalletBProvider } from "../../../providers";
import { Form } from "./form.theme";

export default {
  title: "Themes/Form",
  component: Form,
};

export const Default = () => (
  <WalletBProvider>
    <Form title={"Form title"}>
      <div></div>
    </Form>
  </WalletBProvider>
);
