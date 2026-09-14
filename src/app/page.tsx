import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollytellingShowcase from "@/components/ScrollytellingShowcase";
import TechStack from "@/components/TechStack";
import ServicesBento from "@/components/ServicesBento";
import Portfolio from "@/components/Portfolio";
import InteractiveQuoter from "@/components/InteractiveQuoter";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GlobalDynamicBackground from "@/components/GlobalDynamicBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#040409] text-zinc-100 selection:bg-purple-600 selection:text-white relative">
      <GlobalDynamicBackground />
      <Navbar />
      <Hero />
      <ScrollytellingShowcase />
      <TechStack />
      <ServicesBento />
      <Portfolio />
      <InteractiveQuoter />
      <ProcessTimeline />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  );
}
