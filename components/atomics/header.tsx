"use client";

import Image from "next/image";
import Logo from "@/assets/logo.svg";
import NextLink from "next/link";
import { Button } from "../ui/button";
import { Wallet2Icon } from "lucide-react";
import WalletConnectBtn from "./connect-btn";
import GoogleAuthBtn from "./google-auth-btn";
// import { siteConfig } from "@/config/site";

const Header = () => {
  return (
    <header className="">
      <div className="h-[70px] w-[85%] mx-auto flex items-center justify-between gap-4">
        <NextLink className="flex items-center gap-2" href="/">
          <Image alt="logo" src={Logo} width={30} height={30} />
          <p className="font-[600] text-gradient uppercase">
            auction-<span className="">X</span>
          </p>
        </NextLink>
        <div className="flex items-center gap-4">
          <GoogleAuthBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
