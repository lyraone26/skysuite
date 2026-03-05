import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import SpotlightRoger from "@/components/sections/SpotlightRoger";
import WhySkySuite from "@/components/sections/WhySkySuite";
import FeatureGrid from "@/components/sections/FeatureGrid";
import SpotlightScheduling from "@/components/sections/SpotlightScheduling";
import SpotlightFleet from "@/components/sections/SpotlightFleet";
import SpotlightCFI from "@/components/sections/SpotlightCFI";
import SpotlightFlightPlanner from "@/components/sections/SpotlightFlightPlanner";
import StatsBar from "@/components/sections/StatsBar";
import CompetitorTable from "@/components/sections/CompetitorTable";
import Migration from "@/components/sections/Migration";
import WhoItsFor from "@/components/sections/WhoItsFor";
import Pricing from "@/components/sections/Pricing";
import EarlyAccess from "@/components/sections/EarlyAccess";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <SpotlightRoger />
      <WhySkySuite />
      <FeatureGrid />
      <SpotlightScheduling />
      <SpotlightFleet />
      <SpotlightCFI />
      <SpotlightFlightPlanner />
      <StatsBar />
      <CompetitorTable />
      <Migration />
      <WhoItsFor />
      <Pricing />
      <EarlyAccess />
      <Footer />
    </>
  );
}
