"use client";

import { useConnect, useSwitchChain } from "wagmi";
import { Button } from "./_components/ui/button";

export default function Home() {
  const { connectors, connect } = useConnect();
  const { chains, switchChain } = useSwitchChain();
  return (
    <main>
      {/* {connectors.map((connector) => (
        <button key={connector.uid} onClick={() => connect({ connector })}>
          {connector.name}
        </button>
      ))}
      <div>
        {chains.map((chain:any) => (
          <button
            key={chain.id}
            onClick={() => switchChain({ chainId: chain.id })}
          >
            {chain.name}
          </button>
        ))}
      </div> */}
    </main>
  );
}
