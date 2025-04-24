import AuctionCard from "@/components/atomics/auction-card";
import AuctionsSearch from "@/components/atomics/auctions-search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Auctions",
};

export default function AuctionsPage() {
  return (
    <div>
      <AuctionsSearch />
      <div className="mt-8 w-[90%] lg:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
      </div>
    </div>
  );
}
