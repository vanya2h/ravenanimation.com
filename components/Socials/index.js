import React from "react";
import styles from "./styles";

const socialIconMapping = {
	["youtube"]: require("./assets/youtube.svg"),
	["instagram"]: require("./assets/instagram.svg"),
	["vk"]: require("./assets/vk.svg")
};

export const Socials = () => (
	<div className={styles.root}>
		<a
			target="_blank"
			rel="noopener noreferrer"
			href="https://www.instagram.com/ravenanimationstudio"
		>
			<div className={styles.social}>
				<img src={socialIconMapping.instagram} className={styles.icon} />
			</div>
		</a>
		<a
			target="_blank"
			rel="noopener noreferrer"
			href="https://www.youtube.com/channel/UC1soEya6corFbE0eQjssqBQ"
		>
			<div className={styles.social}>
				<img src={socialIconMapping.youtube} className={styles.icon} />
			</div>
		</a>
		<a
			target="_blank"
			rel="noopener noreferrer"
			href="https://vk.com/ravenanimationstudio"
		>
			<div className={styles.social}>
				<img src={socialIconMapping.vk} className={styles.icon} />
			</div>
		</a>
	</div>
);
