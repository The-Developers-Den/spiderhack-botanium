"use client";

import { useConnect, useSwitchChain } from "wagmi";
import { Button } from "./_components/ui/button";
import { Cog, CreditCard, Search, ArrowRight, Box, Orbit } from "lucide-react";

export default function Home() {
  const { connectors, connect } = useConnect();
  const { chains, switchChain } = useSwitchChain();
  return (
    <main className="flex flex-col items-center justify-center h-full">
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
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-center font-black text-5xl">
            Unlock the power of web3.
          </h1>
          <h2 className="text-center opacity-80 text-2xl max-w-3xl">
            Search information, execute transactions, and deploy smart contracts
            by chatting with Brian.
          </h2>
        </div>
        <div className="space-y-4">
          {[
            {
              name: "Ask Brian",
              desc: "Explore the web3 ecosystem and find the resources that you need.",
              href: "/",
              color: "text-blue-400 bg-blue-700",
              icon: <Search />,
            },
            {
              name: "Send Transaction",
              desc: "Send transactions to the network and view their status.",
              href: "/modal",
              color: "text-green-500 bg-green-700",

              icon: <CreditCard />,
            },
            {
              name: "Deploy Contract (Coming soon)",
              desc: "Deploy smart contracts on the network and view their status.",
              href: "/",
              color: "text-purple-500 bg-purple-700",

              icon: <Box />,
            },
          ].map((e) => (
            <div className="flex items-center justify-between gap-x-4 gap-y-4 border-[1px] border-[#2b2b2b] p-4 rounded-lg">
              <div className={`${e.color} p-3 rounded-lg`}>{e.icon}</div>
              <div className="flex flex-col">
                <h6 className="text-xl">{e.name}</h6>
                <p className="text-gray-400">{e.desc}</p>
              </div>
              <div className="flex-1">
                <ArrowRight className="text-gray-600 float-end" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
