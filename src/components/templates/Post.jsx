import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Base from "./Base";

import Hero from "../organisms/hero/Hero";

const Article = styled.article`
	/* Advanced vertical rhythym based off of https://medium.com/@sebastian.eberlein/advanced-vertical-margins-4ac69f032f79 */
	max-width: 1000px;
	margin: 64px 0;

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
`;

export default class PostTemplate extends React.Component {
	render() {
		const { content, title } = this.props.pageContext;

		return (
			<Base>
				<Hero>
					<Link to="/posts">Insights</Link>
					<h1>{title}</h1>
				</Hero>
				<Article dangerouslySetInnerHTML={{ __html: content }} />
			</Base>
		);
	}
}
