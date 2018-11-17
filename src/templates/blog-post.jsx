import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import styled from "styled-components";

import {
	autoParagraph,
	decodeHTML,
	removeDimensions
} from "../components/helpers";

import Banner from "../components/organisms/Banner";

const Article = styled.article`
	padding: 32px 16px;
	> h2,
	> h3,
	> h4,
	> h5 {
		margin-bottom: 16px;
		font-weight: 700;
	}
	> * + * {
		margin-top: 16px;
	}
	> h2 + * {
		margin-top: 24px;
	}
	> figure + *,
	> img + * {
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
	> figure + figure,
	> img + img {
		margin-top: 32px;
	}
	> h2 + h3 {
		margin-top: 32px;
	}
	> h3 + h4 {
		margin-top: 32px;
	}
	> :not(figure):not(img):not(picture):not(.ignore) {
		margin-left: auto;
		margin-right: auto;
		max-width: 900px;
	}
	> .ignore,
	> figure,
	> img,
	> picture {
		display: block;
		margin: 32px auto;
		max-width: 1100px;
		width: 100%;
		text-align: center;
	}
	@media all and (min-width: 1400px) {
		 {
			padding: 64px 32px;
		}
	}
`;

export default class BlogPostTemplate extends React.Component {
	createMarkup() {
		let articleHTML = this.props.pageContext.content;
		articleHTML = autoParagraph(articleHTML);
		articleHTML = removeDimensions(articleHTML);
		return { __html: articleHTML };
	}

	render() {
		return (
			<div>
				<Banner image={this.props.pageContext.image}>
					<nav>
						<Link to="/">Homepage</Link> //
					</nav>
					<h1>{decodeHTML(this.props.pageContext.title)}</h1>
				</Banner>
				<Article dangerouslySetInnerHTML={this.createMarkup()} />
			</div>
		);
	}
}
