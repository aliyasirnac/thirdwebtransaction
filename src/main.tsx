import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={activeChainId}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
