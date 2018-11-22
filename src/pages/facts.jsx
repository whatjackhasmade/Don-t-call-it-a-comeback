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
				<h2>Jack Facts</h2>
				<ul>
					<li>I can solve a rubiks cube in under 2 minutes</li>
					<li>I love to ride my bicycle</li>
					<li>I want to have six dogs</li>
					<li>I want to own a farm</li>
				</ul>
			</Banner>
		</div>
	</Layout>
);
