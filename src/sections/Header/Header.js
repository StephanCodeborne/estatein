import styles from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import SectionContent from "../../components/SectionContent/SectionContent";
import Button from "../../components/Button/Button";

export default function Header() {
  return (
    <header className="section-container">
      <SectionContent className={styles.content}>
        <a href="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </a>

        <ul className={styles.links}>
          <li>
            <Button>Home</Button>
          </li>
          <li>
            <Button>About Us</Button>
          </li>
          <li>
            <Button>Properties</Button>
          </li>
          <li>
            <Button>Services</Button>
          </li>
        </ul>

        <Button>contact us</Button>
      </SectionContent>
    </header>
  );
}
