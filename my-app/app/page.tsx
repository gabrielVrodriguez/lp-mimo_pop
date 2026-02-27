import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductCarrousel } from "@/components/sections/ProductCarrousel";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/layout/Footer";

export default function Page() {
    return (
        <>
            <Header />
            <HeroSection />
            <ProductCarrousel />
            <HowItWorks />
            <CtaSection />
            <Footer />
        </>
    );
}