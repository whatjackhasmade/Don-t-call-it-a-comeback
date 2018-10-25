import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import heroImage from "../assets/images/jack-pritchard.jpg";
import Twitter from "../assets/images/twitter.svg";
import YouTube from "../assets/images/youtube.svg";

const HeroContainer = styled.div`
	@media screen and (min-width: 768px) {
		display: grid;
		height: 100vh;
		grid-template-columns: 2.7fr 0.2fr 0.2fr 0.9fr;
		grid-template-rows: 1.3fr 0.4fr 0.9fr 1.4fr;
		grid-gap: 0px;
		grid-template-areas: ". . . ." ". . . ." ". . . ." ". . . .";
	}

	& > * {
		align-items: center;
		display: flex;
		justify-content: center;
		min-height: 300px;
		position: relative;
		width: 100%;

		@media screen and (min-width: 768px) {
			min-height: auto;
		}

		& > div {
			padding: 32px;
			width: 100%;
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 0;
	}

	figure {
		margin: 0;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		&:before {
			content: "";
			display: block;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: 1;

			mix-blend-mode: lighten;
			background: #0e0735;
			background: linear-gradient(to right, #0e0735 0%, #bb012d 100%);
			filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0e0735', endColorstr='#bb012d',GradientType=1 );
		}
	}

	figcaption {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2;

		align-items: center;
		color: white;
		display: flex;
		justify-content: center;
		transition: 0.2s all ease;
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const HeroIntro = styled.div`
	grid-area: 1 / 1 / 4 / 4;
`;

const HeroDescription = styled.div`
	background-color: #1c1c1c;
	color: white;
	grid-area: 4 / 1 / 5 / 2;

	> div {
		display: flex;
		div {
			width: 40%;

			& ~ div {
				margin-left: 7.5%;
				width: 22.5%;
			}
		}
	}
`;

const HeroVideos = styled.div`
	grid-area: 4 / 2 / 5 / 3;

	background-color: #ff0000;
	transition: 0.2s all ease;

	&:active,
	&:focus,
	&:hover {
		background-color: #ff2222;

		img {
			max-width: 60%;
		}
	}

	a {
		align-items: center;
		display: flex;
		height: 100%;
		justify-content: center;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}

	img {
		height: auto;
		max-width: 100px;
		position: relative;

		transition: 0.4s all ease;

		@media screen and (min-width: 768px) {
			max-width: 50%;
		}
	}
`;

const HeroTwitter = styled.div`
	grid-area: 4 / 3 / 5 / 4;

	background-color: #1da1f2;
	transition: 0.2s all ease;

	&:active,
	&:focus,
	&:hover {
		background-color: #239eea;

		img {
			max-width: 60%;
		}
	}

	a {
		align-items: center;
		display: flex;
		height: 100%;
		justify-content: center;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}

	img {
		height: auto;
		max-width: 100px;
		position: relative;

		transition: 0.4s all ease;

		@media screen and (min-width: 768px) {
			max-width: 50%;
		}
	}
`;

const HeroNoFace = styled.div`
	grid-area: 4 / 4 / 5 / 5;
`;

const HeroIndustry = styled.div`
	grid-area: 1 / 4 / 2 / 5;

	h1 {
		margin: 0 0 16px;

		font-size: 3rem;
	}

	h2 {
		margin: 0;

		color: #888;
		font-size: 2rem;
	}
`;

const HeroCV = styled.div`
	grid-area: 3 / 4 / 4 / 5;

	background-color: #1c1c1c;
	color: white;
	font-size: 2rem;
`;

const HeroEmail = styled.div`
	grid-area: 2 / 4 / 3 / 5;
	position: relative;

	color: white;
	font-size: 2rem;
	font-weight: 700;

	&:active,
	&:focus,
	&:hover {
	}

	a {
		align-items: center;
		display: flex;
		height: 100%;
		justify-content: center;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;

		background-color: #40b627;
		transition: 0.2s all ease;

		&:active,
		&:focus,
		&:hover {
			background-color: #2fc64b;
		}
	}
`;

const Hero = () => (
	<div>
		<HeroContainer>
			<HeroIntro>
				<figure>
					<img src={heroImage} alt="Jack Pritchard" />
				</figure>
			</HeroIntro>
			<HeroDescription>
				<div>
					<div>
						<h2>About Jack</h2>
						<p>Hey so, uhhh, I'm Jack?</p>
						<p>
							I build websites for businesses to earn money for coffee and food.
						</p>
					</div>
					<div>
						<h2>Developer Languages</h2>
						<p>HTML5, CSS3, JavaScript, PHP, MYSQL, React</p>
					</div>
					<div>
						<h2>About Jack</h2>
						<p>Hey so, uhhh, I'm Jack?</p>
					</div>
				</div>
			</HeroDescription>
			<HeroVideos>
				<a
					href="https://www.youtube.com/channel/UCIOm-HME4V_STS9yWM5aXIg"
					target="_blank"
				>
					<img src={YouTube} alt="YouTube Logo" />
				</a>
			</HeroVideos>
			<HeroTwitter>
				<a href="https://twitter.com/whatjackhasmade" target="_blank">
					<img src={Twitter} alt="YouTube Logo" />
				</a>
			</HeroTwitter>
			<HeroIndustry>
				<div>
					<h1>Jack Pritchard</h1>
					<h2>
						Award Winning <br /> Website Developer
					</h2>
				</div>
			</HeroIndustry>
			<HeroNoFace>
				<div>
					<h2>NoFace Designs</h2>
				</div>
			</HeroNoFace>
			<HeroCV>
				<a src="mailto:jack@noface.co.uk">Email Me</a>
			</HeroCV>
			<HeroEmail>
				<Link to="cv">View my CV</Link>
			</HeroEmail>
		</HeroContainer>
	</div>
);

export default Hero;
