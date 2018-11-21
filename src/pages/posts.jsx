import React, { Component } from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Hero from "../components/organisms/Hero";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import Image from "react-image-webp";
import LazyLoad from "react-lazyload";
import styled from "styled-components";

import Banner from "../components/organisms/Banner";
import Blogs from "../components/organisms/Blogs";
import Header from "../components/organisms/Header";

import aboutPhoto from "../assets/images/jack-pritchard.jpg";

import { slugTitle } from "../components/helpers";

let Categories = [];

const Wrapper = styled.section`
	min-height: 100vh;

	background: #fff;
	color: black;

	h2,
	h3 {
		width: 100%;
	}
`;

const Filters = styled.section`
	display: flex;
	justify-content: space-between;

	button {
		overflow: hidden;
		padding: 16px;
		position: relative;
		width: 100%;

		appearance: none;
		background: black;
		border-radius: 0px;
		color: white;
		text-align: center;

		&:before {
			display: none;
		}
	}

	.active {
		background: grey;
	}
`;
class Posts extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const categoryData = this.props.data.allWjhmCategory;
		const postData = this.props.data.allWjhmPost;

		return (
			<Layout>
				<div className="index-container">
					<Helmet title={config.siteTitle} />
					<SEO />
					<div>
						<Header />
					</div>
					<Banner overlay image={aboutPhoto}>
						<h2>I get pretty creative in numerous ways!</h2>
						<p>
							With over 200 blog posts, in 14 different categories, it's safe to
							say I can get carried away with my posts. I am passionate about my
							industry and want to share and discuss topics from user interface
							design to photography! Feel free to browse through my thoughts and
							let me know what you think.
						</p>
					</Banner>
					<Wrapper>
						<Filters>
							<button className="active">All</button>
							{categoryData.edges.map(node => (
								<button key={node.node.id}>{slugTitle(node.node.slug)}</button>
							))}
						</Filters>

						<Blogs queryData={postData.edges} internal={true} />
					</Wrapper>
				</div>
			</Layout>
		);
	}
}
// export the class so you can call it elsewhere
export default Posts;

export const query = graphql`
	query {
		allWjhmPost {
			edges {
				node {
					category
					excerpt
					image
					title
					slug
				}
			}
		}

		allWjhmCategory {
			edges {
				node {
					slug
				}
			}
		}
	}
`;
