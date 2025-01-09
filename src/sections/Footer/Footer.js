import styles from "./Footer.module.css";

import send from "../../assets/icons/send.svg";
import logo from "../../assets/images/logo.svg";

import InnerContainer from "../../components/InnerContainer/InnerContainer";

export default function Footer() {
    return (
        <footer className="section-container">
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

                <div className={styles.linksContainer}>
                    <div className={styles.links}>
                        <h4>Home</h4>
                        <ul className={styles.links}>
                            <li>
                                <a href="#">Hero Section</a>
                            </li>
                            <li>
                                <a href="#">Features</a>
                            </li>
                            <li>
                                <a href="#">Properties</a>
                            </li>
                            <li>
                                <a href="#">Testimonials</a>
                            </li>
                            <li>
                                <a href="#">FAQ’s</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.links}>
                        <h4>Home</h4>
                        <ul className={styles.links}>
                            <li>
                                <a href="#">Hero Section</a>
                            </li>
                            <li>
                                <a href="#">Features</a>
                            </li>
                            <li>
                                <a href="#">Properties</a>
                            </li>
                            <li>
                                <a href="#">Testimonials</a>
                            </li>
                            <li>
                                <a href="#">FAQ’s</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.links}>
                        <h4>Home</h4>
                        <ul className={styles.links}>
                            <li>
                                <a href="#">Hero Section</a>
                            </li>
                            <li>
                                <a href="#">Features</a>
                            </li>
                            <li>
                                <a href="#">Properties</a>
                            </li>
                            <li>
                                <a href="#">Testimonials</a>
                            </li>
                            <li>
                                <a href="#">FAQ’s</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.links}>
                        <h4>Home</h4>
                        <ul className={styles.links}>
                            <li>
                                <a href="#">Hero Section</a>
                            </li>
                            <li>
                                <a href="#">Features</a>
                            </li>
                            <li>
                                <a href="#">Properties</a>
                            </li>
                            <li>
                                <a href="#">Testimonials</a>
                            </li>
                            <li>
                                <a href="#">FAQ’s</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.links}>
                        <h4>Home</h4>
                        <ul className={styles.links}>
                            <li>
                                <a href="#">Hero Section</a>
                            </li>
                            <li>
                                <a href="#">Features</a>
                            </li>
                            <li>
                                <a href="#">Properties</a>
                            </li>
                            <li>
                                <a href="#">Testimonials</a>
                            </li>
                            <li>
                                <a href="#">FAQ’s</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </InnerContainer>
        </footer>
    );
}
