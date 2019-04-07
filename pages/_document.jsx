import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

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
		`;

		return (
			<html lang="ru">
				<Head>
					<link rel="stylesheet" href="/static/normalize.css" />
					<link rel="stylesheet" href="/static/animate.css" />
					<link
						rel="shortcut icon"
						href="/static/favicon.ico"
						type="image/x-icon"
					/>

					<link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
					<meta
						name="og:title"
						content="RavenAnimation.com - Анимационная студия"
					/>
					<meta
						name="og:description"
						content="Студия генерирующая анимационный контент. Работаем с 2D графикой, рисуем покадровую анимацию."
					/>
					<meta name="og:url" content="https://ravenanimation.com/" />
					<meta name="og:site_name" content="Raven Animation Studio" />
					<meta name="og:locale" content="ru_RU" />
					<meta
						name="og:video"
						content="https://www.youtube.com/watch?v=YiQVwfgV6_M"
					/>
					<meta name="og:type" content="website" />
					<meta
						property="og:image"
						content="https://s3.eu-central-1.amazonaws.com/ravenanimation.com/Yva.jpg"
					/>
					<meta property="og:image:width" content="1200" />
					<meta property="og:image:height" content="623" />
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
					{this.props.head}
				</Head>
				<body>
					<script dangerouslySetInnerHTML={{ __html: script }} />
					<script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll/dist/smooth-scroll.polyfills.min.js" />

					<Main />
					<NextScript />

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
