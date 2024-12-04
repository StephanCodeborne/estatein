import styles from "./CommonContent.module.css";
import oversectionIcon from "../../assets/icons/oversection-icon.svg";

export default function CommonContent({ className, children }) {
    return (
        <div>
            <img
                className={styles.icon}
                src={oversectionIcon}
                alt="abstract stars"
            />
            <div className=`${styles.content} ${className}`>{children}</div>
        </div>
    );
}
