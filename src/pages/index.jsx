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
import Codepens from "../components/organisms/Codepens";
import Events from "../components/organisms/Events";
import Header from "../components/organisms/Header";
import Services from "../components/organisms/Services";
import UXMotion from "../components/organisms/UXMotion";

import aboutPhoto from "../assets/images/jack-pritchard.jpg";
import casesPhoto from "../assets/images/banner/cases.jpg";
import magnifyPhoto from "../assets/images/banner/magnify.jpg";
import nofacePhoto from "../assets/images/banner/noface.jpg";

var today = new Date();
var curHr = today.getHours();
var curYr = today.getFullYear();
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
	max-width: 1600px;
	position: relative;
	width: 95%;

	@media screen and (min-width: 576px) {
		margin: 128px auto;
	}

	@media screen and (min-width: 992px) {
		.row {
			display: flex;
		}

		.col-left {
			width: 33.333%;
		}

		.col-right {
			width: 66.666%;

			p {
				max-width: 80ch;
			}
		}
	}

	img {
		height: 200px;
		margin-bottom: 32px;
		margin-right: 64px;
		width: 200px;

		border-radius: 50%;
		object-fit: cover;
		object-position: left center;

		@media screen and (min-width: 576px) {
			margin-bottom: 0;
		}

		@media screen and (min-width: 1400px) {
			height: 400px;
			width: 400px;
		}
	}

	li {
		font-size: 2rem;
	}

	ul {
		padding: 0;

		list-style: none;
	}

	.emoji {
		display: inline-block;
		margin: 4px auto;
		margin-right: 8px;
		width: 44px;

		font-size: 3rem;
		text-align: center;
	}

	.row {
		width: 100%;

		+ .row {
			margin-top: 32px;
			padding-top: 32px;

			border-top: 1px solid rgba(225, 225, 225, 1);
		}
	}
