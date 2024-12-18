import styles from "./Question.module.css";
import Button from "../Button/Button";

export default function Question({ question, description, href }) {
    return (
        <li className={styles.question}>
            <h3>How do I search for properties on Estatein?</h3>
            <p>
                Learn how to use our user-friendly search tools to find
                properties that match your criteria.
            </p>
            <Button href={href}>Read More</Button>
        </li>
    );
}
