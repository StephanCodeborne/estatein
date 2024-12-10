import styles from "./Testimonials.module.css";
import InnerContainer from "../../components/InnerContainer/InnerContainer";
import CommonContent from "../../components/CommonContent/CommonContent";
import IntroText from "../../components/IntroText/IntroText";

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-container">
            <InnerContainer>
                <CommonContent>
                    <IntroText
                        heading="What Our Clients Say"
                        maxTextWidth="60rem"
                        buttonTitle="View All Testimonials"
                        buttonHref="#"
                    >
                        Read the success stories and heartfelt testimonials from
                        our valued clients. Discover why they chose Estatein for
                        their real estate needs.
                    </IntroText>

                    <ul className={styles.testimonials}>
                        <li className={styles.card}>
                            <div className={styles.stars}>
                                <img
                                    src=""
                                    alt="full star"
                                    className={styles.star}
                                />
                                <img
                                    src=""
                                    alt="full star"
                                    className={styles.star}
                                />
                                <img
                                    src=""
                                    alt="full star"
                                    className={styles.star}
                                />
                                <img
                                    src=""
                                    alt="full star"
                                    className={styles.star}
                                />
                                <img
                                    src=""
                                    alt="full star"
                                    className={styles.star}
                                />
                            </div>

                            <div className={styles.text}>
                                <h3 className={styles.title}>
                                    Exceptional Service!
                                </h3>
                                <p className={styles.description}>
                                    Our experience with Estatein was
                                    outstanding. Their team's dedication and
                                    professionalism made finding our dream home
                                    a breeze. Highly recommended!
                                </p>
                            </div>

                            <div className={styles.client}>
                                <img
                                    src=""
                                    alt="avatar"
                                    className={styles.avatar}
                                />

                                <div className={styles.info}>
                                    <h4 className={styles.name}>Wade Warren</h4>
                                    <p className={styles.location}>
                                        USA, California
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </CommonContent>
            </InnerContainer>
        </section>
    );
}
