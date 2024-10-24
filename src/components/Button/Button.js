import styles from "./Button.module.css";

export default function Button({
  onCLick,
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
      onClick={onCLick}
      role={role}
      className={`${styles.button} ${styles[style]} ${className}`}
      {...(tag === "a" ? { href } : { type })}
    >
      {children}
    </Tag>
  );
}
