import React from "react";
import Helmet from "react-helmet";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import config from "../../../data/SiteConfig";

import SEO from "../particles/SEO";

import Header from "../organisms/Header";

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
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		font-size: 1.6rem;
		line-height: 1.5;
	}

	main {
		flex: 1;
		margin: 0 auto;
		max-width: 1566px;
	}
`;

const theme = {
	/* BREAKPOINTS */
	xs: "576px",
	sm: "768px",
	md: "992px",
	lg: "1200px",
	xl: "1440px",
	/* COLOURS */
	white: "#ffffff",
	grey100: "#d9d9d9",
	grey200: "#bfbfbf",
	grey300: "#a6a6a6",
	grey400: "#8c8c8c",
	grey500: "#737373",
	grey600: "#595959",
	grey700: "#404040",
	grey800: "#262626",
	grey900: "#0d0d0d",
	black: "#141213",
	blackAbsolute: "#000",
	blue100: "#e5f1ff",
	blue200: "#b3d6ff",
	blue300: "#80bbff",
	blue400: "#4d9fff",
	blue500: "#1a85ff",
	blue600: "#006be6",
	blue700: "#0054b3",
	blue800: "#003c80",
	blue900: "#00244d",
	blue: "#1a85ff",
	green100: "#eeffe5",
	green200: "#cdffb3",
	green300: "#abff80",
	green400: "#89ff4d",
	green500: "#68ff1a",
	green600: "#4ee600",
	green700: "#3db300",
	green800: "#2b8000",
	green900: "#1a4d00",
	green: "#4ee600",
	greenRGB: "78,230,0",
	purple100: "#ede5ff",
	purple200: "#ede5ff",
	purple300: "#a480ff",
	purple400: "#7f4dff",
	purple500: "#5b1aff",
	purple600: "#4100e6",
	purple700: "#3300b3",
	purple800: "#240080",
	purple900: "#16004d",
	purple: "#5b1aff",
	purpleRGB: "91,26,255",
	red100: "#ffe5e5",
	red200: "#ffb3b3",
	red300: "#ff8080",
	red400: "#ff4d4d",
	red500: "#ff1a1a",
	red600: "#e60000",
	red700: "#b30000",
	red800: "#800000",
	red900: "#4d0000",
	red: "#ff1a1a",
	redRGB: "255,26,26",
	primary: "#1a85ff",
	primaryRGB: "26,133,255",
	secondary: "#ffae1a",
	grey: "#3A3A3A",
	lightgrey: "#E1E1E1",
	offWhite: "#EDEDED",
	maxWidth: "1000px",
	bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

export default class Base extends React.Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Helmet title={config.siteTitle} />
				<SEO />
				<GlobalStyle />
				<Header />
				{this.props.children}
			</ThemeProvider>
		);
	}
}
