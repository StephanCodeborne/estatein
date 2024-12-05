import styles from "./Slider.module.css";
import { useState, useEffect, useRef } from "react";

import { ReactComponent as Arrow } from "../../assets/icons/arrow-right.svg";
import Button from "../Button/Button";

export default function Slider({ list, children }) {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [cardsPerSlide, setCardsPerSlide] = useState(1);
    const sliderRef = useRef();

    // Calculate the number of cards per slide
    useEffect(() => {
        function updateCardsPerSlide() {
            const transformDiv = sliderRef.current.firstElementChild; // div for transform translate
            const firstCard = transformDiv.firstElementChild?.firstElementChild; // Access the card in a list

            const sliderWidth = sliderRef.current.offsetWidth; // Width of slider
            const cardWidth = firstCard?.offsetWidth; // Width of the first card

            if (cardWidth) {
                setCardsPerSlide(Math.floor(sliderWidth / cardWidth)); // Calculate cards per slide}
            }
        }
        updateCardsPerSlide();
        window.addEventListener("resize", updateCardsPerSlide);
        return () => window.removeEventListener("resize", updateCardsPerSlide);
    }, []);

    const totalSlides = properties.length / cardsPerSlide;

    function handlePrev() {
        setCurrentSlide((curr) => curr - 1);
    }

    function handleNext() {
        setCurrentSlide((curr) => curr + 1);
    }

    return (
        <div ref={sliderRef} className={styles.slider}>
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
                    <span className={styles.currentSlide}>{currentSlide}</span>{" "}
                    of {totalSlides}
                </div>
                <div className={styles.arrows}>
                    <Button
                        tag="button"
                        onClick={handlePrev}
                        disabled={currentSlide === 1}
                    >
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
