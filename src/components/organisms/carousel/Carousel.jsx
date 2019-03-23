import React, { Component } from "react";
import styled from "styled-components";

const CarouselComponent = styled.section`
	.carousel__heading {
		color: ${props => props.theme.grey600};
		font-weight: 500;
		font-size: 18px;
		line-height: 28px;
		text-align: center;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}
`;

export default class Carousel extends Component {
	render() {
		const { heading } = this.props;

		return (
			<CarouselComponent>
				<h2 className="carousel__heading">{heading}</h2>
			</CarouselComponent>
		);
	}
}
