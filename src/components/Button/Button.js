import styles from "./Button.module.css";

export default function Button({
  onCLick,
  tag = "a",
  href = "#",
  role = "button",
  type = "button",
  className,
  variant = "default",
  children,
}) {
  const Tag = tag;
  return (
    <Tag
      onClick={onCLick}
      role={role}
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...(tag === "a" ? { href } : { type })}
    >
      {children}
    </Tag>
  );
}
