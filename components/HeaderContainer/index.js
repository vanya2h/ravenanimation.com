import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

export class HeaderContainer extends React.PureComponent {
	render = () => {
		const { children } = this.props;

		return <div className={styles.container}>{children}</div>;
	};
}

HeaderContainer.propTypes = {
	children: PropTypes.any
};
