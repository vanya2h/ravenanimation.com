import React from "react";
import styles from "./styles";

export class Logo extends React.PureComponent {
	render = () => {
		const { width } = this.props;

		return (
			<div className={styles.logo}>
				<img
					src={require("./img/logo.png")}
					className={styles.image}
					width={width}
				/>
			</div>
		);
	};
}

Logo.propTypes = {
	width: "64px"
};
