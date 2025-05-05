"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";
import { Button } from "../ui/button";
import { ArrowRight, WalletIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { WalletReadyState } from "@solana/wallet-adapter-base";

export default function SolanaConnectButton() {
  const { wallets, connect, disconnect, connecting, select, connected } =
    useWallet();

  const [isClient, setIsClient] = useState(false);

  // To avoid hydration mismatch
  useEffect(() => setIsClient(true), []);

  const handleWalletSelect = async (walletName: any) => {
    try {
      select(walletName);
      await connect();
    } catch (error) {
      console.error("Error Connecting Wallet:", error);
    }
  };

  // Custom wallet dropdown menu
  return (
    <div className="relative">
      <Dialog>
        <DialogOverlay className="z-[999]" />
        <DialogTrigger asChild>
          <Button
            className="font-[600] text-accent-foreground bg-gradient cursor-pointer"
            // onClick={() => setShowWalletList(!showWalletList)}
          >
            <WalletIcon />
            <span className="hidden lg:inline-block">Connect Wallet</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="z-[999] bg-card/80 backdrop-blur-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Connect Wallet
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 grid grid-cols-1 divide-y">
            {wallets.map((wallet) => (
              <div
                className="flex items-center justify-between py-2"
                key={wallet.adapter.name}
              >
                <div className="flex">
                  <img
                    src={wallet.adapter.icon}
                    alt={wallet.adapter.name}
                    className="w-6 h-6 mr-3"
                  />
                  <h3 className="text-lg">{wallet.adapter.name}</h3>
                </div>
                {wallet.readyState !== WalletReadyState.Installed ? (
                  <Link href={wallet.adapter.url} target="_blank">
                    <Button className="text-base cursor-pointer" variant="link">
                      Install
                      <ArrowRight />
                    </Button>
                  </Link>
                ) : connected && wallet.adapter.connected ? (
                  <Button className="text-green-400">Connected</Button>
                ) : (
                  <Button
                    onClick={() => handleWalletSelect(wallet.adapter.name)}
                    className="cursor-pointer"
                    disabled={connected}
                  >
                    Connect
                  </Button>
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
