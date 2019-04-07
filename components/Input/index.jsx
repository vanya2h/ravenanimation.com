import React from "react";
import cns from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.less";

export function Input({ className, onChange, value, fluid, ...restProps }) {
	return (
		<input
			type="text"
			className={cns(styles.input, className, { [styles.fluid]: fluid })}
			value={value}
			onChange={onChange}
			{...restProps}
		/>
	);
}

Input.propTypes = {
	fluid: PropTypes.bool,
	className: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string
};
