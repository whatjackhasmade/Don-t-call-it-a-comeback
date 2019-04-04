import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IconAngleRight from "../../../assets/images/icons/solid/angle-right.svg";

import TestimonialsComponent from "./TestimonialsStyles";

const settings = {
	draggable: false,
	infinite: true,
	lazyLoad: true,
	nextArrow: false,
	prevArrow: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 1000
};

export default class Testimonials extends Component {
	state = {
		testimonials: [],
		testimonialsSet: false
	};

	componentDidMount() {
		const { data } = this.props;

		const testimonials = data.testimonials;
		this.setState({ testimonials, testimonialsSet: true });
	}

	nextTestimonial = () => {
		this.slider.slickNext();
		this.sliderTestimonials.slickNext();
	};

	render() {
		if (!this.state.testimonialsSet) {
			return null;
		}

		return (
			<TestimonialsComponent>
				<div className="testimonial__media">
					<Slider ref={c => (this.slider = c)} {...settings}>
						{this.state.testimonials.map((testimonial, index) => (
							<img
								src={testimonial.media.full}
								alt={testimonial.author}
								key={testimonial.author}
							/>
						))}
					</Slider>
				</div>
				<button className="testimonial__next" onClick={this.nextTestimonial}>
					Next <IconAngleRight />
				</button>
				<div className="testimonials">
					<Slider ref={c => (this.sliderTestimonials = c)} {...settings}>
						{this.state.testimonials.map((testimonial, index) => (
							<div
								className="testimonial"
								key={`testimonial-${testimonial.author}`}
							>
								<header className="testimonial__header">
									<div>
										<h3 className="testimonial__author">
											{testimonial.author}
										</h3>
										<h4 className="testimonial__role">{testimonial.role}</h4>
									</div>
									<img
										className="testimonial__logo"
										src={testimonial.logo.full}
										alt=""
									/>
								</header>
								<p className="testimonial__quote">
									"{testimonial.testimonial}"
								</p>
							</div>
						))}
					</Slider>
				</div>
			</TestimonialsComponent>
		);
	}
}
