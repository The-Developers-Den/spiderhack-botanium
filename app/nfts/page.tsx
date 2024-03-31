//@ts-nocheck

"use client";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../_components/ui/button";
import { TransactionButton, useActiveAccount } from "thirdweb/react";
import { claimTo } from "thirdweb/extensions/erc721";
import { contract } from "@/providers/thirdwebProvider";

export default function Page() {
  const account = useActiveAccount();
  return (
    <div className="w-[95%] mx-auto h-full py-4 space-y-6">
      <h4 className="text-3xl font-semibold">Botanium AI NFTs</h4>
      <div className="flex flex-wrap gap-20">
        {[1, 2, 3, 4, 5, 6, 7].map((nft) => (
          <div className="min-w-64 border border-[#252F45] rounded-xl">
            <Image
              src={`/${nft}.jpg`}
              className="rounded-t-xl h-40"
              width={300}
              height={300}
              alt="NFT"
            />
            <div className=" px-2.5 pt-4 pb-3 space-y-4 bg-[#252F45] rounded-b-xl text-white">
              <div className="flex justify-between items-center">
                <p className="text-white/90">{`BotaniumAI#${nft}`}</p>
                <div className="text-white/70 flex items-center gap-1.5">
                  <p className="font-light">@botanium</p>
                  <BadgeCheck className="text-green-600 w-5" />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <TransactionButton
                  className="!w-full !bg-[#FFB72D] hover:bg-[#FFB72D]/95 !text-[#18181B] !h-9 text-[15px] font-medium"
                  transaction={() =>
                    claimTo({
                      contract: contract,
                      to: account?.address as string,
                      quantity: BigInt(1),
                    })
                  }
                  onTransactionConfirmed={() => console.log("success")}
                  onError={(e) => console.log(e)}
                >
                  Claim
                </TransactionButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
