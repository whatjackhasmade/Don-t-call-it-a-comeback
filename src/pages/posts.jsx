import React from "react";
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
import casesPhoto from "../assets/images/banner/cases.jpg";
import magnifyPhoto from "../assets/images/banner/magnify.jpg";
import nofacePhoto from "../assets/images/banner/noface.jpg";

const Wrapper = styled.section`
	min-height: 100vh;

	background: #fff;
	color: black;

	h2,
	h3 {
		width: 100%;
	}
`;

export default ({ data }) => (
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
					With over 200 blog posts, in 14 different categories, it's safe to say
					I can get carried away with my posts. I am passionate about my
					industry and want to share and discuss topics from user interface
					design to photography! Feel free to browse through my thoughts and let
					me know what you think.
				</p>
			</Banner>
			<Wrapper>
				<LazyLoad height={1920}>
					<Blogs queryData={data.allWjhmPost.edges} internal={true} />
				</LazyLoad>
			</Wrapper>
		</div>
	</Layout>
);

export const query = graphql`
	query {
		allWjhmPost {
			edges {
				node {
					excerpt
					image
					title
					slug
				}
			}
		}
	}
`;
