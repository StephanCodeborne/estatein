import styles from "./Properties.module.css";

import bed from "../../assets/icons/bed.svg";
import bathroom from "../../assets/icons/bathroom.svg";
import villa from "../../assets/icons/villa.svg";

import Button from "../../../components/Button/Button";

export default function Properties({ properties }) {
    return (
        <ul className={styles.properties}>
            {properties.map((property, index) => (
                <Property
                    key={index}
                    image={property.image}
                    title={property.title}
                    href={property.href}
                    description={property.description}
                    info={property.info}
                    price={property.price}
                />
            ))}
        </ul>
    );
}

function Property({ image, title, description, info, price, href }) {
    return (
        <li className={styles.card}>
            <img src={image} alt="property image" className={styles.image} />

            <div className={styles.text}>
                <h3>{title}</h3>
                <p>
                    {description}... <a href="#">Read More</a>
                </p>
            </div>

            <div className={styles.info}>
                <span>
                    <img src={bed} alt="bed" />
                    {info.bedroom}-Bedroom
                </span>
                <span>
                    <img src={bathroom} alt="bathroom" />
                    {info.bathroom}-Bathroom
                </span>
                <span>
                    <img src={villa} alt="villa" />
                    {info.propertyType}
                </span>
            </div>

            <div className={styles.footer}>
                <div className={styles.price}>
                    <p className={styles.caption}>Price</p>
                    <h3>{price}</h3>
                </div>
                <Button href={href} variant="cta">
                    View Property Details
                </Button>
            </div>
        </li>
    );
}
