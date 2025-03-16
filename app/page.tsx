import Header from "@/components/atomics/header";
import Hero from "@/components/system/hero";
import HeroPartners from "@/components/system/hero-partners";
import LandingUpcomingAuctions from "@/components/system/landing-upcoming-auctions";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <HeroPartners />
      <LandingUpcomingAuctions />
    </div>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
  );
}
