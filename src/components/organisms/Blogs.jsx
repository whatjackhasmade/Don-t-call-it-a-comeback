import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { decodeHTML } from "../helpers";

import BlogTease from "../molecules/BlogTease";

const BlogContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin: 64px auto 0;
	max-width: 1300px;
	width: 90%;

	.blog--single {
	}
`;

class Blogs extends Component {
	render() {
		return (
			<BlogContainer>
				<h2>My Insights and Thoughts</h2>
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
