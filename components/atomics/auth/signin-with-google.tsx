"use client";

import { Button } from "@/components/ui/button";
import { IconBrandGoogle } from "@tabler/icons-react";

const SignInWithGoogle = () => {
  return (
    <Button className="w-full text-lg font-bold" size="lg">
      <IconBrandGoogle />
      Continue with Google
    </Button>
  );
};

export default SignInWithGoogle;
