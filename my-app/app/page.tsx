import LandingPage from "@/components/landing-page";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
// import { ProductGrid } from "@/components/ProductGrid";
// import { Prices } from "@/components/Prices";
// import { HowItWorks } from "@/components/HowItWorks";
// import { Testimonials } from "@/components/Testimonials";
// import { Contact } from "@/components/Contact";
// import { Footer } from "@/components/Footer";

export default function Page() {
    return (
        <>


            <Header />
            <HeroSection/>
            {/* <Hero/>
    // <ProductGrid/>
    // <Prices/>
    // <HowItWorks/>
    // <Testimonials/>
    // <Contact/>
    // <Footer/> */}

            <LandingPage />

        </>
    );
}