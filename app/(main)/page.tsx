import HeroSection from "@/components/sections/HeroSection";
import ZielsetzungSection from "@/components/sections/ZielsetzungSection";
import BudgetSection from "@/components/sections/BudgetSection";
import AGBSection from "@/components/sections/AGBSection";
import DownloadSection from "@/components/sections/DownloadSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ZielsetzungSection />
      <BudgetSection />
      <AGBSection />
      <DownloadSection />
      <ContactSection />
    </>
  );
}
