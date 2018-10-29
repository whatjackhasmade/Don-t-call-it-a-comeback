import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Hero from "../components/organisms/Hero";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import styled from "styled-components";
import Image from "react-image-webp";

import Button from "../components/atoms/button";

import Navigation from "../components/molecules/Navigation";

import Services from "../components/organisms/Services";

import avatar1PNG from "../assets/images/cv/1.png";
import avatar2PNG from "../assets/images/cv/2.png";
import avatar3PNG from "../assets/images/cv/3.png";
import avatar1WebP from "../assets/images/cv/1.webp";
import avatar2WebP from "../assets/images/cv/2.webp";
import avatar3WebP from "../assets/images/cv/3.webp";

import aboutPhoto from "../assets/images/jack-pritchard.jpg";

import cloudtenJPG from "../assets/images/cv/cloud-ten.jpg";
import cloudtenWebP from "../assets/images/cv/cloud-ten.webp";
import finish2JPG from "../assets/images/cv/finish-what-you-started-2.jpg";
import finish2WebP from "../assets/images/cv/finish-what-you-started-2.webp";
import moov2JPG from "../assets/images/cv/moov2.jpg";
import moov2WebP from "../assets/images/cv/moov2.webp";
import needJPG from "../assets/images/cv/need-for-speed.jpg";
import needWebP from "../assets/images/cv/need-for-speed.webp";
import nofaceJPG from "../assets/images/cv/noface.jpg";
import nofaceWebP from "../assets/images/cv/noface.webp";
import offonJPG from "../assets/images/cv/offline-is-new-online.jpg";
import offonWebP from "../assets/images/cv/offline-is-new-online.webp";
import pwablendingJPG from "../assets/images/cv/pwa-blending.jpg";
import pwablendingWebP from "../assets/images/cv/pwa-blending.webp";
import winchesterJPG from "../assets/images/cv/winchester-creatives.jpg";
import winchesterWebP from "../assets/images/cv/winchester-creatives.webp";
import worldskillsJPG from "../assets/images/cv/worldskills.jpg";
import worldskillsWebP from "../assets/images/cv/worldskills.webp";

const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const d = new Date();

