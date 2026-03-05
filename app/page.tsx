import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import ProofBar from "@/components/sections/ProofBar";
import ProblemSolution from "@/components/sections/ProblemSolution";
import FeaturesSpotlight from "@/components/sections/FeaturesSpotlight";
import FeatureGrid from "@/components/sections/FeatureGrid";
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
      <ProblemSolution />
      <FeaturesSpotlight />
      <FeatureGrid />
      <StatsBar />
      <WhoItsFor />
      <EarlyAccess />
      <Footer />
    </>
  );
}
