import React from "react";
import PropTypes from "prop-types";
import cns from "classnames";
import styles from "./styles";

export function Button(props) {
	const { children, design, className, icon, loading, ...restProps } = props;

	const isPrimary = design === "primary";

	return (
		<button
			className={cns(
				styles.button,
				className,
				{
					[styles.primary]: isPrimary
				},
				{ [styles.loading]: loading }
			)}
			{...restProps}
		>
			{icon && <span className={styles.icon}>{icon}</span>}
			{children}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.any.isRequired,
	design: PropTypes.oneOf(["primary"]),
	className: PropTypes.string,
	icon: PropTypes.any,
	loading: PropTypes.bool
};

Button.defaultProps = {
	loading: false,
	icon: null,
	className: null,
	design: null
};
