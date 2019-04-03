import React, { Component } from "react";

import IconAngleRight from "../../../assets/images/icons/solid/angle-right.svg";

import TestimonialsComponent from "./TestimonialsStyles";
import TestimonialJSON from "./testimonials.json";

import HR from "../../atoms/HR";

export default class Testimonials extends Component {
	state = {
		index: 0,
		testimonials: [],
		testimonialsSet: false
	};

	componentDidMount() {
		const JSONArray = TestimonialJSON.testimonials;
		this.setState({ testimonials: JSONArray, testimonialsSet: true });
	}

	nextTestimonial = () => {
		const newIndex = this.state.index + 1;
		if (newIndex === this.state.testimonials.length) {
			this.setState({ index: 0 });
		} else {
			this.setState({ index: newIndex });
		}
	};

	render() {
		const index = this.state.index;

		if (!this.state.testimonialsSet) {
			return null;
		}

		return (
			<TestimonialsComponent>
				<div className="testimonial__media">
					<img src={this.state.testimonials[index].avatar} alt="" />
				</div>
				<button className="testimonial__next" onClick={this.nextTestimonial}>
					Next <IconAngleRight />
				</button>
				<div className="testimonial__single">
					<header className="testimonial__header">
						<div>
							<h3 className="testimonial__author">
								{this.state.testimonials[index].author}
							</h3>
							<h4 className="testimonial__role">
								{this.state.testimonials[index].role}
							</h4>
						</div>
						<img
							className="testimonial__logo"
							src={this.state.testimonials[index].logo}
							alt=""
						/>
					</header>
					<p className="testimonial__quote">
						"{this.state.testimonials[index].testimonial}"
					</p>
				</div>
			</TestimonialsComponent>
		);
	}
}
