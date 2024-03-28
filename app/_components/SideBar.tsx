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
          {
            name: "Deploy Contract",
            href: "/deploy",
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
            className={`flex items-center gap-x-2.5 hover:bg-[#27272A]/60 rounded-lg px-3 py-2.5 ${
              pathname === e.href ? "bg-[#27272A]" : ""
            }`}
          >
            <div className={`${e.color}`}>{e.icon}</div>
            <div>{e.name}</div>
          </Link>
        ))}
        <div className="flex-1" />
        <div className="w-full bg-[#27272A] rounded-xl p-3 text-center flex justify-center">
          <w3m-button balance="hide" size="md" label="Connect" />
        </div>
      </div>
    </div>
  );
}
