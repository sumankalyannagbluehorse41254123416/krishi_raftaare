import HeroSection from "@/components/HeroSection";
import PureAgricultureSection from "@/components/PureAgricultureSection";
import AgricultureMattersSection from "@/components/AgricultureMattersSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import DiscoverSection from "@/components/DiscoverSection";


export default function HomePage() {
  return (
    <div className="font-poppins bg-light text-dark">
      <HeroSection />
      <PureAgricultureSection />
      <AgricultureMattersSection />
      <ServicesSection />
      <ProjectsSection />
      <ProductsSection />
      <ContactSection />
      <DiscoverSection />
    
    </div>
  );
}
