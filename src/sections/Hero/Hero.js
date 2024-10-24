import Button from "../../components/Button/Button";
import SectionContent from "../../components/SectionContent/SectionContent";
import Achievements from "./Achievements/Achievements";

import styles from "./Hero.module.css";

import heroImage from "../../assets/images/hero-section-image.png";
import abstractShape from "../../assets/images/abstract-shape-hero.svg";
import widget from "../../assets/images/widget.png";

const achievementsData = [
  { amount: "200+", title: "Happy Customers" },
  { amount: "10k+", title: "Properties For Clients" },
  { amount: "16+", title: "Years of Experience" },
];

export default function Hero() {
  return (
    <section id="hero" className="section-container">
      <SectionContent className={styles.content}>
        <div className={styles.left}>
          <div className={styles.text}>
            <h1>Discover Your Dream Property with Estatein</h1>
            <p>
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>

            <div className={styles.circle}>
              <a href="#">
                <img src={widget} alt="discover your dream property" />
              </a>
            </div>
          </div>

          <div className={styles.buttonsRow}>
            <Button>learn more</Button>
            <Button variant="cta">browse properties</Button>
          </div>

          <Achievements data={achievementsData} />
        </div>
      </SectionContent>

      <div className={styles.right}>
        <img className={styles.image} src={heroImage} alt="cool building" />
        <img
          className={styles.shape}
          src={abstractShape}
          alt="abstract shape on the background"
        />
      </div>
    </section>
  );
}
