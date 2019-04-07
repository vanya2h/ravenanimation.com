import React from "react";
import cns from "classnames";
import PropTypes from "prop-types";
import styles from "./styles";

export class Container extends React.PureComponent {
	render = () => {
		const { children, className, ...restProps } = this.props;

		return (
			<div className={cns(styles.container, className)} {...restProps}>
				{children}
			</div>
		);
	};
}

Container.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
};

Container.defaultProps = {
	className: undefined,
	children: null
};
