import styles from "./CommonContent.module.css";
import oversectionIcon from "../../assets/icons/oversection-icon.svg";

export default function CommonContent({ className, children }) {
    return (
        <div className={`${styles.content} ${className}`}>
            <img
                className={styles.icon}
                src={oversectionIcon}
                alt="abstract stars"
            />
            {children}
        </div>
    );
}
