import { StarsIcon, WalletIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import React from "react";

const OurProcess = () => {
  const processes = [
    {
      icon: WalletIcon,
      title: "Create Your Account",
      description: `Sign up on the platform, verify your identity, connect your
                wallet, and complete any required KYC to start bidding securely`,
    },
    {
      icon: WalletIcon,
      title: "Connect your crypto wallet",
      description: `Browse through our marketplace to discover exclusive and trending NFT collections. From digital art to music and virtual real estate.`,
    },
    {
      icon: WalletIcon,
      title: "Browse Auctions & Select Items",
      description: `Connect a trusted wallet like MetaMask or Trust Wallet, ensure you have the right cryptocurrency, and enable security features for safety.`,
    },
  ];

  return (
    <div className="w-[85%] py-8 mx-auto mt-8">
      <div className="flex flex-wrap gap-4  items-end justify-between">
        <section className="w-full lg:w-[40%] flex flex-col items-start">
          <div className="flex items-center gap-2 px-4 py-1 rounded-full border text-sm w-fit">
            <StarsIcon size={20} />
            Our Process
          </div>
          <h2 className="mt-4 text-xl lg:text-3xl font-[600]">
            Your Complete Getting Started Guide.
          </h2>
        </section>
        <section className="w-full lg:w-[50%]">
          <p>
            Welcome to Auctionx! We’ve designed this comprehensive guide to help
            you navigate your way from start to success.
          </p>
        </section>
      </div>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-3">
        {processes.map(({ icon, title, description }) => (
          <Card key={title} className="p-4 bg-card/70 backdrop-blur-md">
            <CardContent className="flex flex-col gap-2">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-sidebar border">
                {React.createElement(icon)}
              </div>
              <h4 className="font-[600]">{title}</h4>
              <p>{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