var myTimeline = [
	{
		title: "Freelance Front-end Developer",
		date: "October 2017 - " + monthNames[d.getMonth()] + " " + d.getFullYear(),
		dateTimeline: d,
		description:
			"NoFace is a design agency focused solely on helping local businesses define their identities, and form a holistic brand that will represent their message.",
		event: "NoFace",
		image: nofaceJPG,
		imageWebP: nofaceWebP,
		type: "jobs",
		url: "https://noface.co.uk"
	},
	{
		title: "Front-end Developer & Designer",
		date: "June 2016 - November 2017",
		dateTimeline: new Date("November 1, 2017 03:24:00"),
		description:
			"As a web developer, I was responsible assisting with both the front end designs of websites and helping by using web technologies, front end and back end languages such as HTML, CSS, SCSS.",
		event: "Moov2",
		image: moov2JPG,
		imageWebP: moov2WebP,
		type: "jobs",
		url: "https://moov2.com"
	},
	{
		title: "Front-end Developer & Designer",
		date: "April 2016 - June 2016",
		dateTimeline: new Date("June 1, 2016 03:24:00"),
		description:
			"As a web developer, I was tasked with creating designs for clients and following a structured creative process when generating ideas and solutions. As well as the initial designs, I was also responsible for creating the website applications and interfaces that will be used as an end product.",
		event: "CloudTen",
		image: cloudtenJPG,
		imageWebP: cloudtenWebP,
		type: "jobs",
		url: "https://CloudTenGroup.co.uk"
	},
	{
		title: "Finish What You Started",
		date: "June 2017",
		dateTimeline: new Date("June 6, 2017 03:24:00"),
		description: "somewhere@gmail.com",
		event: "Winchester Creatives",
		image: "",
		imageWebP: "",
		type: "talks",
		url: "https://twitter.com/studiorepublic/status/872154777928564737"
	},
	{
		title: "Finish What You Started",
		date: "July 2017",
		dateTimeline: new Date("July 27, 2017 03:24:00"),
		description: "somewhere@gmail.com",
		event: "WPBournemouth",
		image: finish2JPG,
		imageWebP: finish2WebP,
		type: "talks",
		url: "https://twitter.com/WPBournemouth/status/890650202280939520"
	},
	{
		title: "Need for Speed",
		date: "December 2017",
		dateTimeline: new Date("December 11, 2017 03:24:00"),
		description:
			"Waiting for websites to load sucks, right? In this lightning talk, I give a breakdown on how to improve your websites page rendering speeds and time to first meaningful paints without any decrease in quality!",
		event: "Fullstack Hampshire",
		image: needJPG,
		imageWebP: needWebP,
		type: "talks",
		url: "https://twitter.com/whatjackhasmade/status/940646102394724352"
	},
	{
		title: "Offline is the New Online",
		date: "June 2018",
		dateTimeline: new Date("June 20, 2018 03:24:00"),
		description:
			"Jack's talk covers the key benefits of using offline technologies, and why he believes that the next step in progress for web development is a focus on offline applications.",
		event: "Fullstack Hampshire",
		image: offonJPG,
		imageWebP: offonWebP,
		type: "talks",
		url: "https://twitter.com/fullstackhants/status/1009499162742837273"
	},
	{
		title: "Getting Into The Industry",
		date: "Sam",
		dateTimeline: new Date("December 17, 1995 03:24:00"),
		description: "somewhere@gmail.com",
		event: "Solent",
		image: pwablendingJPG,
		imageWebP: pwablendingJPG,
		type: "talks",
		url: ""
	},
	{
		title: "Progressive Web Applications: Blending Industries",
		date: "October 2018",
		dateTimeline: new Date("October 22, 2018 03:24:00"),
		description:
			"With the rise in the use of mobile devices, there has been a clear divide between native mobile applications and online websites. In this presentation, Jack will demonstrate how both industries can be implemented in an all-in-one solution. What benefits there are to blending the industries and how you can get started today.",
		event: "BCS, Solent University",
		image: pwablendingJPG,
		imageWebP: pwablendingWebP,
		type: "talks",
		url:
			"https://www.eventbrite.co.uk/e/hampshire-branch-progressive-web-applications-blending-industires-registration-50682126605?aff=eand#"
	},
	{
		title: "Progressive Web Applications: Blending Industries",
		date: "November 2018",
		dateTimeline: new Date("November 15, 2018 03:24:00"),
		description:
			"With the rise in the use of mobile devices, there has been a clear divide between native mobile applications and online websites. In this presentation, Jack will demonstrate how both industries can be implemented in an all-in-one solution. What benefits there are to blending the industries and how you can get started today.",
		event: "Developer Southcoast",
		image: pwablendingJPG,
		imageWebP: pwablendingJPG,
		type: "talks",
		url: "https://www.meetup.com/DeveloperSouthCoast/events/255169865/"
	},
	{
		title: "1st Place - WorldSkills UK",
		date: "March 2013",
		dateTimeline: new Date("March 25, 2013 03:24:00"),
		description:
			"Young people from across Wales descended on Swansea to take part in the all-Wales final to find the most talented students in the field of web design. Hosted by Gower College Swansea and Judged by Industry Experts from the School of Applied Computing, the WorldSkills Web Design Competition is part of a network of tournaments supported by the Welsh Government and the European Social Fund to highlight the importance of developing strong Employment skills.",
		event: "Developer Southcoast",
		image: worldskillsJPG,
		imageWebP: worldskillsWebP,
		type: "awards",
		url:
			"https://uwtsdcomputing.blog/2013/03/25/applied-computing-judges-prestigious-worldskills-competition/"
	}
];

myTimeline = myTimeline.sort((b, a) => a.dateTimeline - b.dateTimeline);

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

