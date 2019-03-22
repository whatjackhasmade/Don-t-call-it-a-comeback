import React from "react";
import Helmet from "react-helmet";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "normalize.css/normalize.css";

import config from "../../../data/SiteConfig";

import SEO from "../particles/SEO";
import { ThemeDefault } from "../particles/ThemeDefault";

import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/static/fonts/SuisseIntl-Regular.eot'); /* IE9 Compat Modes */
		src: url('/static/fonts/SuisseIntl-Regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
			url('/static/fonts/SuisseIntl-Regular.woff2') format('woff2'), /* Super Modern Browsers */
			url('/static/fonts/SuisseIntl-Regular.woff') format('woff'), /* Pretty Modern Browsers */
			url('/static/fonts/SuisseIntl-Regular.ttf')  format('truetype'), /* Safari, Android, iOS */
			url('/static/fonts/SuisseIntl-Regular.svg#SuisseIntl-Regular') format('svg'); /* Legacy iOS */
		font-style: normal;
		font-weight: normal;
	}

	html {
		box-sizing: border-box;

		font-family: 'SuisseIntl', Arial, Helvetica, sans-serif;
		font-size: 62.5%;
		/* BETTER FONT SMOOTHING - https://gist.github.com/hsleonis/55712b0eafc9b25f1944 */
		font-variant-ligatures: none;
		-webkit-font-variant-ligatures: none;
		text-rendering: optimizeLegibility;
		-moz-osx-font-smoothing: grayscale;
		font-smoothing: antialiased;
		-webkit-font-smoothing: antialiased;
		text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	::-webkit-scrollbar
	{
		width: 10px;
		background-color: #f2f4f8;
	}

	::-webkit-scrollbar-thumb
	{
		background-color: #141213;
		border: 2px solid #262626;
	}

	body {
		font-size: 1.6rem;
		line-height: 1.5;
	}

	main {
		flex: 1;
		margin: 0 auto;
		max-width: 1566px;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
`;

export default class Base extends React.Component {
	render() {
		return (
			<ThemeProvider theme={ThemeDefault}>
				<React.Fragment>
					<GlobalStyle />
					<Helmet title={config.siteTitle} />
					<SEO />
					<div className="wrapper">
						<Header />
						<main>{this.props.children}</main>
						<Footer />
					</div>
				</React.Fragment>
			</ThemeProvider>
		);
	}
}

export { GlobalStyle };
