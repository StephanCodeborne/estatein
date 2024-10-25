import styles from "./PromoBanner.module.css";

export default function PromoBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.text}>
        <p>✨Discover Your Dream Property with Estatein</p>
        <a href="#">Learn More</a>
      </div>
    </div>
  );
}
