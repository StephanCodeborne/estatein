import styles from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import InnerContainer from "../../components/InnerContainer/InnerContainer";
import Button from "../../components/Button/Button";

export default function Header() {
    return (
        <header className="section-container">
            <InnerContainer className={styles.content}>
                <a href="/">
                    <img src={logo} alt="logo" className={styles.logo} />
                </a>

                <ul className={styles.links}>
                    <li>
                        <a className={styles.active} href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/">About Us</a>
                    </li>
                    <li>
                        <a href="/">Properties</a>
                    </li>
                    <li>
                        <a href="/">Services</a>
                    </li>
                </ul>

                <Button>contact us</Button>
            </InnerContainer>
        </header>
    );
}
