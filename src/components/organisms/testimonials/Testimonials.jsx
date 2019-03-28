import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { device } from "../../particles/MediaQueries";

import TestimonialJSON from "./testimonials.json";

import HR from "../../atoms/HR";

const TestimonialsComponent = styled.section`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin: 0 0 48px;

	@media ${device.sm} {
		margin: 0 0 64px;
	}

	@media ${device.md} {
		flex-direction: row;
		margin: 0 0 128px;
	}

	@media ${device.xl} {
		margin: 0 0 160px;
	}

	.slick-slider {
		width: 100%;
	}

	.slick-list {
		margin: 0 -32px;
	}

	.slick-slide {
		@media ${device.md} {
			padding: 32px;
		}
	}

	.slick-dots {
		bottom: -48px;
	}

	.testimonial__author {
		display: block;
		margin-top: 8px;

		font-family: ${props => props.theme.fontSecondary};
		font-size: 24px;
		font-style: italic;
	}

	.testimonial__content {
		display: block;
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
	slidesToShow: 2,
	slidesToScroll: 1
};

export default class Testimonials extends Component {
	render() {
		const JSONArray = TestimonialJSON.testimonials;

		return (
			<>
				<HR />
				<TestimonialsComponent>
					<Slider {...settings}>
						{JSONArray.map(testimonial => (
							<div className="testimonial">
								<span className="testimonial__content">
									"{testimonial.testimonial}"
								</span>
								<span className="testimonial__author">
									{testimonial.author}
								</span>
							</div>
						))}
					</Slider>
				</TestimonialsComponent>
			</>
		);
	}
}
