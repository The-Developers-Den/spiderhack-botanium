import { spiderChain } from "@/constants/chains";
import { createConfig, http } from "wagmi";
import { injected, metaMask, safe } from "wagmi/connectors";
// import { } from "wagmi/chains";

export const config = createConfig({
  chains: [spiderChain],
  connectors: [injected(), metaMask(), safe()],
  transports: {
    [spiderChain.id]: http(),
  },
});
