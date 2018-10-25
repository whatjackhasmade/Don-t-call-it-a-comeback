import React, { Component } from "react";
import "./CV.css";
import styled from "styled-components";

const Container = styled.main`
	margin: 0 auto;
	max-width: 1100px;
	padding-top: 64px;

	h1 {
		margin-top: 0;
	}
`;

const Timeline = styled.div`
	margin-top: 32px;
	position: relative;

	background-color: black;

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
	background-color: black;
	max-width: 40%;
	padding-bottom: 16px;
	padding-top: 16px;
	position: relative;

	&:active,
	&:focus,
	&:hover {
		&:before {
			width: 150%;
		}
	}

	&:before {
		content: "";
		display: block;
		height: 1px;
		right: -25%;
		position: absolute;
		top: 0;
		width: 100%;

		background-color: white;
		transition: 0.2s width ease;
	}

	&:nth-child(even) {
		margin-left: auto;

		&:before {
			left: -25%;
			right: auto;
		}
	}
`;

const Wrapper = styled.section`
	background-color: black;
	color: white;
	min-height: 100vh;
`;

class CV extends Component {
	render() {
		return (
			<Wrapper>
				<Container className="cv">
					<h1>Jack Pritchard</h1>
					<h2>In a nutshell</h2>
					<Timeline>
						<TimelineItem>
							<h2>1995</h2>
							<h3>Born</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Ducimus similique aliquam sit eius voluptates, assumenda
								quaerat, voluptatem temporibus quia sed eaque iusto
								exercitationem dolorum aperiam nobis optio libero! Consequuntur,
								iure?
							</p>
						</TimelineItem>
						<TimelineItem>
							<h2>1995</h2>
							<h3>Born</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Ducimus similique aliquam sit eius voluptates, assumenda
								quaerat, voluptatem temporibus quia sed eaque iusto
								exercitationem dolorum aperiam nobis optio libero! Consequuntur,
								iure?
							</p>
						</TimelineItem>
						<TimelineItem>
							<h2>1995</h2>
							<h3>Born</h3>
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
