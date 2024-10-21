import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <img src="" alt="logo" className={styles.logo} />
      <ul className={styles.links}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Properties</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
      </ul>

      <a href="#" role="button" type="button" className={styles.button}>
        Contact Us
      </a>
    </header>
  );
}
