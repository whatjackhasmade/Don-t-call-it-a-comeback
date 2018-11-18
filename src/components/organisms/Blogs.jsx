import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { decodeHTML } from "../helpers";

import BlogTease from "../molecules/BlogTease";

const BlogContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	padding: 64px 0px;

	background-color: #fafafa;

	.blog--single {
		margin-top: 0;
		padding: 16px;
		position: relative;
		width: 100%;

		@media (min-width: 480px) {
			width: 50%;
		}

		@media (min-width: 960px) {
			padding: 32px;
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
						link={node.node.link}
						title={decodeHTML(node.node.title)}
					/>
				))}
			</BlogContainer>
		);
	}
}

export default Blogs;
