import AuctionCountdown from "@/components/atomics/auction-countdown";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { IconCurrencySolana } from "@tabler/icons-react";
import { EllipsisIcon, UsersIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Apple 1",
};

export default function AuctionDetailsPage() {
  return (
    <div className="mt-8 w-[90%] lg:w-[90%] mx-auto">
      <section className="grid lg:grid-cols-8">
        <Card className="lg:col-span-3 h-[250px] lg:h-[450px] p-0 overflow-hidden">
          <Image
            alt="auction display image"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
            height={300}
          />
        </Card>
        <div className="lg:col-start-5 lg:col-span-3 flex flex-col gap-6 mt-4 lg:mt-0">
          <div className="flex items-center justify-between">
            <div className="flex items-ceter gap-3 flex-wrap w-[60%]">
              <Link href="#" className={badgeVariants({ variant: "outline" })}>
                Digital Asset
              </Link>
              <Badge variant="outline">
                <UsersIcon /> Private
              </Badge>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost">
                  <EllipsisIcon />
                </Button>
              </PopoverTrigger>
            </Popover>
          </div>
          <h2 className="text-2xl font-bold">The Apple 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            voluptatum, dicta molestiae praesentium nihil eius eos blanditiis.
          </p>
          <div>
            <p className="text-neutral-400">Base Amount</p>
            <h3 className="flex items-center gap-1 text-2xl font-bold accent-text">
              <span className="">
                <IconCurrencySolana />
              </span>
              <span className="accent-text">0.77</span>
            </h3>
          </div>
          <AuctionCountdown title="Auction starts in" />
          <div className="flex items-center gap-4">
            <Button size="lg">Join Round</Button>
            <Button size="lg">Watch Round</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
