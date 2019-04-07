import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

const socials = {
	instagram: process.env.INSTAGRAM,
	youtube: process.env.YOUTUBE,
	vk: process.env.VK
};

class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const { html, head, errorHtml, chunks } = renderPage();

		const styles = flush();

		return {
			html,
			head,
			errorHtml,
			chunks,
			styles
		};
	}

	render() {
		const script = `
			window.ENV = "${process.env.NODE_ENV}";
			window.PORT = ${process.env.PORT};
			window.SOCIALS = ${JSON.stringify(socials)}
		`;
		return (
			<html>
				<Head>
					<script dangerouslySetInnerHTML={{ __html: script }} />
					<link rel="stylesheet" href="/static/normalize.css" />
					<link rel="stylesheet" href="/static/animate.css" />
					<link
						rel="stylesheet"
						type="text/css"
						charSet="UTF-8"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
					/>

					<link
						rel="stylesheet"
						type="text/css"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Roboto:400,700"
						rel="stylesheet"
					/>
					<meta name="theme-color" content="#ffffff" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<body>
					<Main />
					<NextScript />
					<script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll/dist/smooth-scroll.polyfills.min.js" />
					<script
						dangerouslySetInnerHTML={{
							__html: `new SmoothScroll('a[href*="#"]', {
								speed: 500
							});`
						}}
					/>
				</body>
			</html>
		);
	}
}

export default MyDocument;
