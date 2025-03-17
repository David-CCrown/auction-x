"use client";

import { Button } from "@/components/ui/button";
import { IconBrandApple } from "@tabler/icons-react";

const SignInWithApple = () => {
  return (
    <Button className="w-full text-lg font-bold" size="lg">
      <IconBrandApple />
      Continue with Apple
    </Button>
  );
};

export default SignInWithApple;
