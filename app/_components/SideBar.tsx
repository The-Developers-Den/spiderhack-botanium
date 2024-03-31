"use client";
import { Box, Cog, CreditCard, Home, Image, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { ConnectButton, darkTheme } from "thirdweb/react";
import { embeddedWallet, injectedProvider } from "thirdweb/wallets";
import { client } from "@/providers/thirdwebProvider";
import { FACTORY_ADDRESS_CONTRACT } from "@/constants/contracts";
import { botanixChain } from "@/constants/chains";

export default function SideBar() {
  const pathname = usePathname();
  return (
    <div className="w-full max-w-96 h-full">
      <div className="space-y-5 w-10/12 mx-auto h-full flex flex-col items-stretch">
        <h5 className="text-4xl p-4 font-semibold text-[#FFB72D]">Botanium</h5>
        {[
          {
            name: "Home",
            href: "/",
            color: "text-white/70",
            icon: <Home />,
          },
          {
            name: "Ask AI",
            href: "/search",
            color: "text-blue-500",
            icon: <Search />,
          },
          {
            name: "Send Transaction",
            href: "/modal",
            color: "text-green-500",

            icon: <CreditCard />,
          },
          // {
          //   name: "Deploy Contract",
          //   href: "/deploy",
          //   color: "text-purple-500",

          //   icon: <Box />,
          // },
          {
            name: "Botanium AI NFTs",
            href: "/nfts",
            color: "text-purple-500",

            icon: <Box />,
          },
          {
            name: "Settings",
            href: "/settings",
            color: "text-[#FFB72D]",

            icon: <Cog />,
          },
        ].map((e) => (
          <Link
            href={e.href}
            key={e.name}
            className={`flex items-center gap-x-2.5 hover:bg-[#27272A]/60 rounded-lg px-3 py-2.5 ${
              pathname === e.href ? "bg-[#27272A]" : ""
            }`}
          >
            <div className={`${e.color}`}>{e.icon}</div>
            <div>{e.name}</div>
          </Link>
        ))}
        <div className="flex-1" />
        <div className="w-full bg-[#27272A] rounded-lg p-3 py-3.5 text-center flex justify-center">
          {/* <Dialog>
            <DialogTrigger>Connect</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog> */}
          {/* {address ? (
            <div className="w-full flex items-center gap-4">
              <Image
                src="/avatar.svg"
                className="w-10"
                alt="Avatar"
                width={40}
                height={40}
              />
              <div className="w-full flex flex-col">
                <div className="flex gap-6 text-xl font-medium">
                  {address.slice(0, 4)}...{address.slice(-4)}
                  <CopyButton text={address} />
                </div>
                <div className="text-left">
                  {balance ? (
                    <div>{balance?.data?.displayValue} BTC</div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : (
            <ConnectEmbed client={client} />
            // <DropdownMenu>
            //   <DropdownMenuTrigger>Connect</DropdownMenuTrigger>
            //   <DropdownMenuContent className="w-56 mb-[8.8px] bg-[#27272A] border-[#424242]">
            //     <h6 className="text-white text-base font-normal text-center py-2">
            //       Connect with
            //     </h6>
            //     <DropdownMenuSeparator className="bg-[#424242]" />
            //     <DropdownMenuItem className="focus:bg-transparent">
            //       <Button
            //         className="w-full space-x-2 h-8 bg-transparent hover:bg-[#424242]"
            //         onClick={signInWithGoogle}
            //       >
            //         <img
            //           className="w-5 h-5 mx-2"
            //           src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MDUuNiIgaGVpZ2h0PSI3MjAiIHZpZXdCb3g9IjAgMCAxODYuNjkgMTkwLjUiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4NC41ODMgNzY1LjE3MSkiPjxwYXRoIGNsaXAtcGF0aD0ibm9uZSIgbWFzaz0ibm9uZSIgZD0iTS0xMDg5LjMzMy02ODcuMjM5djM2Ljg4OGg1MS4yNjJjLTIuMjUxIDExLjg2My05LjAwNiAyMS45MDgtMTkuMTM3IDI4LjY2MmwzMC45MTMgMjMuOTg2YzE4LjAxMS0xNi42MjUgMjguNDAyLTQxLjA0NCAyOC40MDItNzAuMDUyIDAtNi43NTQtLjYwNi0xMy4yNDktMS43MzItMTkuNDgzeiIgZmlsbD0iIzQyODVmNCIvPjxwYXRoIGNsaXAtcGF0aD0ibm9uZSIgbWFzaz0ibm9uZSIgZD0iTS0xMTQyLjcxNC02NTEuNzkxbC02Ljk3MiA1LjMzNy0yNC42NzkgMTkuMjIzaDBjMTUuNjczIDMxLjA4NiA0Ny43OTYgNTIuNTYxIDg1LjAzIDUyLjU2MSAyNS43MTcgMCA0Ny4yNzgtOC40ODYgNjMuMDM4LTIzLjAzM2wtMzAuOTEzLTIzLjk4NmMtOC40ODYgNS43MTUtMTkuMzEgOS4xNzktMzIuMTI1IDkuMTc5LTI0Ljc2NSAwLTQ1LjgwNi0xNi43MTItNTMuMzQtMzkuMjI2eiIgZmlsbD0iIzM0YTg1MyIvPjxwYXRoIGNsaXAtcGF0aD0ibm9uZSIgbWFzaz0ibm9uZSIgZD0iTS0xMTc0LjM2NS03MTIuNjFjLTYuNDk0IDEyLjgxNS0xMC4yMTcgMjcuMjc2LTEwLjIxNyA0Mi42ODlzMy43MjMgMjkuODc0IDEwLjIxNyA0Mi42ODljMCAuMDg2IDMxLjY5My0yNC41OTIgMzEuNjkzLTI0LjU5Mi0xLjkwNS01LjcxNS0zLjAzMS0xMS43NzYtMy4wMzEtMTguMDk4czEuMTI2LTEyLjM4MyAzLjAzMS0xOC4wOTh6IiBmaWxsPSIjZmJiYzA1Ii8+PHBhdGggZD0iTS0xMDg5LjMzMy03MjcuMjQ0YzE0LjAyOCAwIDI2LjQ5NyA0Ljg0OSAzNi40NTUgMTQuMjAxbDI3LjI3Ni0yNy4yNzZjLTE2LjUzOS0xNS40MTMtMzguMDEzLTI0Ljg1Mi02My43MzEtMjQuODUyLTM3LjIzNCAwLTY5LjM1OSAyMS4zODgtODUuMDMyIDUyLjU2MWwzMS42OTIgMjQuNTkyYzcuNTMzLTIyLjUxNCAyOC41NzUtMzkuMjI2IDUzLjM0LTM5LjIyNnoiIGZpbGw9IiNlYTQzMzUiIGNsaXAtcGF0aD0ibm9uZSIgbWFzaz0ibm9uZSIvPjwvZz48L3N2Zz4="
            //           alt=""
            //         />
            //         Google
            //       </Button>
            //     </DropdownMenuItem>
            //     <DropdownMenuItem className="focus:bg-transparent">
            //       <Button
            //         className="w-full h-8 bg-transparent hover:bg-[#424242]"
            //         onClick={signInWithApple}
            //       >
            //         <img
            //           className="w-6 h-6 mx-2"
            //           src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDM4IiBoZWlnaHQ9IjI1MDAiIHZpZXdCb3g9IjAgMCA0OTYuMjU1IDYwOC43MjgiIGlkPSJhcHBsZSI+PHBhdGggZmlsbD0iIzk5OSIgZD0iTTI3My44MSA1Mi45NzNDMzEzLjgwNi4yNTcgMzY5LjQxIDAgMzY5LjQxIDBzOC4yNzEgNDkuNTYyLTMxLjQ2MyA5Ny4zMDZjLTQyLjQyNiA1MC45OC05MC42NDkgNDIuNjM4LTkwLjY0OSA0Mi42MzhzLTkuMDU1LTQwLjA5NCAyNi41MTItODYuOTcxek0yNTIuMzg1IDE3NC42NjJjMjAuNTc2IDAgNTguNzY0LTI4LjI4NCAxMDguNDcxLTI4LjI4NCA4NS41NjIgMCAxMTkuMjIyIDYwLjg4MyAxMTkuMjIyIDYwLjg4M3MtNjUuODMzIDMzLjY1OS02NS44MzMgMTE1LjMzMWMwIDkyLjEzMyA4Mi4wMSAxMjMuODg1IDgyLjAxIDEyMy44ODVzLTU3LjMyOCAxNjEuMzU3LTEzNC43NjIgMTYxLjM1N2MtMzUuNTY1IDAtNjMuMjE1LTIzLjk2Ny0xMDAuNjg4LTIzLjk2Ny0zOC4xODggMC03Ni4wODQgMjQuODYxLTEwMC43NjYgMjQuODYxQzg5LjMzIDYwOC43MyAwIDQ1NS42NjYgMCAzMzIuNjI4YzAtMTIxLjA1MiA3NS42MTItMTg0LjU1NCAxNDYuNTMzLTE4NC41NTQgNDYuMTA1IDAgODEuODgzIDI2LjU4OCAxMDUuODUyIDI2LjU4OHoiPjwvcGF0aD48L3N2Zz4="
            //           alt=""
            //         />
            //         Apple
            //       </Button>
            //     </DropdownMenuItem>
            //   </DropdownMenuContent>
            // </DropdownMenu>
          )} */}

          <ConnectButton
            theme={darkTheme({
              colors: {
                primaryButtonBg: "#18181B",
                primaryButtonText: "#f0f0f0",
                selectedTextBg: "#18181b",
              },
            })}
            autoConnect={true}
            client={client}
            chain={botanixChain}
            wallets={[embeddedWallet()]}
            accountAbstraction={{
              chain: botanixChain,
              factoryAddress: FACTORY_ADDRESS_CONTRACT,
              gasless: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
