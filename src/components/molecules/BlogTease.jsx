import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Blog = styled.div`
	margin-top: 32px;
	width: 100%;

	@media screen and (min-width: 768px) {
		margin-right: 30px;
		width: 30%;
		width: calc(33% - 30px);
	}

	h3 {
		margin-bottom: 0;
		margin-top: 16px;
	}
`;

class BlogTease extends Component {
	render() {
		return (
			<Blog className="blog--single">
				<a href={this.props.link} target="_blank">
					<img src={this.props.image} />
					<h3>{this.props.title}</h3>
					<p>
						{this.props.excerpt}
						...
					</p>
				</a>
			</Blog>
		);
	}
}

export default BlogTease;
