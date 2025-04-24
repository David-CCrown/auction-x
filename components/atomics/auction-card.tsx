"use client";

import { GlowingCardEffect } from "../acer/glowing-card-effect";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, HeartIcon } from "lucide-react";
import { toast } from "react-toastify";
import { IconCurrencySolana } from "@tabler/icons-react";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import React, { lazy } from "react";

interface AuctionCardProps {}

const AuctionCard: React.FC<AuctionCardProps> = ({}) => {
  const handleAddToWishlist = () => {
    toast.success("Item has been added to wishlist");
  };

  const CardImg = lazy(() => import("./auction-card-img"));

  return (
    <Link href={"auctions/auctionId"}>
      <Card className="h-[300px] p-0 relative flex flex-col justify-between">
        <GlowingCardEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="h-[60%] rounded-lg overflow-hidden relative">
          <Button
            className="absolute flex items-center justify-center w-[40px] h-[40px] z-[1] rounded-full top-3 right-3 bg-card/40 backdrop-blur-md"
            variant="ghost"
            onClick={handleAddToWishlist}
          >
            <HeartIcon size={50} />
          </Button>

          <React.Suspense
            fallback={<Skeleton className="w-full h-full bg-neutral-200" />}
          >
            <CardImg />
          </React.Suspense>
        </div>
        <CardContent className="h-[35%] bg-card/70 backdrop-blur-md rounded-2xl flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <CardTitle>Card Title</CardTitle>
            <p>@lucy</p>
          </div>
          <CardDescription className="flex items-center justify-between">
            <div>
              <p>Current Price</p>
              <p className="flex items-center gap-1">
                <span className="">
                  <IconCurrencySolana />
                </span>
                <span className="accent-text">0.77</span>
              </p>
            </div>
            <div>
              <Button variant="link">
                Info
                <ArrowRight />
              </Button>
            </div>
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AuctionCard;
