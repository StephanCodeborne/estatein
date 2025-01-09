import styles from "./Footer.module.css";

import send from "../../assets/icons/send.svg";
import logo from "../../assets/images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/icons/youtube.svg";

import InnerContainer from "../../components/InnerContainer/InnerContainer";
import FooterLinks from "./FooterLinks/FooterLinks";

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

            <div className={styles.footerInfo}>
                <InnerContainer className={styles.infoContainer}>
                    <div className={styles.text}>
                        <span>@2023 Estatein. All Rights Reserved.</span>
                        <a href="#">Terms & Conditions</a>
                    </div>

                    <div className={styles.media}>
                        <a href="#">
                            <FacebookIcon alt="Facebook" />
                        </a>
                        <a href="#">
                            <LinkedinIcon alt="Linkedin" />
                        </a>
                        <a href="#">
                            <TwitterIcon alt="Twitter" />
                        </a>
                        <a href="#">
                            <YoutubeIcon alt="Youtube" />
                        </a>
                    </div>
                </InnerContainer>
            </div>
        </footer>
    );
}
