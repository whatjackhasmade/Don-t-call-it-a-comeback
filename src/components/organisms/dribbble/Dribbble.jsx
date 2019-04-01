import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LogoDribbble from "../../../assets/images/icons/brands/dribbble.svg";

import Intro from "../intro/Intro";

import DribbbleComponent from "./DribbbleStyles";

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
