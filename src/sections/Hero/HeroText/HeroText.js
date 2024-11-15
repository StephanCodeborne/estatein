import styles from "./HeroText.module.css";
import widget from "../../../assets/images/widget.png";

export default function HeroText() {
    return (
        <div className={styles.text}>
            <h1>Discover Your Dream Property with Estatein</h1>
            <p>
                Your journey to finding the perfect property begins here.
                Explore our listings to find the home that matches your dreams.
            </p>
        </div>
    );
}
