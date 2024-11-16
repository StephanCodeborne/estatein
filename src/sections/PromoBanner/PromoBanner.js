import styles from "./PromoBanner.module.css";
import abstractShape from "../../assets/images/abstract-shape-promo-banner.svg";
import cross from "../../assets/icons/cross.svg";
import { useState } from "react";

export default function PromoBanner() {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div
      className={styles.banner}
      style={{
        background: `url(${abstractShape}) center /cover no-repeat var(--grey-2)`,
      }}
    >
      <div className={styles.text}>
        <p>✨Discover Your Dream Property with Estatein</p>
        <a href="#">Learn More</a>
      </div>

      <button className={styles.closeBanner} onClick={() => setIsOpen(false)}>
        <img src={cross} alt="close" />
      </button>
    </div>
  ) : null;
}
