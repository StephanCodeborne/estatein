import styles from "./Achievements.module.css";

export default function Achievements({ data }) {
  return (
    <ul className={styles.achievements}>
      {data.map(({ amount, title }, idx) => (
        <li className={styles.card} key={idx}>
          <div className={styles.amount}>{amount}</div>
          <p>{title}</p>
        </li>
      ))}
    </ul>
  );
}
