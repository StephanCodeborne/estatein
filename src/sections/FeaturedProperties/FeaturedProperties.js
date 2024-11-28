import styles from "./FeaturedProperties.module.css";

import property1 from "../../assets/images/property-1.png";
import property2 from "../../assets/images/property-2.png";
import property3 from "../../assets/images/property-3.png";

import InnerContainer from "../../components/InnerContainer/InnerContainer";
import CommonContent from "../../components/CommonContent/CommonContent";
import IntroText from "../../components/IntroText/IntroText";
import Button from "../../components/Button/Button";

export default function FeaturedProperties({}) {
    return (
        <section id="featured-properties" className="section-container">
            <InnerContainer className={styles.innerContainer}>
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
                            <img
                                src={property1}
                                alt="property image"
                                className={styles.image}
                            />

                            <div className={styles.text}>
                                <h3>Seaside Serenity Villa</h3>
                                <p>
                                    A stunning 4-bedroom, 3-bathroom villa in a
                                    peaceful suburban neighborhood...{" "}
                                    <a href="#">Read More</a>
                                </p>
                            </div>

                            <div className={styles.info}>
                                <span>4-Bedroom</span>
                                <span>3-Bathroom</span>
                                <span>Villa</span>
                            </div>

                            <div className={styles.footer}>
                                <div className={styles.price}></div>
                                <Button href="#" variant="cta">
                                    View Property Details
                                </Button>
                            </div>
                        </li>

                        <li className={styles.card}>
                            <img
                                src={property2}
                                alt="property image"
                                className={styles.image}
                            />

                            <div className={styles.text}>
                                <h3>Metropolitan Haven</h3>
                                <p>
                                    A chic and fully-furnished 2-bedroom
                                    apartment with panoramic city views...{" "}
                                    <a href="#">Read More</a>
                                </p>
                            </div>

                            <div className={styles.info}>
                                <span>2-Bedroom</span>
                                <span>2-Bathroom</span>
                                <span>Villa</span>
                            </div>

                            <div className={styles.footer}>
                                <div className={styles.price}></div>
                                <Button href="#" variant="cta">
                                    View Property Details
                                </Button>
                            </div>
                        </li>

                        <li className={styles.card}>
                            <img
                                src={property3}
                                alt="property image"
                                className={styles.image}
                            />

                            <div className={styles.text}>
                                <h3>Rustic Retreat Cottage</h3>
                                <p>
                                    An elegant 3-bedroom, 2.5-bathroom townhouse
                                    in a gated community...{" "}
                                    <a href="#">Read More</a>
                                </p>
                            </div>

                            <div className={styles.info}>
                                <span>3-Bedroom</span>
                                <span>3-Bathroom</span>
                                <span>Villa</span>
                            </div>

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
