import styles from "./Slider.module.css";
import Properties from "../Properties/Properties";
import Button from "../Button/Button";

export default function Slider({ onNext, onPrev, children }) {
    return (
        <div className={styles.slider}>
            {children}

            <div className={styles.tools}>
                <div className={styles.slideNumber}>
                    <span className={styles.currentSlide}>01</span> of 10
                </div>
                <div className={styles.arrows}>
                    <Button tag="button" onClick={onPrev} disabled={true}>
                        <Arrow />
                    </Button>
                    <Button tag="button" onClick={onNext}>
                        <Arrow />
                    </Button>
                </div>
            </div>
        </div>
    );
}
