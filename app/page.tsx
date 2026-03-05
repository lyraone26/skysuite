import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import ProofBar from "@/components/sections/ProofBar";
import WhySkySuite from "@/components/sections/WhySkySuite";
import FeatureGrid from "@/components/sections/FeatureGrid";
import SpotlightScheduling from "@/components/sections/SpotlightScheduling";
import SpotlightFleet from "@/components/sections/SpotlightFleet";
import SpotlightCFI from "@/components/sections/SpotlightCFI";
import StatsBar from "@/components/sections/StatsBar";
import WhoItsFor from "@/components/sections/WhoItsFor";
import EarlyAccess from "@/components/sections/EarlyAccess";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ProofBar />
      <WhySkySuite />
      <FeatureGrid />
      <SpotlightScheduling />
      <SpotlightFleet />
      <SpotlightCFI />
      <StatsBar />
      <WhoItsFor />
      <EarlyAccess />
      <Footer />
    </>
  );
}
