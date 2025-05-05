"use client";

import Image from "next/image";
import Logo from "@/assets/logo.svg";
import NextLink from "next/link";
import { Button } from "../ui/button";
import { LockIcon, LogOutIcon, MenuIcon } from "lucide-react";
import PassPrivateAuction from "./pass-private-auction";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useSession, signOut } from "next-auth/react";
import SolanaConnectButton from "./connect-wallet-btn";
import { NavigationMenu } from "../ui/navigation-menu";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import CreateNewBtn from "./create-new-btn";
// import { siteConfig } from "@/config/site";

const Header = () => {
  const { data: session, status } = useSession();
  const loggedIn = session ? true : false;

  return (
    <header className="">
      <div className="h-[70px] w-[95%] lg:w-[90%] mx-auto flex items-center justify-between gap-4">
        <MobileSidebar />
        <div className="flex items-center gap-6">
          <NextLink className="flex items-center gap-2" href="/">
            <Image alt="logo" src={Logo} width={30} height={30} />
            <p className="font-[600] text-gradient uppercase">
              auction-<span className="">X</span>
            </p>
          </NextLink>
          <Nav />
        </div>
        <div className="flex items-center">
          {loggedIn ? (
            <Authenticated user={session?.user} />
          ) : (
            <NextLink href="/auth">
              <Button className="flex items-center gap-2 font-[600] text-accent-foreground bg-gradient cursor-pointer">
                <LockIcon /> Enter App
              </Button>
            </NextLink>
          )}
          {/* <Button>Join</Button> */}
        </div>
      </div>
    </header>
  );
};

const Nav = () => {
  return (
    <NavigationMenu className="hidden lg:block">
      {siteConfig.navItems.map((item) => (
        <Link className="px-3" key={item.label} href={item.href}>
          {item.label}
        </Link>
      ))}
    </NavigationMenu>
  );
};

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger aria-roledescription="Open menu" asChild>
        <Button className="block lg:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetTitle hidden>Menu</SheetTitle>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-center gap-6">
            <NextLink className="flex items-center gap-2" href="/">
              <Image alt="logo" src={Logo} width={30} height={30} />
              <p className="font-[600] text-gradient uppercase">
                auction-<span className="">X</span>
              </p>
            </NextLink>
            <Nav />
          </div>
        </SheetHeader>
        <SheetDescription>
          <div className="w-full grid grid-cols-1 px-4">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.label}
                className=" w-full rounded-lg  py-3 px-4 flex items-center gap-2 hover:bg-card hover:text-card-foreground cursor-pointer"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export const Authenticated = ({ user }: { user: any }) => {
  return (
    <>
      <div className="flex items-center gap-4 pr-4 mr-4 border-r">
        {/* <div className="hidden lg:block">
          <PassPrivateAuction />
        </div> */}
        <CreateNewBtn />
        <SolanaConnectButton />
      </div>

      <Dialog>
        <DialogOverlay className="z-[999]" />
        <DialogTitle hidden>Profile</DialogTitle>
        <DialogTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src={`${user?.image}`} />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </DialogTrigger>
        <DialogContent className="z-[999]">
          <div className="p-4">
            <div className="flex items-center gap-4 pb-2 border-b">
              <Avatar>
                <AvatarImage src={`${user?.image}`} />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <div>
                <p className="font-[600]">{user?.name}</p>
                <p className="text-accent-foreground"></p>
              </div>
            </div>
            <div className="mt-4 w-full">
              <div className=" w-full grid grid-cols-1">
                {siteConfig.userProfileItems.map((item) => (
                  <Link
                    className="w-full rounded-lg  py-3 px-3 flex items-center gap-2 hover:bg-card hover:text-card-foreground cursor-pointer"
                    href={item.href}
                    key={item.label}
                  >
                    {React.createElement(item.icon)}
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-end">
              <Button
                className="mt-4 text-white bg-red-500 hover:bg-red-400"
                onClick={() => signOut()}
              >
                <LogOutIcon />
                Sign out
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
