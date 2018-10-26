import React, { Component } from "react";
import "./CV.css";
import styled from "styled-components";
import avatar from "../../assets/images/avatar.jpg";

const Container = styled.main`
	@import url("https://fonts.googleapis.com/css?family=Poppins:400,700");
	font-family: "Poppins", sans-serif;

	margin: 0 auto;
	max-width: 1100px;
	padding-top: 64px;

	h2 {
		margin: 0 auto 8px;
	}
`;

const CVIntro = styled.div`
	margin: 64px auto 64px;
	text-align: center;

	h1 {
		margin-top: 0;
	}

	img {
		border-radius: 50%;
		margin-bottom: 32px;
		max-width: 200px;
	}
`;

const Timeline = styled.div`
	margin-top: 32px;
	position: relative;
`;

const TimelineControls = styled.div`
	margin-bottom: 128px;
	position: relative;

	text-align: center;

	button {
		padding: 8px 16px;

		background: none;
		border: 1px solid white;
		border-left: none;
		color: white;
		font-size: 1.6rem;
		transition: 0.2s all ease;

		&:first-child {
			border: 1px solid white;
			border-radius: 5px 0 0 5px;
		}

		&:last-child {
			border-radius: 0 5px 5px 0;
		}

		&:hover {
			color: rgba(255, 255, 255, 0.6);
		}
	}

	.active {
		background: white;
		color: black;

		&:hover {
			color: black;
		}
	}
`;

const TimelineItem = styled.div`
	margin-left: 0;
	max-width: 50%;
	padding: 32px;
	position: relative;

	&:before {
		content: "";
		display: block;
		height: 1px;
		right: 0;
		position: absolute;
		top: 0;
		width: 100%;

		background-color: #8367dd;
		transition: 0.2s width ease;
	}
`;

const Wrapper = styled.section`
	background: #1f2e4b;
	background: -moz-linear-gradient(top, #1f2e4b 0%, #353e75 100%);
	background: -webkit-linear-gradient(top, #1f2e4b 0%, #353e75 100%);
	background: linear-gradient(to bottom, #1f2e4b 0%, #353e75 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1f2e4b', endColorstr='#353e75',GradientType=0 );
	color: white;
	min-height: 100vh;
`;

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
		type: "job",
		url: ""
	},
	{
		title: "Front-end Developer & Designer",
		date: "June 2016 - November 2017",
		dateTimeline: new Date("November 1, 2017 03:24:00"),
		description:
			"As a web developer, I was responsible assisting with both the front end designs of websites and helping by using web technologies, front end and back end languages such as HTML, CSS, SCSS.",
		event: "Moov2",
		type: "job",
		url: ""
	},
	{
		title: "Front-end Developer & Designer",
		date: "April 2016 - June 2016",
		dateTimeline: new Date("June 1, 2016 03:24:00"),
		description:
			"As a web developer, I was tasked with creating designs for clients and following a structured creative process when generating ideas and solutions. As well as the initial designs, I was also responsible for creating the website applications and interfaces that will be used as an end product.",
		event: "CloudTen",
		type: "job",
		url: ""
	},
	{
		title: "Finish What You Started",
		date: "June 2017",
		dateTimeline: new Date("June 6, 2017 03:24:00"),
		description: "somewhere@gmail.com",
		event: "Winchester Creatives",
		type: "talk",
		url: "https://twitter.com/studiorepublic/status/872154777928564737"
	},
	{
		title: "Finish What You Started",
		date: "July 2017",
		dateTimeline: new Date("July 27, 2017 03:24:00"),
		description: "somewhere@gmail.com",
		event: "WPBournemouth",
		type: "talk",
		url: "https://twitter.com/WPBournemouth/status/890650202280939520"
	},
	{
		title: "Need for Speed",
		date: "December 2017",
		dateTimeline: new Date("December 11, 2017 03:24:00"),
		description: "somewhere@gmail.com",
		event: "Fullstack Hampshire",
		type: "talk",
		url: "https://twitter.com/whatjackhasmade/status/940646102394724352"
	},
	{
		title: "Offline is the New Online",
		date: "June 2018",
		dateTimeline: new Date("June 20, 2018 03:24:00"),
		description: "somewhere@gmail.com",
		event: "Fullstack Hampshire",
		type: "talk",
		url: "https://twitter.com/fullstackhants/status/1009499162742837273"
	},
	{
		title: "Getting Into The Industry",
		date: "Sam",
		dateTimeline: new Date("December 17, 1995 03:24:00"),
		description: "somewhere@gmail.com",
		event: "Solent",
		type: "talk",
		url: ""
	},
	{
		title: "Progressive Web Applications: Blending Industries",
		date: "October 2018",
		dateTimeline: new Date("October 22, 2018 03:24:00"),
		description:
			"With the rise in the use of mobile devices, there has been a clear divide between native mobile applications and online websites. In this presentation, Jack will demonstrate how both industries can be implemented in an all-in-one solution. What benefits there are to blending the industries and how you can get started today.",
		event: "BCS, Solent University",
		type: "talk",
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
		type: "talk",
		url: "https://www.meetup.com/DeveloperSouthCoast/events/255169865/"
	}
];

myTimeline = myTimeline.sort((b, a) => a.dateTimeline - b.dateTimeline);

const Chapters = ({ chapters }) => (
	<>
		{myTimeline.map(chapter => (
			<TimelineItem className="myTimeline" key={chapter.title}>
				<div class="timeline__content">
					<a href={chapter.url}>
						<h2>
							{chapter.event} - {chapter.title}
						</h2>
					</a>
					<h3>{chapter.date}</h3>
					<p>{chapter.description}</p>
				</div>
				<div class="chapter__image">
					<img src="https://dummyimage.com/500x200.gif" alt="" />
				</div>
			</TimelineItem>
		))}
	</>
);

class CV extends Component {
	render() {
		return (
			<Wrapper>
				<Container className="cv">
					<CVIntro>
						<img src={avatar} alt="Jack Pritchard" />
						<h1>Jack Pritchard</h1>
						<h2>Front-end Website Developer</h2>
					</CVIntro>
					<TimelineControls>
						<button>All</button>
						<button className="active">Jobs</button>
						<button>Talks</button>
						<button>Awards</button>
					</TimelineControls>
					<Timeline>
						<Chapters myTimeline={myTimeline} />
					</Timeline>
				</Container>
			</Wrapper>
		);
	}
}

export default CV;
