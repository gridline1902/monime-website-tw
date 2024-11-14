import ProductsPricing from "./_components/ProductsPricing";
import PricingHeroSection from "./_components/PricingHeroSection";
import CustomPricingOptions from "./_components/CustomPricingOptions";

export default function Pricing() {
    return (
        <main>
            <PricingHeroSection />
            <ProductsPricing />
            <CustomPricingOptions />
        </main>
    )
}