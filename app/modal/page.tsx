"use client";
import React from "react";
import { Input } from "../_components/ui/input";
import { Button } from "../_components/ui/button";
import { Bot, User } from "lucide-react";
import { useAccount } from "wagmi";

export default function Page() {
  const { address } = useAccount();

  if (!address) {
    return (
      <div className="h-full flex flex-col gap-y-3 items-center justify-center text-4xl font-bold">
        Connect your wallet
        <w3m-connect-button />
      </div>
    );
  }

  return (
    <div className="h-full max-h-full relative overflow-y-clip">
      <div className="space-y-1.5 px-6 border-b border-[#444444] py-3">
        <h5 className="text-3xl mx-auto">Send transactions</h5>
        <p className="text-lg opacity-80  mx-auto">
          Swap your tokens, bridge them across many chains, and much more.
        </p>
      </div>
      <div className="w-[98%] h-[90%] mx-auto flex flex-col">
        <div className="flex-1 overflow-scroll py-8 space-y-10">
          <div className="max-w-2xl flex items-center gap-4">
            <div className="p-3 bg-[#3f3f46] rounded-full">
              <User />
            </div>
            <p>Hello</p>
          </div>
          <div className="max-w-2xl flex items-center gap-4">
            <div className="p-3 bg-blue-500 rounded-full">
              <Bot />
            </div>
            <p>Hello</p>
          </div>
        </div>
        <div className="flex gap-4 mto sticky bottom-0 w-full">
          <Input
            placeholder="Start typing..."
            className="w-full mt-auto  bg-transparent border-[#444444] focus-visible:ring-0 focus-visible:ring-offset-0 ring-0"
          ></Input>
          <Button className="bg-blue-500 hover:bg-blue-600 rounded-xl">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
