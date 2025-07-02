import FeaturedProducts from "../components/FeaturedProducts";
import FooterComponent from "../components/Footer";
import AurmiraHero from "../components/HomeHero";
import TestimonialSection from "../components/Test";
import WhyChooseUs from "../components/WhyChoose";

export default function Home(){
    return(
        <>
        <AurmiraHero />
        <FeaturedProducts />
        <WhyChooseUs />
        <TestimonialSection />
        <FooterComponent />
        </>
    )
}