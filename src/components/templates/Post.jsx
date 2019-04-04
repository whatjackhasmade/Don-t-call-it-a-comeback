import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { device } from "../particles/MediaQueries";

import Base from "./Base";

import Hero from "../organisms/hero/Hero";

const ArticleIntro = styled.header`
	max-width: 800px;
	margin: 64px auto;
`;

const Article = styled.article`
	/* Advanced vertical rhythym based off of https://medium.com/@sebastian.eberlein/advanced-vertical-margins-4ac69f032f79 */
	max-width: 800px;
	margin: 64px auto;
	line-height: 1.5;

	figure {
		margin-left: 0;
		margin-right: 0;

		img {
			margin-bottom: 8px;

			box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.05);
		}

		@media ${device.lg} {
			margin-left: -64px;
			margin-right: -64px;
		}
	}

	figcaption {
		padding: 8px;

		background-color: ${props => props.theme.grey100};
		text-align: center;

		&:before {
			content: "⬆ Figure of ";
		}
	}

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

	img,
	picture {
		display: block;
		margin: 48px 0;

		> img {
			margin: 0;
		}
	}

	img {
		height: auto !important;
		width: auto !important;
	}

	pre {
		margin: 32px auto !important;
	}
`;

export default class PostTemplate extends React.Component {
	render() {
		const { content, title } = this.props.pageContext;

		return (
			<Base>
				<ArticleIntro>
					<Link to="/posts">Insights</Link>
					<h1>{title}</h1>
				</ArticleIntro>
				<Article dangerouslySetInnerHTML={{ __html: content }} />
			</Base>
		);
	}
}
