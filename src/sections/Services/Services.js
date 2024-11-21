import styles from "./Services.module.css";
import service1 from "../../assets/icons/service-1.svg";
import service2 from "../../assets/icons/service-2.svg";
import service3 from "../../assets/icons/service-3.svg";
import service4 from "../../assets/icons/service-4.svg";

export default function Services() {
    return (
        <section id="services" className={styles.container}>
            <ul className={styles.services}>
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

                        {/*<img src={arrow} alt="arrow" className={styles.arrow} />*/}
                        <div className={styles.arrow}>
                            <Arrow />
                        </div>
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

                        {/*<img src={arrow} alt="arrow" className={styles.arrow} />*/}
                        <div className={styles.arrow}>
                            <Arrow />
                        </div>
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

                        {/*<img src={arrow} alt="arrow" className={styles.arrow} />*/}
                        <div className={styles.arrow}>
                            <Arrow />
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    );
}
