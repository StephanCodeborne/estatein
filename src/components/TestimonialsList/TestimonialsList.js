import styles from "./TestimonialsList.module.css";
import clientAvatar1 from "../../assets/images/client-avatar1.png";

export default function TestimonialsList({testimonials}) {
    return <ul className={styles.testimonials}>
	    {testimonials.map((testimonial, index) => ())}
    </ul>;
}


function TestimonialCard({ title, description, client }) {
	return (
		<li className={styles.card}>
			<div className={styles.stars}>
				<div className={styles.star}>
					<Star alt="full star"/>
				</div>
				<div className={styles.star}>
					<Star alt="full star"/>
				</div>
				<div className={styles.star}>
					<Star alt="full star"/>
				</div>
				<div className={styles.star}>
					<Star alt="full star"/>
				</div>
				<div className={styles.star}>
					<Star alt="full star"/>
				</div>
			</div>

			<div className={styles.text}>
				<h3 className={styles.title}>
					{title}
				</h3>
				<p className={styles.description}>
					{description}
				</p>
			</div>

			<div className={styles.client}>
				<img
					src={client.avatar}
					alt="avatar"
					className={styles.avatar}
				/>

				<div className={styles.info}>
					<h4 className={styles.name}>
						{client.name}
					</h4>
					<p className={styles.location}>
						{client.location}
					</p>
				</div>
			</div>
		</li>
	)
}
