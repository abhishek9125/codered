import React from 'react';
import Document, { Html, Main, Head, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {

	static async getInitialProps(ctx) {
		const { renderPage } = ctx;
		const sheet = new ServerStyleSheet();
		const initialProps = await Document.getInitialProps(ctx)
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();
		return { ...initialProps, ...page, styleTags };
	}

	render() {
		return (
			<Html lang="en" style={{ "height": "100%" }}>
				<Head>
					<title>CodeRed | Developer's Website</title>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@200;400;600;800&family=Poppins:wght@200;400;600;800&display=swap"
						rel="stylesheet"
					/>
					{this.props.styleTags}
				</Head>
				<body style={{ "height": "100%" }}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
