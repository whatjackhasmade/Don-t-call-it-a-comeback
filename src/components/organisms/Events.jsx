import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import EventTease from "../molecules/EventTease";

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
		image: winchesterJPG,
		imageWebP: winchesterWebP,
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

import cloudtenJPG from "../../assets/images/cv/cloud-ten.jpg";
import cloudtenWebP from "../../assets/images/cv/cloud-ten.webp";
import finish2JPG from "../../assets/images/cv/finish-what-you-started-2.jpg";
import finish2WebP from "../../assets/images/cv/finish-what-you-started-2.webp";
import moov2JPG from "../../assets/images/cv/moov2.jpg";
import moov2WebP from "../../assets/images/cv/moov2.webp";
import needJPG from "../../assets/images/cv/need-for-speed.jpg";
import needWebP from "../../assets/images/cv/need-for-speed.webp";
import nofaceJPG from "../../assets/images/cv/noface.jpg";
import nofaceWebP from "../../assets/images/cv/noface.webp";
import offonJPG from "../../assets/images/cv/offline-is-new-online.jpg";
import offonWebP from "../../assets/images/cv/offline-is-new-online.webp";
import pwablendingJPG from "../../assets/images/cv/pwa-blending.jpg";
import pwablendingWebP from "../../assets/images/cv/pwa-blending.webp";
import winchesterJPG from "../../assets/images/cv/winchester-creatives.jpg";
import winchesterWebP from "../../assets/images/cv/winchester-creatives.webp";
import worldskillsJPG from "../../assets/images/cv/worldskills.jpg";
import worldskillsWebP from "../../assets/images/cv/worldskills.webp";

myTimeline = myTimeline.sort((b, a) => a.dateTimeline - b.dateTimeline);

const EventContainer = styled.section`
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

class Events extends Component {
	render() {
		return (
			<EventContainer>
				<h2>What I Get Up To</h2>
				{myTimeline.map(chapter => (
					<EventTease
						key={chapter.dateTimeline}
						link={chapter.url}
						image={chapter.image}
						imageWebP={chapter.imageWebP}
					/>
				))}
			</EventContainer>
		);
	}
}

export default Events;
