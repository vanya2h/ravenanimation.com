import React from "react";
import PropTypes from "prop-types";
import cns from "classnames";
import SliderComponent from "react-slick";
import LeftArrow from "react-feather/dist/icons/arrow-left";
import RightArrow from "react-feather/dist/icons/arrow-right";
import styles from "./styles";

function NextArrow(props) {
	const { onClick } = props;
	return (
		<div className={cns(styles.arrow, styles.right)} onClick={onClick}>
			<RightArrow size={20} />
		</div>
	);
}

NextArrow.propTypes = {
	onClick: PropTypes.func.isRequired
};

function PrevArrow(props) {
	const { onClick } = props;
	return (
		<div className={cns(styles.arrow, styles.left)} onClick={onClick}>
			<LeftArrow size={20} />
		</div>
	);
}

PrevArrow.propTypes = {
	onClick: PropTypes.func.isRequired
};

export function Slider({ children, ...restProps }) {
	return (
		<div className={styles.sliderWrapper}>
			<SliderComponent
				dots
				infinite={false}
				slidesToShow={4}
				slidesToScroll={4}
				nextArrow={<NextArrow />}
				prevArrow={<PrevArrow />}
				{...restProps}
			>
				{children}
			</SliderComponent>
		</div>
	);
}

Slider.propTypes = {
	children: PropTypes.any.isRequired
};
