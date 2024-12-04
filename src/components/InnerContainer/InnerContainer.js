import styles from "./InnerContainer.module.css";

export default function InnerContainer({ className, children }) {
    return <div className={`${styles.content} ${className}`}>{children}</div>;
}
