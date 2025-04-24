import { ArrowRight, StarsIcon } from "lucide-react";
import { Button } from "../ui/button";
import HeroStats from "./hero-stats";
import { AnimatedTestimonials } from "../acer/animated-card-show";
import { heroTestimonials } from "@/config/site";
import { Spotlight } from "../acer/spotlight";
import Link from "next/link";
import Image from "next/image";
import SonicLogo from "@/assets/sonic1718716387929.png";
import SolanaLogo from "@/assets/solana-sol-logo.png";

const Hero = () => {
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <section className="pt-12 min-h-[90vh]">
        <div className="w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-6 items-start">
            <div className="flex items-center gap-2 px-4 py-1 rounded-full border text-sm w-fit">
              <StarsIcon size={20} />
              Best Auctions
            </div>
            <h1 className="text-[2.4rem] lg:text-[3rem] font-[700] leading-10 lg:leading-12">
              Unleash True Digital Value in Blockchain Auctions
            </h1>
            <p>
              Bid with confidence on a blockchain-powered marketplace, ensuring
              fairness, security, and real-time transactions.
            </p>
            {/* <div className="flex items-center gap-4 font-bold py-6 border-y">
              Powered by
              <Link className="flex items-center gap-1" href="">
                <Image
                  alt="solana logo"
                  src={SolanaLogo}
                  width={20}
                  height={20}
                />
                <span>Solana</span>
              </Link>
              {" +  "}
              <Link className="flex items-center gap-1" href="">
                <Image
                  alt="sonic logo"
                  src={SonicLogo}
                  width={20}
                  height={20}
                />
                <span>Sonic</span>
              </Link>
            </div> */}
            <div className="flex items-center gap-4">
              <Button className="" variant="default">
                Explore Collections
              </Button>
              <Button variant="link">
                Learn More <ArrowRight />
              </Button>
            </div>
            <HeroStats />
          </div>
          <div className="flex items-start justify-end">
            <div className="w-[80%]">
              <AnimatedTestimonials testimonials={heroTestimonials} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
