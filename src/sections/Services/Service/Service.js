import styles from "../Service.module.css";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow-top-right.svg";

export default function Service({ icon, children, href }) {
    return (
        <li className={styles.service}>
            <a href={href}>
                <div className={styles.text}>
                    <img
                        src={icon}
                        alt="service icon"
                        className={styles.icon}
                    />
                    <h4>{children}</h4>
                </div>

                <div className={styles.arrow}>
                    <Arrow />
                </div>
            </a>
        </li>
    );
}
