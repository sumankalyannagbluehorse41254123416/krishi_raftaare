import HeroSection from "@/components/HeroSection";
import PureAgricultureSection from "@/components/PureAgricultureSection";
import AgricultureMattersSection from "@/components/AgricultureMattersSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import DiscoverSection from "@/components/DiscoverSection";
import { fetchPageData } from "@/services/fetchData.service";
import { headers } from "next/headers";

// Utility: strip HTML tags from CMS fields
const stripHtml = (html) => (html ? html.replace(/<[^>]*>/g, "") : "");

export default async function HomePage() {
  const rqHeaders = headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData = {};
  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "14b7f7b1-5696-418d-adab-cd622adf2a83" // 🔹 UID of homepage
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }

  console.log("siteData", siteData);

  const agricultureMattersData =
    siteData?.pageItemdataWithSubsection?.[0];

    const servicesData =
    siteData?.pageItemdataWithSubsection?.[2] ?? null;
  return (
    <div className="font-poppins bg-light text-dark">
      <HeroSection />
      <PureAgricultureSection />
      <AgricultureMattersSection data={agricultureMattersData} />
      <ServicesSection siteData={siteData} sectionData={servicesData} />
      <ProjectsSection />
      <ProductsSection />
      <ContactSection />
      <DiscoverSection />
    </div>
  );
}
