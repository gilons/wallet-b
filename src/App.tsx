import React from "react";

import { WalletBProvider } from "./providers";
import { Suspense } from "react";
import { Loader } from "./components";
import { useScript } from "./utils";
const MainPage =  React.lazy(() => import("./pages/main-page"));

function App() {
  useScript(`${process.env.PUBLIC_URL}/js/theme-loader.js`)
  return (
    <WalletBProvider>
      <Suspense fallback={<Loader/>}>
        <MainPage />
      </Suspense>
    </WalletBProvider>
  );
}

export default App;
