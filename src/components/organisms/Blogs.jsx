import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { decodeHTML } from "../helpers";

import BlogTease from "../molecules/BlogTease";

const BlogContainer = styled.section`
	display: flex;
	flex-wrap: wrap;

	background-color: #fafafa;

	.blog--single {
		position: relative;
		width: 100%;

		@media (min-width: 480px) {
			width: 50%;
		}

		@media (min-width: 960px) {
			width: 33.3333%;
		}

		@media (min-width: 1440px) {
			width: 25%;
		}

		@media (min-width: 1920px) {
			width: 20%;
		}
	}
`;

class Blogs extends Component {
	render() {
		return (
			<BlogContainer>
				{this.props.queryData.map(node => (
					<BlogTease
						key={node.node.id}
						excerpt={decodeHTML(node.node.excerpt)}
						image={node.node.image}
						link={this.props.internal ? `/${node.node.slug}` : node.node.link}
						title={decodeHTML(node.node.title)}
					/>
				))}
			</BlogContainer>
		);
	}
}

export default Blogs;
