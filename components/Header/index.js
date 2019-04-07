import React from "react";
import PropTypes from "prop-types";
import { Container } from "@components/Container";
import styles from "./styles";

export class Header extends React.PureComponent {
	render = () => {
		return (
			<Container className={styles.container}>
				<div className={styles.header}>
					<ul className={styles.menu}>
						<a href="#hello" data-scroll>
							<li>Главная</li>
						</a>
						<a href="#about" data-scroll>
							<li>О нас</li>
						</a>
						<a href="#works" data-scroll>
							<li>Портфолио</li>
						</a>
						<a href="#contact" data-scroll className={styles.primary}>
							<li>Связаться</li>
						</a>
					</ul>
				</div>
			</Container>
		);
	};
}

Header.propTypes = {
	children: PropTypes.any
};
