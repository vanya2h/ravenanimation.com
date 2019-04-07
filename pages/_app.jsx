import React from "react";
import App, { Container as NextContainer } from "next/app";
import autosize from "autosize";
import styles from "./styles.less";

class MyApp extends App {
	componentDidMount() {
		const lax = require("lax.js");
		lax.setup();

		autosize(document.querySelector("textarea"));

		document.addEventListener(
			"scroll",
			() => {
				lax.update(window.scrollY);
			},
			false
		);

		lax.update(window.scrollY);
	}
	render() {
		const { Component, pageProps } = this.props;

		return (
			<NextContainer>
				<div className={styles.wrapper}>
					<div className={styles.inner}>
						<Component {...pageProps} />
					</div>
				</div>
			</NextContainer>
		);
	}
}

export default MyApp;
