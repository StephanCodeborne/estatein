import styles from "./Slider.module.css";
import { useState } from "react";

import { ReactComponent as Arrow } from "../../assets/icons/arrow-right.svg";
import Button from "../Button/Button";

export default function Slider({ children }) {
    const [currentSlide, setCurrentSlide] = useState(1);

    function handlePrev() {
        setCurrentSlide((curr) => curr - 1);
    }

    function handleNext() {
        setCurrentSlide((curr) => curr + 1);
    }

    return (
        <div className={styles.slider}>
            <div
                style={{
                    transition: "transform 0.45s ease-in-out",
                    transform: `translateX(calc(-${(currentSlide - 1) * 100}% - (${currentSlide} - 1) * 1.875rem )`,
                }}
            >
                {children}
            </div>

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
