import React, { Component } from "react";
import "./CV.css";
import styled from "styled-components";
import avatar from "../../assets/images/avatar.jpg";

const Container = styled.main`
	margin: 0 auto;
	max-width: 1100px;
	padding-top: 64px;

	h2 {
		margin: 0 auto 8px;
	}
`;

const CVIntro = styled.div`
	margin: 64px auto 128px;
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

	&:before {
		content: "";
		display: block;
		height: 100%;
		left: 50%;
		position: absolute;
		top: 0;
		width: 1px;

		background-color: white;
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

		background-color: white;
		transition: 0.2s width ease;
	}

	&:nth-child(even) {
		margin-left: auto;

		&:before {
			left: 0;
			right: auto;
		}
	}
`;

const TimelineItemMini = styled.div`
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

		background-color: white;
		transition: 0.2s width ease;
	}

	&:nth-child(even) {
		margin-left: auto;

		&:before {
			left: 0;
			right: auto;
		}
	}
`;

const Wrapper = styled.section`
	background-color: #1c1c1c;
	color: white;
	min-height: 100vh;
`;

const talks = [
	{
		title: "Finish What You Started",
		date: "Sam",
		description: "somewhere@gmail.com",
		event: "Winchester Creatives",
		url: ""
	},
	{
		title: "Finish What You Started",
		date: "Sam",
		description: "somewhere@gmail.com",
		event: "WPBournemouth",
		url: ""
	},
	{
		title: "Need for Speed",
		date: "Sam",
		description: "somewhere@gmail.com",
		event: "Fullstack Hampshire",
		url: ""
	},
	{
		title: "Offline is the New Online",
		date: "Sam",
		description: "somewhere@gmail.com",
		event: "Fullstack Hampshire",
		url: ""
	},
	{
		title: "Getting Into The Industry",
		date: "Sam",
		description: "somewhere@gmail.com",
		event: "Solent",
		url: ""
	},
	{
		title: "Progressive Web Applications: Blending Industries",
		date: "Sam",
		description: "somewhere@gmail.com",
		event: "Solent",
		url: ""
	},
	{
		title: "Progressive Web Applications: Blending Industries",
		date: "Sam",
		description: "somewhere@gmail.com",
		event: "Developer Southcoast",
		url: ""
	}
];

const Test = ({ stations }) => (
	<>
		{talks.map(talk => (
			<TimelineItem className="talks" key={talk.title}>
				<a href="{talk.url}">
					<h2>
						{talk.event} - {talk.title}
					</h2>
				</a>
				<h3>{talk.date}</h3>
				<p>{talk.description}</p>
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
					<Timeline>
						<Test talks={talks} />
						<TimelineItem>
							<a href="https://noface.co.uk" target="_blank">
								<h2>NoFace</h2>
							</a>
							<h3>Freelance Designer and Developer</h3>
							<p>
								I have been working as a website designer, developer and founder
								of my business NoFace.
							</p>
							<p>
								NoFace have received some clients that have included projects
								covering Brand Design, Brand Development, Website Design,
								Website Development, Website Hosting, Website Backups, Website
								Optimisation, the list goes on! As part of a one-man business, I
								deal with client services, communications and website
								design/development
							</p>
						</TimelineItem>
						<TimelineItemMini>
							<a href="https://noface.co.uk" target="_blank">
								<h2>BCS - Progressive Web Applications: Blending Industries</h2>
							</a>
							<h3>Guest Speaker</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Ducimus similique aliquam sit eius voluptates, assumenda
								quaerat, voluptatem temporibus quia sed eaque iusto
								exercitationem dolorum aperiam nobis optio libero! Consequuntur,
								iure?
							</p>
						</TimelineItemMini>
						<TimelineItem>
							<a href="https://moov2.com" target="_blank">
								<h2>Moov2</h2>
							</a>
							<h3>Designer and Developer</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Ducimus similique aliquam sit eius voluptates, assumenda
								quaerat, voluptatem temporibus quia sed eaque iusto
								exercitationem dolorum aperiam nobis optio libero! Consequuntur,
								iure?
							</p>
						</TimelineItem>
						<TimelineItem>
							<a href="https://cloudtengroup.co.uk/" target="_blank">
								<h2>CloudTen</h2>
							</a>
							<h3>Designer and Developer</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Ducimus similique aliquam sit eius voluptates, assumenda
								quaerat, voluptatem temporibus quia sed eaque iusto
								exercitationem dolorum aperiam nobis optio libero! Consequuntur,
								iure?
							</p>
						</TimelineItem>
					</Timeline>
				</Container>
			</Wrapper>
		);
	}
}

export default CV;
