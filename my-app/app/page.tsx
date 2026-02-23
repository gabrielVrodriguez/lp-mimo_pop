import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductCarrousel } from "@/components/ProductCarrousel";
import { HowItWorks } from "@/components/HowItWorks";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

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