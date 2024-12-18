import styles from "./Faq.module.css";
import InnerContainer from "../../components/InnerContainer/InnerContainer";
import CommonContent from "../../components/CommonContent/CommonContent";
import IntroText from "../../components/IntroText/IntroText";
import Slider from "../../components/Slider/Slider";
import Question from "../../components/Question/Question";

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
                        <ul className={styles.faq}>
                            <Question
                                question="How do I search for properties on Estatein?"
                                description="Learn how to use our user-friendly search tools to find properties that match your criteria."
                                href="#"
                            />
                            <Question
                                question="What documents do I need to sell my property through Estatein?"
                                description="Find out about the necessary documentation for listing your property with us."
                                href="#"
                            />
                            <Question
                                question="How can I contact an Estatein agent?"
                                description="Discover the different ways you can get in touch with our experienced agents."
                                href="#"
                            />
                            <Question
                                question="How do I search for properties on Estatein?"
                                description="Learn how to use our user-friendly search tools to find properties that match your criteria."
                                href="#"
                            />
                            <Question
                                question="What documents do I need to sell my property through Estatein?"
                                description="Find out about the necessary documentation for listing your property with us."
                                href="#"
                            />
                            <Question
                                question="How can I contact an Estatein agent?"
                                description="Discover the different ways you can get in touch with our experienced agents."
                                href="#"
                            />
                            <Question
                                question="How do I search for properties on Estatein?"
                                description="Learn how to use our user-friendly search tools to find properties that match your criteria."
                                href="#"
                            />
                            <Question
                                question="What documents do I need to sell my property through Estatein?"
                                description="Find out about the necessary documentation for listing your property with us."
                                href="#"
                            />
                            <Question
                                question="How can I contact an Estatein agent?"
                                description="Discover the different ways you can get in touch with our experienced agents."
                                href="#"
                            />
                        </ul>
                    </Slider>
                </CommonContent>
            </InnerContainer>
        </section>
    );
}
