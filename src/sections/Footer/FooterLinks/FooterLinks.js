import styles from "./FooterLinks.module.css";

export default function FooterLinks() {
    return (
        <div className={styles.linksContainer}>
            <div className={styles.links}>
                <h4>Home</h4>
                <ul className={styles.links}>
                    <li>
                        <a href="#hero">Hero Section</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#featured-properties">Properties</a>
                    </li>
                    <li>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li>
                        <a href="#FAQ">FAQ’s</a>
                    </li>
                </ul>
            </div>
            <div className={styles.links}>
                <h4>About Us</h4>
                <ul className={styles.links}>
                    <li>
                        <a href="#">Our Story</a>
                    </li>
                    <li>
                        <a href="#">Our Works</a>
                    </li>
                    <li>
                        <a href="#">How It Works</a>
                    </li>
                    <li>
                        <a href="#">Our Team</a>
                    </li>
                    <li>
                        <a href="#">Our Clients</a>
                    </li>
                </ul>
            </div>
            <div className={styles.links}>
                <h4>Properties</h4>
                <ul className={styles.links}>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Categories</a>
                    </li>
                </ul>
            </div>
            <div className={styles.links}>
                <h4>Services</h4>
                <ul className={styles.links}>
                    <li>
                        <a href="#">Valuation Mastery</a>
                    </li>
                    <li>
                        <a href="#">Strategic Marketing</a>
                    </li>
                    <li>
                        <a href="#">Negotiation Wizardry</a>
                    </li>
                    <li>
                        <a href="#">Closing Success</a>
                    </li>
                    <li>
                        <a href="#">Property Management</a>
                    </li>
                </ul>
            </div>
            <div className={styles.links}>
                <h4>Contact Us</h4>
                <ul className={styles.links}>
                    <li>
                        <a href="#">Contact Form</a>
                    </li>
                    <li>
                        <a href="#">Our Offices</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