const CVIntro = styled.div`
	a {
		border-radius: 3px;
		padding: 8px 16px;

		border: 1px solid blue;
		color: blue;
		transition: 0.2s all ease;

		&:active,
		&:hover,
		&:focus {
			background: blue;
			color: white;
		}
	}

	div {
		padding: 32px;
		position: relative;
		width: 100%;

		~ div {
			padding: 0;
		}
	}

	h1 {
		color: blue;
	}

	img {
		display: none;
	}

	@media screen and (min-width: 576px) {
		display: flex;
		margin: 0 auto 32px;

		div {
			align-items: flex-start;
			display: flex;
			flex-direction: column;
			justify-content: center;
			min-height: 600px;

			width: 60%;

			*:not(img) {
				margin-left: 20%;
				margin-right: 164px;
			}

			~ div {
				padding: 32px;
				width: 40%;

				background: blue;
			}
		}

		img {
			bottom: 0;
			display: block;
			position: absolute;
			right: -202px;
			z-index: 1;
		}
	}
`;

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
		min-width: 400px;
		margin-right: 64px;
		width: 400px;

		object-fit: cover;
		object-position: left center;
	}

	li {
		font-size: 2rem;
	}

	ul {
		margin: 0;
		padding: 0;

		list-style: none;
	}

	@media screen and (min-width: 576px) {
		margin: 128px auto;
	}
`;

const Events = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	position: relative;
	margin: 128px;
	margin-left: auto;
	margin-right: auto;
	max-width: 1300px;
	width: 90%;
`;

const EventItem = styled.div`
	margin-bottom: 24px;
	max-width: 100%;
	position: relative;

	@media screen and (min-width: 576px) {
		max-width: 33.333%;
		max-width: calc(33.333% - 16px);
	}

	a,
	img {
		display: block;
	}

	a {
		overflow: hidden;

		&:active,
		&:focus,
		&:hover {
			img {
				transform: scale(1.1);
			}
		}
	}

	img {
		transform: scale(1);
		transition: 0.4s all ease;
	}
`;

const Wrapper = styled.section`
	min-height: 100vh;
	padding-bottom: 128px;

	background: #fff;
	color: black;

	h2 {
		margin-bottom: 32px;
		margin-top: 0;
		width: 100%;
	}
`;

class Index extends React.Component {
	render() {
		return (
			<Layout>
				<div className="index-container">
					<Helmet title={config.siteTitle} />
					<SEO />
					<Hero />
				</div>
				<div className="cv-container">
					<Helmet title={`CV | ${config.siteTitle}`} />
					<Navigation />
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
										I want to improve how businesses present themselves in the
										form of brand development and design.
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
										My primary focus is website development, specifically
										front-end web technologies and implementing the latest
										frameworks to create bespoke solutions to solve business
										problems.
									</p>
									<p>
										I have experience in HTML, CSS, SCSS, JavaScript, jQuery,
										React, PHP, WordPress, Gatsby. Although I have experience
										creating bespoke backend systems, my true passion lies in
										the front-end development of websites. Turning designs into
										functional pages that represent brands or enable users to
										make use of web applications.
									</p>
									<h3>Qualifications</h3>
									<ul>
										<li>✅ Grade C+ - English and Mathematics GCSE</li>
										<li>✅ D*D*D* - BTEC Extended Diploma Level 3 in ICT</li>
										<li>✅ 1:1 - BSc Website Design and Development</li>
										<li>🎯 1:1 - MA Creative Enterprise </li>
										<li>🎯 1:1 - PhD Applied Computing </li>
									</ul>
								</div>
							</div>
						</CVAbout>

						<Services title="My Skills and Services" />

						<Events>
							<h2>What I Get Up To</h2>
							{myTimeline.map(chapter => (
								<EventItem key={chapter.dateTimeline}>
									<a href={chapter.url} target="_blank">
										<Image
											src={chapter.image}
											webp={chapter.imageWebP}
											alt=""
										/>
									</a>
								</EventItem>
							))}
						</Events>

						<Events>
							<h2>My Most Popular Codepens</h2>
						</Events>
					</Wrapper>
				</div>
			</Layout>
		);
	}
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(
			limit: 2000
			sort: { fields: [fields___date], order: DESC }
		) {
			edges {
				node {
					fields {
						slug
						date
					}
					excerpt
					timeToRead
					frontmatter {
						title
						tags
						cover
						date
					}
				}
			}
		}
	}
`;
