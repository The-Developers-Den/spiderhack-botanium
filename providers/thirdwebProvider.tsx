"use client";

import {
  MetaMaskWallet,
  ThirdwebProvider,
  embeddedWallet,
  smartWallet,
} from "@thirdweb-dev/react";

import { BotanixTestnet } from "@thirdweb-dev/chains";

const smartWalletConfig = {
  factoryAddress: "0x837B327b4ebD2f64690f7be90156A4555eb5b0Ed",
  gasless: true,
};

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider
      activeChain={BotanixTestnet}
      clientId="217384baf6f4bbba927494ca4d71fcc2"
      supportedWallets={[
        smartWallet(
          embeddedWallet({
            auth: {
              options: ["email", "google", "apple", "facebook"],
            },
          }),
          smartWalletConfig
        ),
      ]}
    >
      {children}
    </ThirdwebProvider>
  );
}
