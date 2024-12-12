import styles from "./Testimonials.module.css";

import { ReactComponent as Star } from "../../assets/icons/star.svg";
import clientAvatar1 from "../../assets/images/client-avatar1.png";
import clientAvatar2 from "../../assets/images/client-avatar2.png";
import clientAvatar3 from "../../assets/images/client-avatar3.png";

import InnerContainer from "../../components/InnerContainer/InnerContainer";
import CommonContent from "../../components/CommonContent/CommonContent";
import IntroText from "../../components/IntroText/IntroText";

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-container">
            <InnerContainer className={styles.innerContainer}>
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
                                <div className={styles.star}>
                                    <Star alt="full star" />
                                </div>
                                <div className={styles.star}>
                                    <Star alt="full star" />
                                </div>
                                <div className={styles.star}>
                                    <Star alt="full star" />
                                </div>
                                <div className={styles.star}>
                                    <Star alt="full star" />
                                </div>
                                <div className={styles.star}>
                                    <Star alt="full star" />
                                </div>
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
                                    src={clientAvatar1}
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
