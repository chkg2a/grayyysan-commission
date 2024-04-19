import Hero from "@/components/Hero";
import CPA from "@/components/CPA";
import Gallery from "@/components/Gallery";
import Commissions from "@/components/Commissions";
import AbilityShowcase from "@/components/AbilityShowcase"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Hero />
      <CPA />
      <AbilityShowcase/>
      <Gallery />
      <Commissions/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </>
  );
}
