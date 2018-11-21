import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

import styled, { ThemeProvider, injectGlobal } from "styled-components";

const theme = {
	primary: "#0000FF",
	secondary: "#0d1321",
	black: "#black",
	white: "#eae8ff",
	offWhite: "#eae8ff",
	bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

injectGlobal`
html {
	font-family: sans-serif;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}
body {
	margin: 0;
}
article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary {
	display: block;
}
audio,canvas,progress,video {
	display: inline-block;
}
audio:not([controls]) {
	display: none;
	height: 0;
}
progress {
	vertical-align: baseline;
}
template,[hidden] {
	display: none;
}
a {
	background-color: transparent;
	-webkit-text-decoration-skip: objects;
}
a:active,a:hover {
	outline-width: 0;
}
abbr[title] {
	border-bottom: none;
	text-decoration: underline;
	text-decoration: underline dotted;
}
b,strong {
	font-weight: inherit;
}
b,strong {
	font-weight: bolder;
}
dfn {
	font-style: italic;
}
h1 {
	font-size: 2em;
	margin: 0.67em 0;
}
mark {
	background-color: #ff0;
	color: #000;
}
small {
	font-size: 80%;
}
sub,sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}
sub {
	bottom: -0.25em;
}
sup {
	top: -0.5em;
}
img {
	border-style: none;
}
svg:not(:root) {
	overflow: hidden;
}
code,kbd,pre,samp {
	font-family: monospace, monospace;
	font-size: 1em;
}
figure {
	margin: 1em 40px;
}
hr {
	box-sizing: content-box;
	height: 0;
	overflow: visible;
}
button,input,select,textarea {
	font: inherit;
	margin: 0;
}
optgroup {
	font-weight: bold;
}
button,input {
	overflow: visible;
}
button,select {
	text-transform: none;
}
button,html [type="button"],[type="reset"],[type="submit"] {
	-webkit-appearance: button;
}
button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {
	border-style: none;
	padding: 0;
}
button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring {
	outline: 1px dotted ButtonText;
}
fieldset {
	border: 1px solid #c0c0c0;
	margin: 0 2px;
	padding: 0.35em 0.625em 0.75em;
}
legend {
	box-sizing: border-box;
	color: inherit;
	display: table;
	max-width: 100%;
	padding: 0;
	white-space: normal;
}
textarea {
	overflow: auto;
}
[type="checkbox"],[type="radio"] {
	box-sizing: border-box;
	padding: 0;
}
[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button {
	height: auto;
}
[type="search"] {
	-webkit-appearance: textfield;
	outline-offset: -2px;
}
[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration {
	-webkit-appearance: none;
}
::-webkit-input-placeholder {
	color: inherit;
	opacity: 0.54;
}
::-webkit-file-upload-button {
	-webkit-appearance: button;
	font: inherit;
}
@import url("https://fonts.googleapis.com/css?family=Montserrat:800");
html {
	font-size: 62.5%;
	--primary: #0000FF;
	--secondary: #0d1321;
	--black: black;
	--white: #eae8ff;
	--off-white: #eae8ff;
}
body {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 16px;
	font-size: 1.6rem;
	line-height: 1.5;
}
html {
	box-sizing: border-box;
}
*,*:before,*:after {
	box-sizing: inherit;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
::selection {
	background: ${props => props.theme.primary};
	background: var( --primary, ${props => props.theme.primary});
	color: var(--white);
}
a {
	display: inline-block;
	color: inherit;
	text-decoration: none;
}
h1 {
	font-family: "Montserrat", sans-serif;
	font-weight: 800;
}
h1,h2,h3,h4,h5,h6 {
	margin-bottom: 0;
	margin-top: 0;
	font-weight: 700;
	letter-spacing: 1px;
	text-transform: uppercase;
}
h1 + *,h2 + *,h3 + *,h4 + *,h5 + *,h6 + * {
	margin-top: 16px;
}
img {
	max-width: 100%;
}
button,.button {
	overflow: hidden;
	padding: 1em 2em;
	position: relative;
	appearance: none;
	background: #010040;
	border: none;
	border-radius: 100px;
	color: white;
	cursor: pointer;
	font-size: 1.2em;
	outline: none;
	--x: 0;
	--y: 0;
}
button span,.button span {
	pointer-events: none;
	position: relative;
}
button::before,.button::before {
	--size: 0;
	content: "";
	display: block;
	height: var(--size);
	position: absolute;
	left: var(--x);
	top: var(--y);
	width: var(--size);
	background: radial-gradient(circle closest-side,rgba(255, 255, 255, 0.2),transparent);
	transform: translate(-50%, -50%);
	transition: width 0.2s ease, height 0.2s ease;
}
button:hover::before,.button:hover::before {
	--size: 400px;
}
`;

const Page = styled.div``;

export default class MainLayout extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<Page theme={theme}>
				<Helmet>
					<meta name="description" content={config.siteDescription} />
				</Helmet>
				{children}
			</Page>
		);
	}
}
