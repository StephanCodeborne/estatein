import styles from "./Properties.module.css";

export default function Properties({properties}) {
    return (
		<ul>
			{properties.map((property, index) => ())}
		</ul>
    );
}


