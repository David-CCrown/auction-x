import Image from "next/image";
import Logo from "@/assets/logo.svg";
import NextLink from "next/link";
import { Button } from "../ui/button";
import { LockIcon } from "lucide-react";
import PassPrivateAuction from "./pass-private-auction";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
// import { siteConfig } from "@/config/site";

const Header = () => {
  const loggedIn = true;

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
            <Authenticated />
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

const Authenticated = () => {
  return (
    <>
      <div className="pr-4 mr-4 border-r">
        <PassPrivateAuction />
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </DialogTrigger>
        <DialogContent className="z-[999]">
          <div className="p-4">
            <div className="flex items-center gap-4 pb-2 border-b">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <div>
                <p className="font-[600]">John Doe</p>
                <p className="text-accent-foreground"></p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
