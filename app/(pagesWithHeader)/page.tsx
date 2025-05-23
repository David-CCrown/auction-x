import AccreditedCategories from "@/components/system/accredited-categories";
import Footer from "@/components/system/footer";
import Hero from "@/components/system/hero";
import HeroPartners from "@/components/system/hero-partners";
import LandingUpcomingAuctions from "@/components/system/landing-upcoming-auctions";
import NewsLetter from "@/components/system/newsletter";
import OurProcess from "@/components/system/our-process";

export default function Home() {
  return (
    <div>
      <Hero />
      <HeroPartners />
      <LandingUpcomingAuctions />
      <OurProcess />
      <AccreditedCategories />
      <NewsLetter />
      <Footer />
    </div>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
  );
}
