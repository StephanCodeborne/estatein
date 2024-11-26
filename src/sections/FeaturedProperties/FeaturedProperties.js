import styles from "./FeaturedProperties.module.css";
import InnerContainer from "../../components/InnerContainer/InnerContainer";
import CommonContent from "../../components/CommonContent/CommonContent";
import IntroText from "../../components/IntroText/IntroText";
import Button from "../../components/Button/Button";

export default function FeaturedProperties({}) {
    return (
        <section id="featured-properties" className="section-container">
            <InnerContainer>
                <CommonContent>
                    <IntroText
                        heading="Featured Properties"
                        maxTextWidth="75rem"
                        buttonTitle="View All Properties"
                        buttonHref="#"
                    >
                        Explore our handpicked selection of featured properties.
                        Each listing offers a glimpse into exceptional homes and
                        investments available through Estatein. Click "View
                        Details" for more information.
                    </IntroText>

                    <ul className={styles.properties}>
                        <li className={styles.card}>
                            <img src="" alt="property image" />

                            <div className={styles.text}>
                                <h3></h3>
                                <p></p>
                            </div>

                            <div className={styles.info}></div>

                            <div className={styles.footer}>
                                <div className={styles.price}></div>
                                <Button href="#" variant="cta">
                                    View Property Details
                                </Button>
                            </div>
                        </li>

                        <li className={styles.card}>
                            <img src="" alt="property image" />

                            <div className={styles.text}>
                                <h3></h3>
                                <p></p>
                            </div>

                            <div className={styles.info}></div>

                            <div className={styles.footer}>
                                <div className={styles.price}></div>
                                <Button href="#" variant="cta">
                                    View Property Details
                                </Button>
                            </div>
                        </li>

                        <li className={styles.card}>
                            <img src="" alt="property image" />

                            <div className={styles.text}>
                                <h3></h3>
                                <p></p>
                            </div>

                            <div className={styles.info}></div>

                            <div className={styles.footer}>
                                <div className={styles.price}></div>
                                <Button href="#" variant="cta">
                                    View Property Details
                                </Button>
                            </div>
                        </li>
                    </ul>
                </CommonContent>
            </InnerContainer>
        </section>
    );
}
