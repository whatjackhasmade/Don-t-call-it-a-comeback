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

var myCodepens = fetch("https://cpv2api.com/pens/popular/jackpritchard")
	.then(function(response) {
		if (response.status !== 200) {
			console.log(
				"Looks like there was a problem. Status Code: " + response.status
			);
			return;
		}

		// Examine the text in the response
		response.json().then(function(data) {
			console.log(data);
		});
	})
	.catch(function(err) {
		console.log("Fetch Error :-S", err);
	});

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

const Services = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin: 128px;
	margin-left: auto;
	margin-right: auto;
	max-width: 1300px;
	position: relative;
	width: 90%;

	background: #fff;
	color: black;

	div {
		margin-bottom: 16px;
		padding: 64px;
		width: 100%;

		background: blue;
		border-radius: 3px;
		color: white;

		@media screen and (min-width: 576px) {
			width: calc(50% - 8px);

			&:nth-child(odd) {
				margin-left: 16px;
			}
		}
	}

	svg {
		max-width: 64px;

		color: white;
		fill: white;
	}
`;

class Index extends React.Component {
	render() {
		const postEdges = this.props.data.allMarkdownRemark.edges;
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
						<CVIntro>
							<div className="">
								<h4>Good {greeting},</h4>
								<h1>I'm Jack Pritchard</h1>
								<h2>Freelance Front-end Website Developer</h2>
								<a href="mailto:jack@noface.co.uk">Hire Me</a>
								<Image
									src={avatar1PNG}
									webp={avatar1WebP}
									alt="Jack Pritchard"
								/>
							</div>
							<div className="" />
						</CVIntro>
						<CVAbout>
							<div>
								<img src={aboutPhoto} alt="" />
								<div>
									<h2>About Me</h2>
									<ul>
										<li>✅ Grade C+ - English and Mathematics GCSE</li>
										<li>✅ D*D*D* - BTEC Extended Diploma Level 3 in ICT</li>
										<li>✅ 1:1 - BSc Website Design and Development</li>
										<li>🎯 1:1 - MA Creative Enterprise </li>
										<li>🎯 1:1 - PhD Applied Computing </li>
									</ul>
									<p>
										I’m a passionate website designer and developer. I want to
										improve how businesses present themselves in the form of
										brand development and design.
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
								</div>
							</div>
						</CVAbout>
						<Services>
							<h2>My Skills and Services</h2>
							<div className="service">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
									<path d="M234.8 511.7L196 500.4c-4.2-1.2-6.7-5.7-5.5-9.9L331.3 5.8c1.2-4.2 5.7-6.7 9.9-5.5L380 11.6c4.2 1.2 6.7 5.7 5.5 9.9L244.7 506.2c-1.2 4.3-5.6 6.7-9.9 5.5zm-83.2-121.1l27.2-29c3.1-3.3 2.8-8.5-.5-11.5L72.2 256l106.1-94.1c3.4-3 3.6-8.2.5-11.5l-27.2-29c-3-3.2-8.1-3.4-11.3-.4L2.5 250.2c-3.4 3.2-3.4 8.5 0 11.7L140.3 391c3.2 3 8.2 2.8 11.3-.4zm284.1.4l137.7-129.1c3.4-3.2 3.4-8.5 0-11.7L435.7 121c-3.2-3-8.3-2.9-11.3.4l-27.2 29c-3.1 3.3-2.8 8.5.5 11.5L503.8 256l-106.1 94.1c-3.4 3-3.6 8.2-.5 11.5l27.2 29c3.1 3.2 8.1 3.4 11.3.4z" />
								</svg>
								<h3>Front-end Web Development</h3>
							</div>
							<div className="service">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path d="M424 400c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24zm-88-24c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm64-144c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm176-72a47.758 47.758 0 0 1-6.438 24A47.758 47.758 0 0 1 512 208v96a47.758 47.758 0 0 1-6.438 24A47.758 47.758 0 0 1 512 352v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96a47.758 47.758 0 0 1 6.438-24A47.758 47.758 0 0 1 0 304v-96a47.758 47.758 0 0 1 6.438-24A47.758 47.758 0 0 1 0 160V64c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v96zm-464 0h416V64H48v96zm416 48H48v96h416v-96zm0 144H48v96h416v-96zm-64-216c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24zm-64 0c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24z" />
								</svg>
								<h3>Back-end Web Development</h3>
							</div>
							<div className="service">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
									<path d="M446.34 433.21l-62.35-137.6c2.24-5.77 5.32-11.17 9.72-15.57l12.62-12.62a44.721 44.721 0 0 0 11.57-43.18L413.28 207a44.723 44.723 0 0 1 0-23.14l4.62-17.24a44.715 44.715 0 0 0-11.57-43.18L393.7 110.8a44.688 44.688 0 0 1-11.57-20.04l-4.62-17.24a44.68 44.68 0 0 0-31.61-31.61l-17.24-4.62a44.688 44.688 0 0 1-20.04-11.57L296 13.1a44.716 44.716 0 0 0-43.19-11.58l-17.24 4.62c-3.79 1.02-7.68 1.52-11.57 1.52s-7.78-.51-11.57-1.52l-17.24-4.62A44.716 44.716 0 0 0 152 13.1l-12.62 12.62a44.688 44.688 0 0 1-20.04 11.57l-17.24 4.62a44.68 44.68 0 0 0-31.61 31.61l-4.62 17.24A44.688 44.688 0 0 1 54.3 110.8l-12.62 12.62c-11.29 11.29-15.71 27.76-11.57 43.18l4.62 17.24a44.723 44.723 0 0 1 0 23.14l-4.62 17.24a44.715 44.715 0 0 0 11.57 43.18l12.62 12.62c4.4 4.4 7.48 9.8 9.72 15.57L1.66 433.21c-5.96 13.15 4.85 27.44 20.45 27.44.29 0 .59-.01.88-.02l72.86-2.51 50.13 47.65C150.45 510 156.26 512 162 512c8.53 0 16.92-4.39 20.55-12.4L224 408.13l41.45 91.47c3.63 8.01 12.02 12.4 20.55 12.4 5.75 0 11.56-2 16.01-6.23l50.13-47.65 72.86 2.51c.3.01.59.02.88.02 15.6-.01 26.42-14.29 20.46-27.44zM153.73 446.9l-24.8-23.57-14.6-13.87-20.12.69-29.87 1.03 29.72-65.59c2.59 1.28 5.18 2.57 8.04 3.34l17.24 4.62a44.688 44.688 0 0 1 20.04 11.57l5.78 5.78c8.63 8.63 20.07 13.1 31.63 13.1 1.95 0 3.87-.55 5.81-.8l-28.87 63.7zm23.55-111.76l-3.95-3.96a92.923 92.923 0 0 0-41.56-24l-15.41-4.13-4.13-15.4a92.85 92.85 0 0 0-23.99-41.56l-11.28-11.28 4.13-15.4a92.752 92.752 0 0 0 0-47.99l-4.13-15.4 11.28-11.28a92.87 92.87 0 0 0 24-41.56l4.13-15.4 15.4-4.12a92.81 92.81 0 0 0 41.57-24l11.28-11.28 15.41 4.13a92.52 92.52 0 0 0 23.99 3.16c8.1 0 16.17-1.06 23.99-3.16l15.4-4.13 11.28 11.28a92.812 92.812 0 0 0 41.56 23.99l15.4 4.13 4.13 15.41a92.904 92.904 0 0 0 23.99 41.56l11.28 11.28-4.13 15.42a92.927 92.927 0 0 0 0 47.98l4.13 15.41-11.28 11.28a92.759 92.759 0 0 0-23.99 41.56l-4.13 15.41-15.4 4.13a92.772 92.772 0 0 0-41.57 24l-3.96 3.96a92.613 92.613 0 0 0-46.71-12.63c-16.46-.04-32.55 4.32-46.73 12.59zm176.51 75.01l-20.12-.69-14.6 13.87-24.8 23.57-28.87-63.7c1.94.26 3.86.8 5.81.8 11.55 0 23-4.47 31.63-13.1l5.78-5.78a44.688 44.688 0 0 1 20.04-11.57l17.24-4.62c2.85-.76 5.44-2.06 8.04-3.34l29.72 65.58-29.87-1.02zM320 192c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zm-96 48c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z" />
								</svg>
								<h3>Site Optimisation</h3>
							</div>
							<div className="service">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
									<path d="M352 0H32C14.33 0 0 14.33 0 32v288c0 35.35 28.65 64 64 64h48v48c0 44.18 35.82 80 80 80s80-35.82 80-80v-48h48c35.35 0 64-28.65 64-64V32c0-17.67-14.33-32-32-32zm-16 48v176H48V48h288zm-16 288h-96v96c0 17.64-14.36 32-32 32s-32-14.36-32-32v-96H64c-8.82 0-16-7.18-16-16v-48h288v48c0 8.82-7.18 16-16 16z" />
								</svg>
								<h3>Website Design</h3>
							</div>
						</Services>

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

						<h2>My Most Popular Codepens</h2>
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
