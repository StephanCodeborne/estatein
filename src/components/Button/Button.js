import styles from "./Button.module.css";

export default function Button({
    onClick,
    tag = "a",
    href = "#",
    role = "button",
    type = "button",
    className,
    variant = "default",
    disabled,
    children,
}) {
    const Tag = tag;
    return (
        <Tag
            onClick={onClick}
            role={role}
            className={`${styles.button} ${styles[variant]} ${className}`}
            {...(tag === "a" ? { href } : { type })}
            {...(tag === "button" && { disabled })}
        >
            {children}
        </Tag>
    );
}
