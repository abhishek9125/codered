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
