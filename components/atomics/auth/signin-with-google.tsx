"use client";

import { Button } from "@/components/ui/button";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useSession, signIn, signOut } from "next-auth/react";

const SignInWithGoogle = () => {
  return (
    <Button
      className="w-full text-lg font-bold"
      size="lg"
      onClick={async () => await signIn("google", { callbackUrl: "/" })}
    >
      <IconBrandGoogle />
      Continue with Google
    </Button>
  );
};

export default SignInWithGoogle;
