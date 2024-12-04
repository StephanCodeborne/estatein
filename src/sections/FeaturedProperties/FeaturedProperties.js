import styles from "./FeaturedProperties.module.css";

import property1 from "../../assets/images/property-1.png";
import property2 from "../../assets/images/property-2.png";
import property3 from "../../assets/images/property-3.png";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-right.svg";

import InnerContainer from "../../components/InnerContainer/InnerContainer";
import CommonContent from "../../components/CommonContent/CommonContent";
import IntroText from "../../components/IntroText/IntroText";
import Properties from "../../components/Properties/Properties";

const properties = [
    {
        title: "Seaside Serenity Villa",
        description:
            "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood",
        image: property1,
        price: "$550,000",
        href: "#",
        info: {
            bedroom: 4,
            bathroom: 3,
            propertyType: "Villa",
        },
    },
    {
        title: "Metropolitan Haven",
        description:
            "A chic and fully-furnished 2-bedroom apartment with panoramic city views",
        image: property2,
        price: "$550,000",
        href: "#",
        info: {
            bedroom: 2,
            bathroom: 2,
            propertyType: "Villa",
        },
    },
    {
        title: "Rustic Retreat Cottage",
        description:
            "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community",
        image: property3,
        price: "$550,000",
        href: "#",
        info: {
            bedroom: 3,
            bathroom: 3,
            propertyType: "Villa",
        },
    },
];

export default function FeaturedProperties({}) {
    function handlePrev() {
        return null;
    }

    function handleNext() {
        return null;
    }

    return (
        <section id="featured-properties" className="section-container">
            <InnerContainer className={styles.innerContainer}>
                <CommonContent>
                    <IntroText
                        heading="Featured Properties"
                        maxTextWidth="75rem"
                        buttonTitle="View All Properties"
                        buttonHref="#"
                    >
                        Explore our handpicked selection of featured properties.
                        Each listing offers a glimpse into exceptional homes and
                        investments available through Estatein. Click "View
                        Details" for more information.
                    </IntroText>

                    <div className={styles.slider}>
                        <Properties properties={properties} />

                        <div className={styles.tools}>
                            <div className={styles.slideNumber}>
                                <span className={styles.currentSlide}>01</span>{" "}
                                of 10
                            </div>
                            <div className={styles.arrows}>
                                <Button
                                    tag="button"
                                    onClick={handlePrev}
                                    disabled={true}
                                >
                                    <Arrow />
                                </Button>
                                <Button tag="button" onClick={handleNext}>
                                    <Arrow />
                                </Button>
                            </div>
                        </div>
                    </div>
                </CommonContent>
            </InnerContainer>
        </section>
    );
}
