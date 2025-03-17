"use client";

import { Calendar1Icon, ChevronDown, SearchIcon, XIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useState } from "react";

const AuctionsSearch = () => {
  const {} = useForm();

  const [searchText, setSearchText] = useState<string>();

  return (
    <div className="mt-8 w-[90%] lg:w-[70%] mx-auto bg-card/70 backdrop-blur-md">
      <Card>
        <CardContent className="">
          <div className="relative">
            <Input
              value={searchText}
              placeholder="Search for items"
              className="w-full h-[3.2rem] px-12 peer"
              onChange={(ev) => setSearchText(ev.target.value)}
            />

            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 transition-opacity  peer-placeholder-shown:opacity-30 opacity-100" />

            <Button
              onClick={() => setSearchText("")}
              className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 peer-placeholder-shown:hidden block"
              variant="ghost"
            >
              <XIcon />
            </Button>
          </div>
          <div className="mt-3 flex gap-4 items-center flex-wrap">
            {/* filty by region */}
            <Popover modal>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  Filter by country <ChevronDown />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis cumque assumenda fugit eveniet aliquid veniam iure
                illum asperiores iste aspernatur pariatur dolorem tempora est,
                amet sint iusto quaerat quam unde.
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  Filter by region <ChevronDown />
                </Button>
              </PopoverTrigger>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    Filter by price <ChevronDown />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis cumque assumenda fugit eveniet aliquid veniam iure
                  illum asperiores iste aspernatur pariatur dolorem tempora est,
                  amet sint iusto quaerat quam unde.
                </PopoverContent>
              </Popover>
              <PopoverContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis cumque assumenda fugit eveniet aliquid veniam iure
                illum asperiores iste aspernatur pariatur dolorem tempora est,
                amet sint iusto quaerat quam unde.
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  Filter by category <ChevronDown />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis cumque assumenda fugit eveniet aliquid veniam iure
                illum asperiores iste aspernatur pariatur dolorem tempora est,
                amet sint iusto quaerat quam unde.
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  Filter by date range <Calendar1Icon />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis cumque assumenda fugit eveniet aliquid veniam iure
                illum asperiores iste aspernatur pariatur dolorem tempora est,
                amet sint iusto quaerat quam unde.
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuctionsSearch;
