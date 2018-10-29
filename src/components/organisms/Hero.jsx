import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import heroImage from "../../assets/images/jack-pritchard.jpg";
import Twitter from "../../assets/images/twitter.svg";
import YouTube from "../../assets/images/youtube.svg";

const HeroContainer = styled.div`
	display: flex;

	& > * {
		align-items: center;
		display: flex;
		justify-content: center;
		min-height: 300px;
		position: relative;

		@media screen and (min-width: 768px) {
			min-height: auto;
		}

		& > div {
			padding: 32px;
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
	height: 70vh;
	width: 80%;
`;

const HeroDescription = styled.div`
	background-color: #1c1c1c;
	color: white;
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
						<h1>Jack Pritchard</h1>
						<h2>
							Award Winning <br /> Website Developer
						</h2>

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
		</HeroContainer>
	</div>
);

export default Hero;
