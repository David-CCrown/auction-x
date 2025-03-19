import AuctionRulesDialog from "@/components/system/auction-rules-dialog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Auction",
};

export default function LiveAuctionSessionPage() {
  return (
    <>
      <AuctionRulesDialog />
    </>
  );
}
