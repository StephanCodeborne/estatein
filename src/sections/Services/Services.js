import styles from "./Services.module.css";
import service1 from "../../assets/icons/service-1.svg";
import service2 from "../../assets/icons/service-2.svg";
import service3 from "../../assets/icons/service-3.svg";
import service4 from "../../assets/icons/service-4.svg";
import Service from "./Service/Service";

export default function Services() {
    return (
        <section id="services" className={styles.container}>
            <ul className={styles.services}>
                <Service icon={service1} href="#">
                    Find Your Dream Home
                </Service>
                <Service icon={service2} href="#">
                    Unlock Property Value
                </Service>
                <Service icon={service3} href="#">
                    Effortless Property Management
                </Service>
                <Service icon={service4} href="#">
                    Smart Investments, Informed Decisions
                </Service>
            </ul>
        </section>
    );
}
