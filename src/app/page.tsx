import AboutUs from "@/components/AboutUs";
import FactoryPreview from "@/components/FactoryPreview";
import FactoryVideo from "@/components/FactoryVideo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HIFACollaboration from "@/components/HIFACollaboration";
import Navigation from "@/components/Navigation";
import ProductSection from "@/components/ProductSection";
import RDCenter from "@/components/RDCenter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <RDCenter />
        <FactoryPreview />
        <FactoryVideo />
        <AboutUs />
        <HIFACollaboration />
        <ProductSection />
      </main>
      <Footer />
    </div>
  );
}
