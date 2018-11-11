import React, { Component } from "react";
import { Link } from "gatsby";

import Image from "react-image-webp";
import styled from "styled-components";

import imageBackend from "../../assets/images/services/backend.jpg";
import imageCode from "../../assets/images/services/code.jpg";
import imageDesign from "../../assets/images/services/design.jpg";
import imageSpeed from "../../assets/images/services/speed.jpg";
import imageBackendWebP from "../../assets/images/services/backend.webp";
import imageCodeWebP from "../../assets/images/services/code.webp";
import imageDesignWebP from "../../assets/images/services/design.webp";
import imageSpeedWebP from "../../assets/images/services/speed.webp";

const ServicesContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin: 128px;
	margin-left: auto;
	margin-right: auto;
	max-width: 1300px;
	width: 90%;

	background: #fff;
	color: black;

	.service {
		margin-bottom: 16px;
		padding: 32px;
		position: relative;
		width: 100%;

		border-radius: 3px;
		color: white;

		> * {
			position: relative;
			z-index: 2;
		}

		@media screen and (min-width: 576px) {
			padding: 64px;
			width: calc(50% - 8px);

			&:nth-child(odd) {
				margin-left: 16px;
			}
		}

		&:before {
			content: "";
			display: block;
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: 100%;
			z-index: 1;

			background: rgba(0, 0, 255, 0.7);
		}
	}

	.service__image {
		display: block;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 0;

		object-fit: cover;
	}

	svg {
		max-width: 64px;

		color: white;
		fill: white;
	}
