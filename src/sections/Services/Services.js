import styles from "./Services.module.css";
import service1 from "../../assets/icons/service-1.svg";
import service2 from "../../assets/icons/service-2.svg";
import service3 from "../../assets/icons/service-3.svg";
import service4 from "../../assets/icons/service-4.svg";
import arrow from "../../assets/icons/arrow-top-right.svg";

export default function Services() {
    return (
        <ul id="services" className="section-container">
            <li className={styles.service}>
                <a href="#">
                    <div className={styles.text}>
                        <img
                            src={service1}
                            alt="service icon"
                            className={styles.icon}
                        />
                        <h4>Find Your Dream Home</h4>
                    </div>

                    <img src={arrow} alt="arrow" />
                </a>
            </li>

            <li className={styles.service}>
                <a href="#">
                    <div className={styles.text}>
                        <img
                            src={service2}
                            alt="service icon"
                            className={styles.icon}
                        />
                        <h4>Unlock Property Value</h4>
                    </div>

                    <img src={arrow} alt="arrow" />
                </a>
            </li>

            <li className={styles.service}>
                <a href="#">
                    <div className={styles.text}>
                        <img
                            src={service3}
                            alt="service icon"
                            className={styles.icon}
                        />
                        <h4>Effortless Property Management</h4>
                    </div>

                    <img src={arrow} alt="arrow" />
                </a>
            </li>

            <li className={styles.service}>
                <a href="#">
                    <div className={styles.text}>
                        <img
                            src={service4}
                            alt="service icon"
                            className={styles.icon}
                        />
                        <h4>Smart Investments, Informed Decisions</h4>
                    </div>

                    <img src={arrow} alt="arrow" />
                </a>
            </li>
        </ul>
    );
}
