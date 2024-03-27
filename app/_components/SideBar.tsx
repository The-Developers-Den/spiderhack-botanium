"use client";
import { Cog, CreditCard, Home, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();
  return (
    <div className="min-w-80 max-w-sm h-full">
      <div className="space-y-5 w-10/12 mx-auto">
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
            name: "Settings",
            href: "/settings",
            icon: <Cog />,
          },
        ].map((e) => (
          <Link
            href={e.href}
            className={`flex items-center gap-x-2.5 hover:bg-white/20 rounded-lg px-3 py-2.5 ${
              pathname === e.href ? "bg-white/20" : ""
            }`}
          >
            <div className="text-[#FFB72D]">{e.icon}</div>
            <div>{e.name}</div>
          </Link>
        ))}
        <div className="w-full bg-white/20 rounded-xl py-3 text-center flex justify-center">
          <w3m-button balance="hide" size="md" label="Connect" />
        </div>
      </div>
    </div>
  );
}
