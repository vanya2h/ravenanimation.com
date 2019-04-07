import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

export class Page extends React.PureComponent {
	render = () => {
		const { children } = this.props;

		return <div className={styles.page}>{children}</div>;
	};
}

Page.propTypes = {
	children: PropTypes.any
};
