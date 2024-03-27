import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Provider } from "@/providers/wagmiProvider";
import SideBar from "./_components/SideBar";

//web3 modal
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import Web3ModalProvider from "@/context";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en">
      <body className={bricolage.className}>
        {/* <Provider> */}
        <Web3ModalProvider initialState={initialState}>
          <div className="flex w-full h-screen py-4">
            <SideBar />
            <div className="rounded-2xl w-full">
              <div className="w-[98%] h-full overflow-auto py-4 bg-[#231E17] rounded-2xl">
                {children}
              </div>
            </div>
          </div>
        </Web3ModalProvider>
        {/* </Provider> */}
      </body>
    </html>
  );
}
