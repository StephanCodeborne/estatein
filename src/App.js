import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import PromoBanner from "./sections/PromoBanner/PromoBanner";
import Services from "./sections/Services/Services";
import FeaturedProperties from "./sections/FeaturedProperties/FeaturedProperties";
import Testimonials from "./sections/Testimonials/Testimonials";

export default function App() {
    return (
        <>
            <PromoBanner />
            <Header />
            <Hero />
            <Services />
            <FeaturedProperties />
            <Testimonials />
        </>
    );
}
