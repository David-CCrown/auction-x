"use client";

import { IconBrandGoogle, IconBrandGoogleFilled } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import WalletConnectBtn from "./connect-btn";
import { useEffect } from "react";

const GoogleAuthBtn = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Button disabled>Loading...</Button>;
  }

  if (!session) {
    return (
      <Button className="cursor-pointer" onClick={() => signIn()}>
        Sign in
        <IconBrandGoogleFilled />
      </Button>
    );
  }

  return (
    <div className="pt-5 flex">
      <WalletConnectBtn />
      <Button className="cursor-pointer" onClick={() => signOut()}>
        <span>{session?.user?.name}</span>
        Sign Out
        <IconBrandGoogleFilled />
      </Button>
      {session?.user?.image ? (
        <Image
          className="rounded-full"
          src={session?.user?.image}
          alt="user avatar"
          width={50}
          height={50}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default GoogleAuthBtn;
