import styles from "./Footer.module.css";
import InnerContainer from "../../components/InnerContainer/InnerContainer";

export default function Footer() {
    return (
        <footer className="section-container">
            <InnerContainer className={styles.innerContainer}>
                <form className={styles.form}>
                    <img src="" alt="estatein logo" className={styles.logo} />

                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            className={styles.email}
                            name="email"
                            placeholder="Enter Your Email"
                        />
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
