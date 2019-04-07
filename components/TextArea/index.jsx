import React from "react";
import cns from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.less";

export function TextArea({ className, onChange, value, fluid, ...restProps }) {
	return (
		<textarea
			className={cns(styles.textarea, className, { [styles.fluid]: fluid })}
			value={value}
			onChange={onChange}
			{...restProps}
		/>
	);
}

TextArea.propTypes = {
	fluid: PropTypes.bool,
	className: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string
};
