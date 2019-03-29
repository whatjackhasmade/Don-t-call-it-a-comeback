import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { device } from "../../particles/MediaQueries";

import Intro from "../intro/Intro";

const PresentationsComponent = styled.section`
	margin: 32px 0;

	@media ${device.xs} {
		margin: 64px 0;
	}

	@media ${device.lg} {
		margin: 96px 0;
	}

	a {
		color: inherit;
	}

	h3 {
		margin-top: 0;

		font-weight: bold;
		font-size: 24px;
	}

	img {
		display: block;
		max-height: 175px;
		width: 100%;

		object-fit: cover;
	}

	.presentations__events {
		align-items: flex-start;
		display: flex;
		flex: 1;
		height: 100%;
		position: relative;
		left: 0;
		top: 0;

		a {
			display: block;
			text-decoration: none;
		}

		p {
			margin: 0;
		}
	}

	.presentations__event__meta {
		padding: 16px;
	}

	.presentations__event__thumbnail {
		border-radius: 3px 3px 0 0;
		position: relative;
	}

	.presentations__event__logo {
		height: 32px;
		position: absolute;
		right: -16px;
		top: -16px;
		width: 32px;

		background: #ea4c89;
		border-radius: 50%;
		fill: #c32361;
	}

	.presentations__event {
		border-radius: 0 0 3px 3px;

		background: ${props => props.white};
		box-shadow: 0px 2px 6px rgba(20, 18, 19, 0.1);
		transition: 0.2s all ease;

		&:active,
		&:focus,
		&:hover {
			box-shadow: 0px 2px 10px rgba(20, 18, 19, 0.3);
		}
	}

	.subheading {
		margin: 0 0 8px;

		color: ${props => props.theme.primary};
		font-size: 10px;
		font-weight: 500;
		letter-spacing: 0.1em;
		line-height: 1.2;
		text-transform: uppercase;
	}

	.slick-slider {
		padding: 0 0 8px;
		width: 100%;

		cursor: grab;
	}

	.slick-list {
		margin: 0 -16px;
	}

	.slick-slide {
		padding: 0 16px;

		@media ${device.md} {
			padding: 16px;
		}
	}
`;

export default props => (
	<StaticQuery
		query={graphql`
			query {
				allEvent {
					edges {
						node {
							id
							imageFull
							title
							venue
						}
					}
				}
			}
		`}
		render={query => <Presentations query={query} {...props} />}
	/>
);

const settings = {
	autoplay: true,
	autoplaySpeed: 5000,
	dots: true,
	infinite: true,
	nextArrow: false,
	prevArrow: false,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1440,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
};

class Presentations extends Component {
	render() {
		const { data, query } = this.props;

		return (
			<PresentationsComponent>
				<Intro
					heading={`Event Presentations`}
					subheading={`Touring the south coast`}
					marginReduced
				>
					<div dangerouslySetInnerHTML={{ __html: data.content }} />
				</Intro>
				<Slider {...settings}>
					{query.allEvent.edges !== [] &&
						query.allEvent.edges.map((event, index) => (
							<Event
								index={index}
								key={event.id}
								event={event}
								venue={event.node.venue}
							/>
						))}
				</Slider>
			</PresentationsComponent>
		);
	}
}

class Event extends Component {
	render() {
		const { index, event, venue } = this.props;

		return (
			<div
				className="presentations__event"
				data-index={index}
				index={index}
				key={`${event.node.title}-${index}`}
			>
				<img
					alt={event.node.title}
					className="presentations__event__thumbnail"
					src={event.node.imageFull}
				/>
				<div className="presentations__event__meta">
					<h5 className="subheading">{venue}</h5>
					<h3>{event.node.title}</h3>
				</div>
			</div>
		);
	}
}
