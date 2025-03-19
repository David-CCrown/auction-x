"use client";

import useDisclosure from "@/hooks/use-disclosure";
import { Dialog } from "../ui/dialog";
import { useEffect } from "react";

const AuctionRulesDialog = () => {
  const { isOpen, open, close, toggle } = useDisclosure();

  useEffect(() => {}, []);

  return <Dialog open={isOpen} onOpenChange={toggle}></Dialog>;
};

export default AuctionRulesDialog;
