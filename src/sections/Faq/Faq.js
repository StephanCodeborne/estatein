import styles from "./Faq.module.css";
import InnerContainer from "../../components/InnerContainer/InnerContainer";
import CommonContent from "../../components/CommonContent/CommonContent";
import IntroText from "../../components/IntroText/IntroText";
import Slider from "../../components/Slider/Slider";
import Questions from "./Questions/Questions";

export default function Faq() {
    return (
        <section id="FAQ" className="section-container">
            <InnerContainer className={styles.innerContainer}>
                <CommonContent>
                    <IntroText
                        heading="Frequently Asked Questions"
                        maxTextWidth="77.25rem"
                        buttonTitle="View All FAQ’s"
                        buttonHref="#"
                    >
                        Find answers to common questions about Estatein's
                        services, property listings, and the real estate
                        process. We're here to provide clarity and assist you
                        every step of the way.
                    </IntroText>

                    <Slider length={9}>
                        <Questions />
                    </Slider>
                </CommonContent>
            </InnerContainer>
        </section>
    );
}
