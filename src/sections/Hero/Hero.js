import Button from "../../components/Button/Button";
import SectionContent from "../../components/SectionContent/SectionContent";
import styles from "./Hero.module.css";
import heroImage from "../../assets/images/hero-section-image.png";
import abstractShape from "../../assets/images/abstract-shape-hero.svg";
import widget from "../../assets/images/widget.png";

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

          <ul className={styles.achievements}>
            <li className={styles.card}>
              <div className={styles.amount}>200+</div>
              <p>Happy Customers</p>
            </li>
            <li className={styles.card}>
              <div className={styles.amount}>10k+</div>
              <p>Properties For Clients</p>
            </li>
            <li className={styles.card}>
              <div className={styles.amount}>16+</div>
              <p>Years of Experience</p>
            </li>
          </ul>
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
