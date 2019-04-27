import React, { useEffect, useState } from "react";
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

function Dribbble(props) {
	const { data } = props;
	const [shots, setShots] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const accessToken = `9422ed733294915d402ad516d509f33f618c1ddde539c9fddd94415530e127e3`;
			const dribbbleData = await fetch(
				`https://api.dribbble.com/v2/user/shots?access_token=${accessToken}`
			).then(res => {
				return res.json();
			});
			return dribbbleData;
		}

		fetchData().then(data => setShots(data));
	});

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
				{shots !== [] &&
					shots.map((shot, index) => (
						<Shot index={index} key={shot.id} shot={shot} />
					))}
			</Slider>
		</DribbbleComponent>
	);
}

function Shot({ index, key, shot }) {
	const [mouseOver, setMouseOver] = useState(false);

	const handleHover = e => {
		setMouseOver(!mouseOver);
	};

	return (
		<div
			className={
				mouseOver ? `dribbble__shot dribbble__shot--animate` : `dribbble__shot`
			}
			index={index}
			data-index={index}
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
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

export default Dribbble;
