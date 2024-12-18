import styles from "./Questions.module.css";
import Question from "../../../components/Question/Question";

export default function Questions() {
    return (
        <ul className={styles.questions}>
            <Question
                question="How do I search for properties on Estatein?"
                description="Learn how to use our user-friendly search tools to find properties that match your criteria."
                href="#"
            />
            <Question
                question="What documents do I need to sell my property through Estatein?"
                description="Find out about the necessary documentation for listing your property with us."
                href="#"
            />
            <Question
                question="How can I contact an Estatein agent?"
                description="Discover the different ways you can get in touch with our experienced agents."
                href="#"
            />
            <Question
                question="How do I search for properties on Estatein?"
                description="Learn how to use our user-friendly search tools to find properties that match your criteria."
                href="#"
            />
            <Question
                question="What documents do I need to sell my property through Estatein?"
                description="Find out about the necessary documentation for listing your property with us."
                href="#"
            />
            <Question
                question="How can I contact an Estatein agent?"
                description="Discover the different ways you can get in touch with our experienced agents."
                href="#"
            />
            <Question
                question="How do I search for properties on Estatein?"
                description="Learn how to use our user-friendly search tools to find properties that match your criteria."
                href="#"
            />
            <Question
                question="What documents do I need to sell my property through Estatein?"
                description="Find out about the necessary documentation for listing your property with us."
                href="#"
            />
            <Question
                question="How can I contact an Estatein agent?"
                description="Discover the different ways you can get in touch with our experienced agents."
                href="#"
            />
        </ul>
    );
}
