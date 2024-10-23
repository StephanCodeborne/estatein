import Button from "../../components/Button/Button";
import SectionContent from "../../components/SectionContent/SectionContent";
import styles from "./Hero.module.css";
import heroImage from "../../assets/images/hero-section-image.png";

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
          </div>

          <div className={styles.buttonsRow}>
            <Button>learn more</Button>
            <Button style="cta">browse properties</Button>
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

        <div className={styles.right}>
          <img className={styles.image} src={heroImage} alt="cool building" />
        </div>
      </SectionContent>
    </section>
  );
}