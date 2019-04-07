import React from "react";
import styles from "./styles.less";

export class LogoVideo extends React.PureComponent {
	render = () => {
		return (
			<div className={styles.logoVideo}>
				<video muted autoPlay className={styles.video}>
					<source
						src={require("./assets/video.mp4")}
						type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
					/>
				</video>
			</div>
		);
	};
}
