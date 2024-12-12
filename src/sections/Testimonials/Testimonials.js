import styles from "./Testimonials.module.css";

import clientAvatar1 from "../../assets/images/client-avatar1.png";
import clientAvatar2 from "../../assets/images/client-avatar2.png";
import clientAvatar3 from "../../assets/images/client-avatar3.png";

import InnerContainer from "../../components/InnerContainer/InnerContainer";
import CommonContent from "../../components/CommonContent/CommonContent";
import IntroText from "../../components/IntroText/IntroText";
import Slider from "../../components/Slider/Slider";
import TestimonialsList from "../../components/TestimonialsList/TestimonialsList";

const testimonials = [
    {
        title: "Exceptional Service!",
        description:
            "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        client: {
            avatar: clientAvatar1,
            name: "Wade Warren",
            location: "USA, California",
        },
    },
    {
        title: "Efficient and Reliable",
        description:
            "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
        client: {
            avatar: clientAvatar2,
            name: "Emelie Thomson",
            location: "USA, Florida",
        },
    },
    {
        title: "Trusted Advisors",
        description:
            "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
        client: {
            avatar: clientAvatar3,
            name: "John Mans",
            location: "USA, Nevada",
        },
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-container">
            <InnerContainer className={styles.innerContainer}>
                <CommonContent>
                    <IntroText
                        heading="What Our Clients Say"
                        maxTextWidth="60rem"
                        buttonTitle="View All Testimonials"
                        buttonHref="#"
                    >
                        Read the success stories and heartfelt testimonials from
                        our valued clients. Discover why they chose Estatein for
                        their real estate needs.
                    </IntroText>

                    <Slider length={3}>
                        <TestimonialsList testimonials={testimonials} />
                    </Slider>
                </CommonContent>
            </InnerContainer>
        </section>
    );
}
