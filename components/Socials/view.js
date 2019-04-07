import React from "react";
import PropTypes from "prop-types";
import ReactSVG from "react-svg";
import styles from "./styles";

const socialIconMapping = {
	["youtube"]: require("./assets/youtube.svg"),
	["instagram"]: require("./assets/instagram.svg"),
	["vk"]: require("./assets/vk.svg")
};

export const SocialsView = ({ socials }) =>
	socials ? (
		<div className={styles.root}>
			{Object.keys(socials).map(social => (
				<a href={social} key={social}>
					<div className={styles.social}>
						<ReactSVG
							src={socialIconMapping[social]}
							svgClassName={styles.icon}
						/>
					</div>
				</a>
			))}
		</div>
	) : null;

SocialsView.propTypes = {
	socials: PropTypes.object
};