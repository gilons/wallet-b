import React from "react";

import { WalletBProvider } from "./providers";
import { Suspense } from "react";
import { Loader } from "./components";
const MainPage =  React.lazy(() => import("./pages/main-page"));

function App() {
  
  return (
    <WalletBProvider>
      <Suspense fallback={<Loader/>}>
        <MainPage />
      </Suspense>
    </WalletBProvider>
  );
}

export default App;
