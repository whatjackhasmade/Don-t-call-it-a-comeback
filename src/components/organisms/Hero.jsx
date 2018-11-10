import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import heroImage from "../../assets/images/jack-pritchard.jpg";
import Twitter from "../../assets/images/twitter.svg";
import YouTube from "../../assets/images/youtube.svg";

const HeroContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}

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
	height: 40vh;

	@media screen and (min-width: 768px) {
		height: 70vh;
		width: 80%;
	}
`;

const HeroDescription = styled.div`
	background-color: rgba(245, 245, 245, 1);
	color: black;

	.emoji {
		display: inline-block;
		margin-right: 8px;
		width: 44px;
		text-align: center;
	}

	li {
		font-size: 3rem;
	}

	ul {
		margin: 32px auto;
		padding: 0;

		list-style: none;
	}

	@media screen and (min-width: 768px) {
		width: 20%;
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
						<h1>Jack Pritchard</h1>
						<h2>Award Winning Web Developer</h2>
					</div>
					<div>
						<h2>Developer Languages</h2>
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
			</HeroDescription>
		</HeroContainer>
	</div>
);

export default Hero;
