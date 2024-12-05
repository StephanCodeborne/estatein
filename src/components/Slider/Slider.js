import styles from "./Slider.module.css";

import { ReactComponent as Arrow } from "../../assets/icons/arrow-right.svg";
import Button from "../Button/Button";

export default function Slider({ children }) {
    function handlePrev() {
        return null;
    }

    function handleNext() {
        return null;
    }

    return (
        <div className={styles.slider}>
            <div>{children}</div>

            <div className={styles.tools}>
                <div className={styles.slideNumber}>
                    <span className={styles.currentSlide}>01</span> of 10
                </div>
                <div className={styles.arrows}>
                    <Button tag="button" onClick={handlePrev} disabled={true}>
                        <Arrow />
                    </Button>
                    <Button tag="button" onClick={handleNext}>
                        <Arrow />
                    </Button>
                </div>
            </div>
        </div>
    );
}
