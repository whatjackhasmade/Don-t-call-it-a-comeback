import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import heroImage from "../../assets/images/jack-pritchard.jpg";
import Twitter from "../../assets/images/twitter.svg";
import YouTube from "../../assets/images/youtube.svg";

const HeroContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 70vh;
	overflow: hidden;
	position: relative;

	text-align: center;
	background: green;

	&:before {
		content: "";
		display: block;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 1;

		background: rgba(0, 0, 255, 0.5);
	}

	& > * {
		position: relative;
		z-index: 2;
	}

	h1,
	h2 {
		background: blue;
		color: white;

		padding: 0 24px;
	}

	h1 {
		font-size: 64px;
		font-weight: 700;
		letter-spacing: 4px;
		text-transform: uppercase;
	}

	h2 {
		padding: 8px 24px;
	}

	iframe {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		position: absolute;
	}

	.videoWrapper {
		position: absolute;
		padding-bottom: 56.25%; /* 16:9 */
		padding-top: 25px;
		height: 0;
		width: 100%;
		z-index: 0;
	}
`;

const Hero = () => (
	<div>
		<HeroContainer>
			<div>
				<h2>Award Winning Web Developer</h2>
				<h1>Jack Pritchard</h1>
			</div>
			<div class="videoWrapper">
				<iframe
					src="https://www.youtube.com/embed/_674lrm30sY?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&HD=1&frameborder=0&playlist=_674lrm30sY"
					frameborder="0"
					allowfullscreen
				/>
			</div>
		</HeroContainer>
	</div>
);

export default Hero;
