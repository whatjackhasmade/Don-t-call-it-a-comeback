import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Hero from "../components/organisms/Hero";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import styled from "styled-components";
import Image from "react-image-webp";

import Button from "../components/atoms/button";

import Blogs from "../components/organisms/Blogs";
import CaseStudies from "../components/organisms/CaseStudies";
import Codepens from "../components/organisms/Codepens";
import Events from "../components/organisms/Events";
import Services from "../components/organisms/Services";

import aboutPhoto from "../assets/images/jack-pritchard.jpg";

var today = new Date();
var curHr = today.getHours();
var greeting;

if (curHr < 12) {
	greeting = "Morning";
} else if (curHr < 18) {
	greeting = "Afternoon";
} else {
	greeting = "Evening";
}

const CVAbout = styled.section`
	margin: 64px auto;
	max-width: 1300px;
	position: relative;
	width: 90%;

	> div {
		display: flex;
		flex-direction: column;

		@media screen and (min-width: 576px) {
			flex-direction: row;
		}
	}

	img {
		height: 500px;
		margin-right: 64px;
		width: 400px;

		object-fit: cover;
		object-position: left center;
	}

	li {
		font-size: 2rem;
	}

	ul {
		padding: 0;

		list-style: none;
	}

	@media screen and (min-width: 576px) {
		margin: 128px auto;
	}
`;

const Wrapper = styled.section`
	min-height: 100vh;
	padding-bottom: 128px;

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
			<Hero />
		</div>
		<div className="cv-container">
			<Wrapper>
				<CVAbout>
					<div>
						<img src={aboutPhoto} alt="" />
						<div>
							<h2>New CV, Who dis?</h2>
							<p>
								Good {greeting}, I'm Jack Pritchard, a passionate front-end
								website developer.
							</p>
							<p>
								I want to improve how businesses present themselves in the form
								of brand development and design.
							</p>
							<p>
								Born and raise in Swansea, I came to the South of England to
								complete studies in Website Design and Development where I
								graduated with a 1:1 on my undergraduate course.
							</p>
							<p>
								I’ve now continued my studies with a focus on growing my
								business, by continuning my studies on a post-graduate MA
								Creative Enterprise course.
							</p>
							<p>
								My primary focus is website development, specifically front-end
								web technologies and implementing the latest frameworks to
								create bespoke solutions to solve business problems.
							</p>
							<p>
								I have experience in HTML, CSS, SCSS, JavaScript, jQuery, React,
								PHP, WordPress, Gatsby. Although I have experience creating
								bespoke backend systems, my true passion lies in the front-end
								development of websites. Turning designs into functional pages
								that represent brands or enable users to make use of web
								applications.
							</p>
							<h2>Developer Languages</h2>
							<ul>
								<li>
									<span className="emoji">🔨</span> HTML
								</li>
								<li>
									<span className="emoji">👓</span> SCSS/CSS
								</li>
								<li>
									<span className="emoji">💻</span> JavaScript
								</li>
								<li>
									<span className="emoji">⚛</span> React
								</li>
								<li>
									<span className="emoji">🐘</span> PHP
								</li>
								<li>
									<span className="emoji">🗃</span> MYSQL
								</li>
							</ul>
							<h2>Qualifications</h2>
							<ul>
								<li>✅ Grade C+ - English and Mathematics GCSE</li>
								<li>✅ D*D*D* - BTEC Extended Diploma Level 3 in ICT</li>
								<li>✅ 1:1 - BSc Website Design and Development</li>
								<li>🎯 1:1 - MA Creative Enterprise </li>
								{/* <li>🎯 1:1 - PhD Applied Computing </li> */}
							</ul>
						</div>
					</div>
				</CVAbout>

				<Services title="My Skills and Services" />

				<Events />

				<CaseStudies queryData={data.allNoFaceCase.edges} />

				<Blogs queryData={data.allNoFaceInsight.edges} />

				<Codepens queryData={data.allCodepen.edges} />
			</Wrapper>
		</div>
	</Layout>
);

export const query = graphql`
	query {
		allNoFaceInsight {
			edges {
				node {
					excerpt
					image
					link
					title
				}
			}
		}
		allNoFaceCase {
			edges {
				node {
					excerpt
					image
					link
					title
				}
			}
		}
		allCodepen {
			edges {
				node {
					id
					link
					loves
					title
					views
				}
			}
		}
	}
`;
