import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Changelog from "@/components/Changelog";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#0a0a0a]">
      <Nav />
      <Hero />
      <TrustStrip />
      <Features />
      <HowItWorks />
      <Pricing />
      <Changelog />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}