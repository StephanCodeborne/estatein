import styles from "./Faq.module.css";
import InnerContainer from "../../components/InnerContainer/InnerContainer";
import CommonContent from "../../components/CommonContent/CommonContent";
import IntroText from "../../components/IntroText/IntroText";
import Button from "../../components/Button/Button";

export default function Faq() {
    return (
        <section id="FAQ" className="section-container">
            <InnerContainer>
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

                    <ul className={styles.faq}>
                        <li className={styles.card}>
                            <h3>How do I search for properties on Estatein?</h3>
                            <p>
                                Learn how to use our user-friendly search tools
                                to find properties that match your criteria.
                            </p>
                            <Button>Read More</Button>
                        </li>
                    </ul>
                </CommonContent>
            </InnerContainer>
        </section>
    );
}
