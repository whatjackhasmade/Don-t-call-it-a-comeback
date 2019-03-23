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

		@font-face {
		font-family: 'SuisseIntl';
		src: url('/static/fonts/SuisseIntl-Regular-Italic.eot'); /* IE9 Compat Modes */
		src: url('/static/fonts/SuisseIntl-Regular-Italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
			url('/static/fonts/SuisseIntl-Regular-Italic.woff2') format('woff2'), /* Super Modern Browsers */
			url('/static/fonts/SuisseIntl-Regular-Italic.woff') format('woff'), /* Pretty Modern Browsers */
			url('/static/fonts/SuisseIntl-Regular-Italic.ttf')  format('truetype'), /* Safari, Android, iOS */
			url('/static/fonts/SuisseIntl-Regular-Italic.svg#SuisseIntl-Regular-Italic') format('svg'); /* Legacy iOS */
		font-style: italic;
		font-weight: normal;
	}

	@font-face {
		font-family: 'SuisseIntl';
		src: url('/static/fonts/SuisseIntl-Medium.eot'); /* IE9 Compat Modes */
		src: url('/static/fonts/SuisseIntl-Medium.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
			url('/static/fonts/SuisseIntl-Medium.woff2') format('woff2'), /* Super Modern Browsers */
			url('/static/fonts/SuisseIntl-Medium.woff') format('woff'), /* Pretty Modern Browsers */
			url('/static/fonts/SuisseIntl-Medium.ttf')  format('truetype'), /* Safari, Android, iOS */
			url('/static/fonts/SuisseIntl-Medium.svg#SuisseIntl-Medium') format('svg'); /* Legacy iOS */
		font-style: normal;
		font-weight: 500;
	}

	@font-face {
		font-family: 'SuisseIntl';
		src: url('/static/fonts/SuisseIntl-Bold.eot'); /* IE9 Compat Modes */
		src: url('/static/fonts/SuisseIntl-Bold.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
			url('/static/fonts/SuisseIntl-Bold.woff2') format('woff2'), /* Super Modern Browsers */
			url('/static/fonts/SuisseIntl-Bold.woff') format('woff'), /* Pretty Modern Browsers */
			url('/static/fonts/SuisseIntl-Bold.ttf')  format('truetype'), /* Safari, Android, iOS */
			url('/static/fonts/SuisseIntl-Bold.svg#SuisseIntl-Bold') format('svg'); /* Legacy iOS */
		font-style: normal;
		font-weight: bold;
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
		background: #fff;
		font-size: 1.6rem;
		line-height: 1.5;
	}

	main {
		flex: 1;
		margin: 0 auto;
		max-width: 1506px;
		padding: 0 30px;
		width: 100%;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	/* Common base styles for the site */
	img, svg, video {
		max-width: 100%;
	}


	h1, h2, h3, h4, h5, h6 {
		line-height: 1.25;
		margin: 16px 0;

		font-weight: 700;
		text-transform: capitalize;
	}

	h1,
	.h1 {
		margin-bottom: 24px;
		margin-top: 24px;

		font-size: 72px;
		font-weight: 700;
	}

	h2,
	.h2 {
		font-size: 48px;
		font-weight: 700;
	}

	h3,
	.h3 {
		font-size: 30px;
	}

	h4,
	.h4 {
		font-size: 24px;
	}

	h5,
	.h5 {
		font-size: 20px;
	}

	h6,
	.h6 {
		font-size: 18px;
	}

	/* Advanced vertical rhythym based off of https://medium.com/@sebastian.eberlein/advanced-vertical-margins-4ac69f032f79 */
	article {
		> * + * {
			margin-top: 16px;
		}

		> h2 + * {
			margin-top: 24px;
		}

		> img + *,
		> figure + * {
			margin-top: 32px;
		}

		> * + h2 {
			margin-top: 64px;
		}

		> * + h3 {
			margin-top: 48px;
		}

		> * + img {
			margin-top: 32px;
		}

		> * + h4 {
			margin-top: 48px;
		}

		> img + img,
		> figure + figure {
			margin-top: 32px;
		}

		> h2 + h3 {
			margin-top: 32px;
		}

		> h3 + h4 {
			margin-top: 32px;
		}
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
