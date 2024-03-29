"use client";

import {
  ThirdwebProvider,
  embeddedWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import { BotanixTestnet } from "@thirdweb-dev/chains";

export function Provider({ children }: { children: React.ReactNode }) {
  const smartWalletConfig = {
    factoryAddress: "0x28937e93B9C9496b00ad844e1c94e5E59f5F275A",
    gasless: true,
  };
  return (
    <ThirdwebProvider
      clientId={"b5338d0ede8117097b4876c5a37a55e4"}
      supportedChains={[BotanixTestnet]}
      supportedWallets={[
        smartWallet(embeddedWallet(), smartWalletConfig),
        // embeddedWallet({ providers: ["email", "facebook", "apple", "google"] }),
      ]}
    >
      {children}
    </ThirdwebProvider>
  );
}
