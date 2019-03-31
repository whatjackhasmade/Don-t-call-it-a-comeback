import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TestimonialsComponent from "./TestimonialsStyles";
import TestimonialJSON from "./testimonials.json";

import HR from "../../atoms/HR";

const settings = {
	autoplay: true,
	autoplaySpeed: 15000,
	dots: true,
	infinite: true,
	nextArrow: false,
	prevArrow: false,
	speed: 500,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		}
	]
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
							<div
								className="testimonial"
								key={`testimonial-${testimonial.author}`}
							>
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
