import React from "react";
import cns from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.less";

export function Field({ className, required, children, title }) {
	return (
		<div className={cns(styles.field, className)}>
			<h3>
				{title} {required && <span className={styles.required}>*</span>}
			</h3>
			<div className={styles.content}>{children}</div>
		</div>
	);
}

Field.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	required: PropTypes.bool,
	title: PropTypes.string.isRequired,
	isFieldRequired: PropTypes.bool
};
