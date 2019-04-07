import React from "react";
import PropTypes from "prop-types";
import cns from "classnames";
import styles from "./styles.less";

export const Alert = props => {
	return (
		<div
			className={cns(
				styles.alert,
				{ [styles.error]: props.error },
				{ [styles.success]: props.success }
			)}
		>
			{props.title && <h3 className={styles.title}>{props.title}</h3>}
			{props.children && <p className={styles.paragraph}>{props.children}</p>}
		</div>
	);
};

Alert.propTypes = {
	error: PropTypes.bool,
	success: PropTypes.bool,
	children: PropTypes.any.isRequired,
	title: PropTypes.string
};
