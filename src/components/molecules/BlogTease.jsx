import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Blog = styled.div`
	height: 260px;
	overflow: hidden;
	position: relative;
	width: 100%;

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

class BlogTease extends Component {
	render() {
		return (
			<Blog className="blog--single">
				<a href={this.props.link} target="_blank">
					<div className="content">
						<h3>{this.props.title}</h3>
						<p>
							{this.props.excerpt}
							...
						</p>
					</div>
					<div className="overlay" />
					<img src={this.props.image} />
				</a>
			</Blog>
		);
	}
}

export default BlogTease;
