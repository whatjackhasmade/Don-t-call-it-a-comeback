import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Blog = styled.div`
	width: 33%;

	h3 {
		margin-bottom: 0;
	}
`;

class BlogTease extends Component {
	render() {
		return (
			<Blog>
				<a href={this.props.link} target="_blank">
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
