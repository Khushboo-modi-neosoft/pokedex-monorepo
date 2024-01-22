import React from "react";
import * as styles from "./Header.styles"
import Link from "next/link";

const Header = () => {
	return (
		<div style={styles.headerWrapper}>
			<div style={styles.header}>
				<p style={styles.headerText}>Pokedex</p>
			</div>
			<div style={styles.linkWrapper}>
				<Link href={"/"} style={styles.link}>
					Pokemon List
				</Link>
			</div>
		</div>
	);
};
export default Header;
