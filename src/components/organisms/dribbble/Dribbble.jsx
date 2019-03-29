import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { device } from "../../particles/MediaQueries";

import LogoDribbble from "../../../assets/images/icons/brands/dribbble.svg";

import Intro from "../intro/Intro";

// Create the keyframes
const bounce = keyframes`
  from {
    transform: translateY(0px);
  }

	50% {
    transform: translateY(-50px);
	}

  to {
    transform: translateY(0px);
  }
`;

const DribbbleComponent = styled.section`
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
		width: 100%;
	}

	.dribbble__shots {
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

	@media ${device.md} {
		.dribbble__shot--animate {
			.dribbble__shot__logo {
				animation: ${bounce} 0.3s ease infinite;
				animation-iteration-count: 1;
			}
		}
	}

	.dribbble__shot__meta {
		padding: 16px;
	}

	.dribbble__shot__thumbnail {
		border-radius: 3px 3px 0 0;
		position: relative;
	}

	.dribbble__shot__logo {
		height: 32px;
		position: absolute;
		right: -16px;
		top: -16px;
		width: 32px;

		background: #ea4c89;
		border-radius: 50%;
		fill: #c32361;
	}

	.dribbble__shot {
		border-radius: 0 0 3px 3px;

		background: ${props => props.white};
		box-shadow: 0px 2px 6px rgba(20, 18, 19, 0.1);
		transition: 0.2s all ease;

		&:active,
		&:focus,
		&:hover {
			box-shadow: 0px 2px 10px rgba(20, 18, 19, 0.3);
		}

		+ .dribbble__shot {
			margin-left: 32px;
		}
	}

	.slick-slider {
		padding: 0 0 16px;
		width: 100%;

		cursor: grab;
	}

	.slick-list {
		margin: 0 -32px;
	}

	.slick-slide {
		padding: 0 32px;

		@media ${device.md} {
			padding: 32px;
		}
	}
`;

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

export default class Dribbble extends Component {
	state = {
		index: 0,
		shots: []
	};

	async componentDidMount() {
		const accessToken = `9422ed733294915d402ad516d509f33f618c1ddde539c9fddd94415530e127e3`;
		const dribbbleData = await fetch(
			`https://api.dribbble.com/v2/user/shots?access_token=${accessToken}`
		).then(res => {
			return res.json();
		});

		this.setState({ shots: dribbbleData });
	}

	next() {
		this.setState({ index: this.state.index + 1 });
	}

	prev() {
		this.setState({ index: this.state.index - 1 });
	}

	render() {
		const { data } = this.props;

		return (
			<DribbbleComponent>
				<Intro
					heading={`Interface Designs`}
					subheading={`My Dribbble Shots`}
					marginReduced
				>
					<div dangerouslySetInnerHTML={{ __html: data.content }} />
				</Intro>
				<Slider {...settings}>
					{this.state.shots !== [] &&
						this.state.shots.map((shot, index) => (
							<Shot index={index} key={shot.id} shot={shot} />
						))}
				</Slider>
			</DribbbleComponent>
		);
	}
}

class Shot extends Component {
	state = {
		mouseOver: false
	};

	handleHover = e => {
		this.setState({ mouseOver: !this.state.mouseOver });
	};

	render() {
		const { index, shot } = this.props;

		return (
			<div
				className={
					this.state.mouseOver
						? `dribbble__shot dribbble__shot--animate`
						: `dribbble__shot`
				}
				index={index}
				data-index={index}
				onMouseEnter={this.handleHover}
				onMouseLeave={this.handleHover}
			>
				<a
					className="dribbble__shot__thumbnail"
					href={shot.html_url}
					rel="noopener noreferrer"
					target="_blank"
				>
					<LogoDribbble className="dribbble__shot__logo" />
					<img alt={shot.title} src={shot.images.teaser} />
				</a>
				<div className="dribbble__shot__meta">
					<a href={shot.html_url} rel="noopener noreferrer" target="_blank">
						<h3>{shot.title}</h3>
					</a>
					<div
						className="shot__description"
						dangerouslySetInnerHTML={{ __html: shot.description }}
					/>
				</div>
			</div>
		);
	}
}
