import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import { PlayIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LiveAuctionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="h-[70px] w-[95%] lg:w-[90%] mx-auto flex items-center justify-between gap-4">
        <Link className="flex items-center gap-2" href="/">
          <div className="relative">
            <Image alt="logo" src={Logo} width={40} height={40} />
            <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[25px] h-[25px] rounded-full flex items-center justify-center bg-background/80 backdrop-blur-md">
              <PlayIcon size={15} />
            </button>
          </div>
          <p className="text-xl font-[600] text-gradient uppercase">Live</p>
        </Link>
      </header>
      <div className="mt-8 w-[90%] lg:w-[90%] mx-auto">{children}</div>
    </>
  );
}
