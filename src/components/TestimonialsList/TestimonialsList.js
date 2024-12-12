import styles from "./TestimonialsList.module.css";

export default function TestimonialsList({testimonials}) {
    return <ul className={styles.testimonials}>
	    {testimonials.map((testimonial, index) => ())}
    </ul>;
}
