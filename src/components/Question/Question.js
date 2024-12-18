import styles from "./Question.module.css";
import Button from "../Button/Button";

export default function Question({ question, description, href }) {
    return (
        <li className={styles.question}>
            <h3>{question}</h3>
            <p>{description}</p>
            <Button href={href}>Read More</Button>
        </li>
    );
}
