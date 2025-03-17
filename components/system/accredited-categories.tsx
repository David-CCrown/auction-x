"use client";

import { StarsIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { BentoGrid, BentoGridItem } from "../acer/bento-grid";
import { AppleCarousel } from "../acer/apple-cards-carousel";
import { Card, CardContent } from "../ui/card";

const AccreditedCategories = () => {
  const categories = ["Digital Assets", "Collectibles"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const data = [1, 2, 3];

  const cards = data.map((card, index) => (
    <div className="w-[70vw]" key={index}>
      <Card>
        <CardContent>
          <BentoGrid className="md:auto-rows-[20rem]">
            <BentoGridItem className="w-full">Hello</BentoGridItem>
            <BentoGridItem className="w-full">Hello</BentoGridItem>
          </BentoGrid>
        </CardContent>
      </Card>
    </div>
  ));

  return (
    <div className="w-[85%] py-8 mx-auto mt-8">
      <div className="flex flex-wrap gap-4  items-end justify-between">
        <section className="w-full lg:w-[40%] flex flex-col items-start">
          <div className="flex items-center gap-2 px-4 py-1 rounded-full border text-sm w-fit">
            <StarsIcon size={20} />
            Accredited Categories
          </div>
          <h2 className="mt-4 text-xl lg:text-3xl font-[600]">
            Explore Auction Categories for Every Collector.
          </h2>
        </section>
        <section className="w-full lg:w-[50%] flex flex-wrap items-center gap-4 justify-end">
          {categories.map((cat) => (
            <Button
              onClick={() => setSelectedCategory(cat)}
              key={cat}
              variant={cat === selectedCategory ? "default" : "outline"}
            >
              {cat}
            </Button>
          ))}
        </section>
      </div>
      <div className="mt-12">
        <AppleCarousel items={cards} />
      </div>
    </div>
  );
};

export default AccreditedCategories;
