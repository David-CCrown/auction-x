import AuctionRulesDialog from "@/components/system/auction-rules-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auction Live",
  description: "Live auction session",
};

export default function LiveAuctionSessionPage() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-7">
        <div className="col-span-3">
          <Skeleton className="w-full h-[300px] bg-neutral-200" />
        </div>
      </div>
      <AuctionRulesDialog />
    </>
  );
}
