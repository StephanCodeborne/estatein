import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import PromoBanner from "./sections/PromoBanner/PromoBanner";
import Services from "./sections/Services/Services";

export default function App() {
    return (
        <>
            <PromoBanner />
            <Header />
            <Hero />
            <Services />
        </>
    );
}
