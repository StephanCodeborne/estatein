import styles from "./Footer.module.css";

import send from "../../assets/icons/send.svg";
import logo from "../../assets/images/logo.svg";

import InnerContainer from "../../components/InnerContainer/InnerContainer";
import FooterLinks from "./FooterLinks/FooterLinks";
import FooterInfo from "./FooterInfo/FooterInfo";

export default function Footer() {
    return (
        <footer className={`section-container ${styles.flexColumn}`}>
            <InnerContainer className={styles.innerContainer}>
                <form className={styles.form}>
                    <img
                        src={logo}
                        alt="estatein logo"
                        className={styles.logo}
                    />

                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            className={styles.email}
                            name="email"
                            placeholder="Enter Your Email"
                        />
                        <button className={styles.send} type="submit">
                            <img src={send} alt="send" />
                        </button>
                    </div>
                </form>

                <FooterLinks />
            </InnerContainer>
            <FooterInfo />
        </footer>
    );
}
