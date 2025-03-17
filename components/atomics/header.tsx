"use client";

import Image from "next/image";
import Logo from "@/assets/logo.svg";
import NextLink from "next/link";
import { Button } from "../ui/button";
import { LockIcon } from "lucide-react";
import PassPrivateAuction from "./pass-private-auction";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useSession, signIn, signOut } from "next-auth/react";
// import { siteConfig } from "@/config/site";

const Header = () => {
  const { data: session, status } = useSession();
  const loggedIn = session ? true : false;

  return (
    <header className="">
      <div className="h-[70px] w-[85%] mx-auto flex items-center justify-between gap-4">
        <NextLink className="flex items-center gap-2" href="/">
          <Image alt="logo" src={Logo} width={30} height={30} />
          <p className="font-[600] text-gradient uppercase">
            auction-<span className="">X</span>
          </p>
        </NextLink>
        <div className="flex items-center">
          {loggedIn ? (
            <Authenticated user={session?.user} />
          ) : (
            <NextLink href="/auth">
              <Button className="flex items-center gap-2 font-[600] text-accent-foreground fading-bg-gradient cursor-pointer">
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

const Authenticated = ({ user }: { user: any }) => {
  return (
    <>
      <div className="pr-4 mr-4 border-r">
        <PassPrivateAuction />
      </div>
      <Dialog>
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
            <Button className="mt-4" onClick={() => signOut()}>
              Sign out
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
