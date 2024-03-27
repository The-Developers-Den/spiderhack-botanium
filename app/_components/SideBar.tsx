"use client";
import { Box, Cog, CreditCard, Home, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();
  return (
    <div className="w-full max-w-96 h-full">
      <div className="space-y-5 w-10/12 mx-auto h-full flex flex-col items-stretch">
        <h5 className="text-4xl p-4 font-semibold text-[#FFB72D]">Botanix</h5>
        {[
          {
            name: "Home",
            href: "/",
            icon: <Home />,
          },
          {
            name: "Ask AI",
            href: "/search",
            icon: <Search />,
          },
          {
            name: "Send Transaction",
            href: "/modal",
            icon: <CreditCard />,
          },
          {
            name: "Deploy Contract",
            href: "/deploy",
            icon: <Box />,
          },
          {
            name: "Settings",
            href: "/settings",
            icon: <Cog />,
          },
        ].map((e) => (
          <Link
            href={e.href}
            className={`flex items-center gap-x-2.5 hover:bg-[#d1c5ad]/30 rounded-lg px-3 py-2.5 ${
              pathname === e.href ? "bg-[#d1c5ad]/50" : ""
            }`}
          >
            <div className={`text-[#FFB72D]`}>{e.icon}</div>
            <div>{e.name}</div>
          </Link>
        ))}
        <div className="flex-1" />
        <div className="w-full bg-white/30 rounded-xl p-3 text-center flex justify-center">
          <w3m-button balance="hide" size="md" label="Connect" />
        </div>
      </div>
    </div>
  );
}
