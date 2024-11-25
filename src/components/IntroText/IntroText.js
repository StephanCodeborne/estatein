import styles from "./IntroText.module.css";
import Button from "../Button/Button";

export default function IntroText({
    className,
    heading,
    buttonTitle,
    buttonHref,
    buttonVariant = "default",
    children,
    maxTextWidth = "auto",
}) {
    return (
        <div className={`${styles.container} ${className}`}>
            <div style={{ maxWidth: maxTextWidth }} className={styles.text}>
                <h2>{heading}</h2>
                <p>{children}</p>
            </div>

            <Button variant={buttonVariant} href={buttonHref}>
                {buttonTitle}
            </Button>
        </div>
    );
}
