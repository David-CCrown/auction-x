import { ChevronDown, CoinsIcon, DiamondPlusIcon, HouseIcon, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import React from "react";
import Link from "next/link";

const CreateNewBtn = () => {
  const actions = [
    {
      label: "Auction House",
      key: "auction-house",
      icon: HouseIcon,
      href: "/new/auction-house",
    },
    {
      label: "Auction",
      key: "auction",
      icon: CoinsIcon,
      href: "/new/auction",
    },
    {
      label: "Item",
      key: "item",
      icon: DiamondPlusIcon,
      href: "/new/item",
    },
  ];

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <PlusIcon />
            <span className="hidden lg:inline-block">Create New</span>
            <span className="border-l pl-2">
              <ChevronDown />
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-fit">
          <div className="grid grid-cols-1 w-full">
            {actions.map(({ label, key, href, icon }) => (
              <Link href={href} key={key}>
                <Button
                  className="w-full justify-start px-2"
                  size="icon"
                  variant="ghost"
                >
                  {React.createElement(icon)}
                  <span>{label}</span>
                </Button>
              </Link>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CreateNewBtn;
