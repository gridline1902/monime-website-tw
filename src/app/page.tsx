import HeroSection from "./_components/HeroSection";
import IntegrationStats from "./_components/IntegrationStats";
import TrustedPartners from "./_components/PartnersSection";
import ProductsOverview from "./_components/ProductsOverview";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedPartners />
      <IntegrationStats />
      <ProductsOverview />
    </main>
  );
}
