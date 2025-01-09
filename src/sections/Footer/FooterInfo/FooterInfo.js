import styles from "./FooterInfo.module.css";
import { ReactComponent as FacebookIcon } from "../../../assets/icons/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/icons/linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/icons/twitter.svg";
import { ReactComponent as YoutubeIcon } from "../../../assets/icons/youtube.svg";
import InnerContainer from "../../../components/InnerContainer/InnerContainer";

export default function FooterInfo() {
    return (
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
    );
}
