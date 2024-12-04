import Button from "../../components/Button/Button";
import InnerContainer from "../../components/InnerContainer/InnerContainer";
import HeroText from "./HeroText/HeroText";
import Achievements from "./Achievements/Achievements";

import styles from "./Hero.module.css";

import heroImage from "../../assets/images/hero-section-image.png";
import abstractShape from "../../assets/images/abstract-shape-hero.svg";

const achievementsData = [
    { amount: "200+", title: "Happy Customers" },
    { amount: "10k+", title: "Properties For Clients" },
    { amount: "16+", title: "Years of Experience" },
];

export default function Hero() {
    return (
        <section id="hero" className="section-container">
            <InnerContainer className={styles.content}>
                <div className={styles.left}>
                    <HeroText />
                    <div className={styles.buttonsRow}>
                        <Button>learn more</Button>
                        <Button variant="cta">browse properties</Button>
                    </div>
                    <Achievements data={achievementsData} />
                </div>
            </InnerContainer>

            <div
                className={styles.right}
                style={{
                    background: `url(${abstractShape}) center center /cover no-repeat var(--grey-2)`,
                }}
            >
                <img
                    className={styles.image}
                    src={heroImage}
                    alt="cool building"
                />
            </div>
        </section>
    );
}
