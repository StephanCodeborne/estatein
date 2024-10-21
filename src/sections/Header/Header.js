import styles from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import SectionContent from "../../components/SectionContent/SectionContent";

export default function Header() {
  return (
    <header className="section-container">
      <SectionContent>
        <a href="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </a>

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
      </SectionContent>
    </header>
  );
}
