import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import styled from "styled-components";

import {
	autoParagraph,
	decodeHTML,
	httpTohttps,
	removeDimensions,
	removeOrphans,
	slugTitle
} from "../components/helpers";

import Article from "../components/organisms/Article";
import Banner from "../components/organisms/Banner";
import Header from "../components/organisms/Header";

const Related = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin: 32px auto;
	max-width: 900px;

	h2 {
		width: 100%;
	}
`;

const Blog = styled.div`
	height: 260px;
	margin-top: 16px;
	overflow: hidden;
	position: relative;
	width: 33.33%;

	color: white;

	.content,
	.overlay,
	img {
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 3;
	}

	h3 {
		margin-bottom: 0;
		margin-top: 16px;
	}

	img {
		z-index: 1;

		object-fit: cover;
	}

	.content {
		padding: 16px;
		top: 100%;
		transition: 0.2s all ease;
	}

	.overlay {
		z-index: 2;

		&:before {
			content: "";
			display: block;
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: 100%;
			z-index: -1;

			background-color: rgba(0, 0, 0, 0);
			transition: 0.2s all ease;
		}
	}

	&:hover {
		.content {
			top: 0;
		}

		.overlay {
			&:before {
				background-color: rgba(0, 0, 0, 0.6);
			}
		}
	}
`;

export default class BlogPostTemplate extends React.Component {
	createMarkup() {
		let articleHTML = this.props.pageContext.content;
		articleHTML = httpTohttps(articleHTML);
		articleHTML = autoParagraph(articleHTML);
		articleHTML = removeDimensions(articleHTML);
		return { __html: articleHTML };
	}

	createRelated() {
		if (this.props.pageContext.related) {
			let htmlRelated;
			htmlRelated = this.props.pageContext.related.map((e, i) => (
				<Blog className="blog--single">
					<Link to={e.slug}>
						<div className="content">
							<h3>{slugTitle(e.slug)}</h3>
							<p>{removeOrphans(e.excerpt)}</p>
						</div>
						<div className="overlay" />
						<img src={e.image} />
					</Link>
				</Blog>
			));
			return htmlRelated;
		}
	}

	render() {
		return (
			<div>
				<Header />
				<Banner image={this.props.pageContext.imageFull}>
					<nav>
						<Link to="/">Homepage</Link> //
					</nav>
					<h1>{decodeHTML(this.props.pageContext.title)}</h1>
				</Banner>
				<Article markup={this.createMarkup()} />
				<Related>
					<h2>Related Blog Posts</h2>
					{this.createRelated()}
				</Related>
			</div>
		);
	}
}