`;

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
			<Hero />
			<Services />
			<Wrapper>
				<CVAbout>
					<div>
						<div className="row">
							<div className="col-left">
								<img src={aboutPhoto} alt="" />
							</div>
							<div className="col-right">
								<h2>New CV, Who dis?</h2>
								<p>
									Good {greeting}, I'm Jack Pritchard, a passionate front-end
									website developer.
								</p>
								<p>
									I want to improve how businesses present themselves in the
									form of brand development and design.
								</p>
								<p>
									Born and raised in Swansea, I came to the South of England to
									complete studies in Website Design and Development where I
									graduated with a 1:1 on my undergraduate course.
								</p>
								<p>
									I’ve now returned to my studies with a focus on growing my
									business, continuning my studies on a post-graduate MA
									Creative Enterprise course.
								</p>
								<p>It's a fancy way of saying advanced business studies.</p>
								<p>
									My primary focus is website development, specifically
									front-end web technologies and implementing the latest
									frameworks to create bespoke solutions to solve business
									problems.
								</p>
								<p>
									I have experience in HTML, CSS, SCSS, JavaScript, jQuery,
									React, PHP, WordPress, Gatsby.
								</p>
								<p>Heck this site is built with most of those!</p>
								<p>
									Although I have experience creating bespoke backend systems,
									my true passion lies in the front-end development. Turning
									designs into functional pages that represent brands or enable
									users to make use of web applications.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-left">
								<h2>Qualifications</h2>
							</div>
							<div className="col-right">
								<ul>
									<li>✅ Grade C+ - English and Mathematics GCSE</li>
									<li>✅ D*D*D* - BTEC Extended Diploma Level 3 in ICT</li>
									<li>✅ 1:1 - BSc Website Design and Development</li>
									<li>🎯 1:1 - MA Creative Enterprise </li>
									{/* <li>🎯 1:1 - PhD Applied Computing </li> */}
								</ul>
							</div>
						</div>
						<div className="row">
							<div className="col-left">
								<h2>Developer Languages</h2>
							</div>
							<div className="col-right">
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
							</div>
						</div>
						<div className="row">
							<div className="col-left">
								<h2>Jack's Career</h2>
								<h3>{curYr - 2015} Years of Experience</h3>
							</div>
							<div className="col-right" />
						</div>
						<div className="row">
							<div className="col-left">
								<h3>Freelance Fullstack Developer</h3>
								<h4>NoFace</h4>
								<h4>September 2015 - Present</h4>
							</div>
							<div className="col-right">
								<p>
									I have been working as a website designer, developer and
									founder of my business NoFace.
								</p>
								<p>
									NoFace has received clients that have included working on
									projects covering Brand Design, Brand Development, Website
									Design, Website Development, Website Hosting, Website Backups,
									Website Optimisation, the list goes on!
								</p>
								<p>
									My website development stack focuses on cutting-edge
									technologies such as Node.JS servers for APIs, React JS,
									Gatsby for statically generating sites and creating
									high-performing web applications
								</p>
								<p>
									As part of a one-man business, I deal with client services,
									communications and website design/development.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-left">
								<h3>Web Developer</h3>
								<h4>Moov2</h4>
								<h4>June 2016 - November 2017</h4>
							</div>
							<div className="col-right">
								<p>
									During my studies at Solent University, I undertook a work
									placement at Moov2 for a full year of internship.
								</p>
								<p>
									Working as a web designer and developer, I assisted with both
									the front-end designs of websites and assited in developing
									with web technologies, front-end and back-end languages such
									as PHP, HTML, CSS, JavaScript and SCSS.
								</p>
								<p>
									I have learnt how to use Git, Bitbucket, Github as part of my
									source control training and know how to work in the context of
									a large team.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-left">
								<h3>Web Developer</h3>
								<h4>CloudTen</h4>
								<h4>April 2016 - June 2016</h4>
							</div>
							<div className="col-right">
								<p>
									As the only website designer and developer of the team, I was
									tasked with creating designs for clients and following a
									structured creative process when generating ideas and
									solutions.
								</p>
								<p>
									As well as the initial designs, I was also responsible for
									creating the website applications and interfaces that will be
									used as an end product, often utilising CMS technologies such
									as WordPress.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-left">
								<h2>Awards 🥇</h2>
							</div>
							<div className="col-right" />
						</div>
						<div className="row">
							<div className="col-left">
								<h3>1st Place WorldSkills UK</h3>
								<h4>Website Design and Development - 2013</h4>
							</div>
							<div className="col-right">
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
							</div>
						</div>
					</div>
				</CVAbout>

				<LazyLoad height={1920}>
					<Banner overlay image={aboutPhoto}>
						<h2>What I get up to</h2>
					</Banner>
					<Events />
				</LazyLoad>

				<LazyLoad height={1920}>
					<Banner overlay image={casesPhoto}>
						<h2>My Portfolio of Work 👨‍🎨</h2>
						<p>
							We work for our customers, and help create their visions. Our work
							is a reflection of our skills and so we let our work speak for
							itself. Take a look.
						</p>
					</Banner>
					<Blogs queryData={data.allNoFaceCase.edges} internal={false} />
				</LazyLoad>

				<LazyLoad height={1920}>
					<Banner overlay image={magnifyPhoto}>
						<h2>The 12 Principles of UX in Motion</h2>
						<p>
							Codepen animations inspired by the 12 principles of UX in motion,
							found in the medium article
							<a
								href="https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc"
								target="_blank"
							>
								"Creating Usability with Motion: The UX in Motion Manifesto"
							</a>
							by Issara Willenskomer.
						</p>
					</Banner>

					<UXMotion />
				</LazyLoad>

				<LazyLoad height={1920}>
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
					<Blogs queryData={data.allWjhmPost.edges} internal={true} />
				</LazyLoad>

				<LazyLoad height={1920}>
					<Banner overlay image={nofacePhoto}>
						<h2>I've also been a busy bee 🐝, posting on my company site!</h2>
						<p>
							It is our archived collection of discussions on current events and
							topics related to our industry. Join in the conversation and let
							us know what you think.
						</p>
					</Banner>
					<Blogs queryData={data.allNoFaceInsight.edges} internal={false} />
				</LazyLoad>
			</Wrapper>
		</div>
	</Layout>
);

export const query = graphql`
	query {
		allNoFaceInsight(limit: 20) {
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
		allWjhmPost(limit: 25) {
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
