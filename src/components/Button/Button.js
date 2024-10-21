import styles from "./Button.module.css";

export default function Button({
  tag = "a",
  href = "#",
  role = "button",
  type = "button",
  className,
  children,
}) {
  return tag === "a" ? (
    <a href={href} role={role} className={`${styles.button} ${className}`}>
      {children}
    </a>
  ) : tag === "button" ? (
    <button type={type} role={role} className={`${styles.button} ${className}`}>
      {children}
    </button>
  ) : null;
}