`;

class Services extends Component {
	render() {
		return (
			<ServicesContainer>
				<h2>{this.props.title}</h2>
				<div className="service">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
						<path d="M234.8 511.7L196 500.4c-4.2-1.2-6.7-5.7-5.5-9.9L331.3 5.8c1.2-4.2 5.7-6.7 9.9-5.5L380 11.6c4.2 1.2 6.7 5.7 5.5 9.9L244.7 506.2c-1.2 4.3-5.6 6.7-9.9 5.5zm-83.2-121.1l27.2-29c3.1-3.3 2.8-8.5-.5-11.5L72.2 256l106.1-94.1c3.4-3 3.6-8.2.5-11.5l-27.2-29c-3-3.2-8.1-3.4-11.3-.4L2.5 250.2c-3.4 3.2-3.4 8.5 0 11.7L140.3 391c3.2 3 8.2 2.8 11.3-.4zm284.1.4l137.7-129.1c3.4-3.2 3.4-8.5 0-11.7L435.7 121c-3.2-3-8.3-2.9-11.3.4l-27.2 29c-3.1 3.3-2.8 8.5.5 11.5L503.8 256l-106.1 94.1c-3.4 3-3.6 8.2-.5 11.5l27.2 29c3.1 3.2 8.1 3.4 11.3.4z" />
					</svg>
					<h3>Front-end Web Development</h3>
					<p>My primary passion in life is front-end website development.</p>
					<p>
						I take pride in the fact I can turn any design put in front of me to
						functional interfaces that users can put to use.
					</p>
					<Image
						className="service__image"
						src={imageCode}
						webp={imageCodeWebP}
						alt=""
					/>
				</div>
				<div className="service">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M424 400c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24zm-88-24c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm64-144c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm176-72a47.758 47.758 0 0 1-6.438 24A47.758 47.758 0 0 1 512 208v96a47.758 47.758 0 0 1-6.438 24A47.758 47.758 0 0 1 512 352v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96a47.758 47.758 0 0 1 6.438-24A47.758 47.758 0 0 1 0 304v-96a47.758 47.758 0 0 1 6.438-24A47.758 47.758 0 0 1 0 160V64c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v96zm-464 0h416V64H48v96zm416 48H48v96h416v-96zm0 144H48v96h416v-96zm-64-216c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24zm-64 0c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24z" />
					</svg>
					<h3>Back-end Web Development</h3>
					<p>My primary passion in life is front-end website development.</p>
					<p>
						I take pride in the fact I can turn any design put in front of me to
						functional interfaces that users can put to use.
					</p>
					<Image
						className="service__image"
						src={imageBackend}
						webp={imageBackendWebP}
						alt=""
					/>
				</div>
				<div className="service">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path d="M446.34 433.21l-62.35-137.6c2.24-5.77 5.32-11.17 9.72-15.57l12.62-12.62a44.721 44.721 0 0 0 11.57-43.18L413.28 207a44.723 44.723 0 0 1 0-23.14l4.62-17.24a44.715 44.715 0 0 0-11.57-43.18L393.7 110.8a44.688 44.688 0 0 1-11.57-20.04l-4.62-17.24a44.68 44.68 0 0 0-31.61-31.61l-17.24-4.62a44.688 44.688 0 0 1-20.04-11.57L296 13.1a44.716 44.716 0 0 0-43.19-11.58l-17.24 4.62c-3.79 1.02-7.68 1.52-11.57 1.52s-7.78-.51-11.57-1.52l-17.24-4.62A44.716 44.716 0 0 0 152 13.1l-12.62 12.62a44.688 44.688 0 0 1-20.04 11.57l-17.24 4.62a44.68 44.68 0 0 0-31.61 31.61l-4.62 17.24A44.688 44.688 0 0 1 54.3 110.8l-12.62 12.62c-11.29 11.29-15.71 27.76-11.57 43.18l4.62 17.24a44.723 44.723 0 0 1 0 23.14l-4.62 17.24a44.715 44.715 0 0 0 11.57 43.18l12.62 12.62c4.4 4.4 7.48 9.8 9.72 15.57L1.66 433.21c-5.96 13.15 4.85 27.44 20.45 27.44.29 0 .59-.01.88-.02l72.86-2.51 50.13 47.65C150.45 510 156.26 512 162 512c8.53 0 16.92-4.39 20.55-12.4L224 408.13l41.45 91.47c3.63 8.01 12.02 12.4 20.55 12.4 5.75 0 11.56-2 16.01-6.23l50.13-47.65 72.86 2.51c.3.01.59.02.88.02 15.6-.01 26.42-14.29 20.46-27.44zM153.73 446.9l-24.8-23.57-14.6-13.87-20.12.69-29.87 1.03 29.72-65.59c2.59 1.28 5.18 2.57 8.04 3.34l17.24 4.62a44.688 44.688 0 0 1 20.04 11.57l5.78 5.78c8.63 8.63 20.07 13.1 31.63 13.1 1.95 0 3.87-.55 5.81-.8l-28.87 63.7zm23.55-111.76l-3.95-3.96a92.923 92.923 0 0 0-41.56-24l-15.41-4.13-4.13-15.4a92.85 92.85 0 0 0-23.99-41.56l-11.28-11.28 4.13-15.4a92.752 92.752 0 0 0 0-47.99l-4.13-15.4 11.28-11.28a92.87 92.87 0 0 0 24-41.56l4.13-15.4 15.4-4.12a92.81 92.81 0 0 0 41.57-24l11.28-11.28 15.41 4.13a92.52 92.52 0 0 0 23.99 3.16c8.1 0 16.17-1.06 23.99-3.16l15.4-4.13 11.28 11.28a92.812 92.812 0 0 0 41.56 23.99l15.4 4.13 4.13 15.41a92.904 92.904 0 0 0 23.99 41.56l11.28 11.28-4.13 15.42a92.927 92.927 0 0 0 0 47.98l4.13 15.41-11.28 11.28a92.759 92.759 0 0 0-23.99 41.56l-4.13 15.41-15.4 4.13a92.772 92.772 0 0 0-41.57 24l-3.96 3.96a92.613 92.613 0 0 0-46.71-12.63c-16.46-.04-32.55 4.32-46.73 12.59zm176.51 75.01l-20.12-.69-14.6 13.87-24.8 23.57-28.87-63.7c1.94.26 3.86.8 5.81.8 11.55 0 23-4.47 31.63-13.1l5.78-5.78a44.688 44.688 0 0 1 20.04-11.57l17.24-4.62c2.85-.76 5.44-2.06 8.04-3.34l29.72 65.58-29.87-1.02zM320 192c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zm-96 48c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z" />
					</svg>
					<h3>Site Optimisation</h3>
					<p>My primary passion in life is front-end website development.</p>
					<p>
						I take pride in the fact I can turn any design put in front of me to
						functional interfaces that users can put to use.
					</p>
					<Image
						className="service__image"
						src={imageSpeed}
						webp={imageSpeedWebP}
						alt=""
					/>
				</div>
				<div className="service">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
						<path d="M352 0H32C14.33 0 0 14.33 0 32v288c0 35.35 28.65 64 64 64h48v48c0 44.18 35.82 80 80 80s80-35.82 80-80v-48h48c35.35 0 64-28.65 64-64V32c0-17.67-14.33-32-32-32zm-16 48v176H48V48h288zm-16 288h-96v96c0 17.64-14.36 32-32 32s-32-14.36-32-32v-96H64c-8.82 0-16-7.18-16-16v-48h288v48c0 8.82-7.18 16-16 16z" />
					</svg>
					<h3>Website Design</h3>
					<p>My primary passion in life is front-end website development.</p>
					<p>
						I take pride in the fact I can turn any design put in front of me to
						functional interfaces that users can put to use.
					</p>
					<Image
						className="service__image"
						src={imageDesign}
						webp={imageDesignWebP}
						alt=""
					/>
				</div>
			</ServicesContainer>
		);
	}
}

export default Services;
