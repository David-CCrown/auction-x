import AuctionsSearch from "@/components/atomics/auctions-search";
import Header from "@/components/atomics/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Auctions",
};

export default function AuctionsPage() {
  return (
    <div>
      <Header />
      <AuctionsSearch />
    </div>
  );
}
