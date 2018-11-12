import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Hero from "../components/organisms/Hero";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import styled from "styled-components";
import Image from "react-image-webp";

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
		height: 200px;
		margin-bottom: 32px;
		margin-right: 64px;
		width: 400px;

		object-fit: cover;
		object-position: left center;

		@media screen and (min-width: 576px) {
			height: 500px;
			margin-bottom: 0;
		}
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
			<Wrapper>
				<CVAbout>
					<div>
						<img src={aboutPhoto} alt="" />
						<div className="sm-text">
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
								I’ve now returned to my studies with a focus on growing my
								business, continuning my studies on a post-graduate MA Creative
								Enterprise course.
							</p>
							<p> It's a fancy way of saying advanced business studies.</p>
							<p>
								My primary focus is website development, specifically front-end
								web technologies and implementing the latest frameworks to
								create bespoke solutions to solve business problems.
							</p>
							<p>
								I have experience in HTML, CSS, SCSS, JavaScript, jQuery, React,
								PHP, WordPress, Gatsby.
							</p>
							<p>Heck this site is built with most of those!</p>
							<p>
								Although I have experience creating bespoke backend systems, my
								true passion lies in the front-end development. Turning designs
								into functional pages that represent brands or enable users to
								make use of web applications.
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

							<h2>Work Experience</h2>
							<h3>Junior Web Designer - CloudTen</h3>
							<h4>April 2016 - June 2016</h4>
							<p>
								As the only website designer and developer of the team, I have
								been tasked with creating designs for clients and following a
								structured creative process when generating ideas and solutions.
								As well as the initial designs, I was also responsible for
								creating the website applications and interfaces that will be
								used as an end product, often utilising CMS technologies such as
								WordPress.
							</p>
							<h3>Web Developer - Moov2</h3>
							<h4>June 2016 - November 2017</h4>
							<p>
								During my studies at Solent University I undertook work
								placement at Moov2 for a ful year of placement. Working as a web
								designer and developer, I assisted with both the front end
								designs of websites and helped using web technologies, front end
								and back end languages such as PHP, HTML, CSS, Javascript and
								SCSS. I have learnt how to use Git, Bitbucket, Github as part of
								my source control training and know how to work in the context
								of a large team.
							</p>
							<h3>Freelance Fullstack Developer - NoFace</h3>
							<h4>September 2015 - Present</h4>
							<p>
								I have been working as a website designer, developer and founder
								of my business NoFace. NoFace have received some clients that
								have included projects covering Brand Design, Brand Development,
								Website Design, Website Development, Website Hosting, Website
								Backups, Website Optimisation, the list goes on! As part of a
								one-man business, I deal with client services, communications
								and website design/development.
							</p>

							<h2>Awards</h2>
							<h3>1st Place WorldSkills UK</h3>
							<h4>Website Design and Development - 2013</h4>
							<p>
								Amongst competitors from both south and north Wales, I placed
								1st in the first and final rounds of the 2013 WorldSkills UK
								competition and won the title of 1st place for website design
								and development in Wales. Read about it at the official
								WorldSkills website -
								<a href="https://goo.gl/QuTrRq" target="_blank">
									https://goo.gl/QuTrRq
								</a>
							</p>

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
