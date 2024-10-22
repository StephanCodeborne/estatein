import styles from "./Button.module.css";

export default function Button({
  tag = "a",
  href = "#",
  role = "button",
  type = "button",
  className,
  style = "default",
  children,
}) {
  const Tag = tag;
  return (
    <Tag
      role={role}
      className={`${styles.button} ${styles[style]} ${className}`}
      {...(tag === "a" ? { href } : { type })}
    >
      {children}
    </Tag>
  );
}
