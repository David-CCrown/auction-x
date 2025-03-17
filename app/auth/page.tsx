import { Metadata } from "next";
import NextLink from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Card, CardContent } from "@/components/ui/card";
import SignInWithGoogle from "@/components/atomics/auth/signin-with-google";
import SignInWithApple from "@/components/atomics/auth/signin-with-apple";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to use the AuctionX platform",
};

export default function AuthPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Card className="bg-card/70 backdrop-blur-md w-[90%] lg:w-[40%]">
        <CardContent className="flex flex-col items-center justify-center gap-4">
          <NextLink href="/">
            <Image alt="auctionX logo" src={Logo} width={80} height={80} />
          </NextLink>
          <h2 className="text-2xl font-bold text-center lg:text-3xl">
            Login to <span className="uppercase text-gradient">AuctionX</span>
          </h2>
          <div className="grid w-full lg:w-[60%] mx-auto grid-cols-1 gap-4 mt-8">
            <SignInWithGoogle />
            <SignInWithApple />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
