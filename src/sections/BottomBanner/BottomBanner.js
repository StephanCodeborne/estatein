import styles from "./BottomBanner.module.css";
import InnerContainer from "../../components/InnerContainer/InnerContainer";
import IntroText from "../../components/IntroText/IntroText";

export default function BottomBanner() {
    return (
        <section className={`section-container ${styles.container}`}>
            <InnerContainer className={styles.innerContainer}>
                <IntroText
                    className={styles.text}
                    heading="Start Your Real Estate Journey Today"
                    maxTextWidth="72.125rem"
                    buttonTitle="Explore Properties"
                    buttonHref="#"
                    buttonVariant="cta"
                >
                    Your dream property is just a click away. Whether you're
                    looking for a new home, a strategic investment, or expert
                    real estate advice, Estatein is here to assist you every
                    step of the way. Take the first step towards your real
                    estate goals and explore our available properties or get in
                    touch with our team for personalized assistance.
                </IntroText>
            </InnerContainer>
        </section>
    );
}
