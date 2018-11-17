import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const BannerContainer = styled.section`
	align-items: center;
	display: flex;
	min-height: 400px;
	min-height: 90vh;
	position: relative;
	width: 100%;

	&:before {
		content: "";
		display: block;
		/* display: ${props => (props.overlay ? "block" : "none")}; */
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 1;

		background: rgba(0,0,0, 0.6);
	}

	.banner__content {
		margin: 0 auto;
		max-width: 600px;
		position: relative;
		z-index: 2;

		color: white;

		/* color: ${props => (props.overlay ? "white" : "black")}; */
	}

	img,
	picture {
		object-fit: cover;
	}

	img,
	picture {
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}
`;

class Hero extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<BannerContainer>
					<div className="banner__content">{this.props.children}</div>
					<picture>
						<img src={this.props.image} />
					</picture>
				</BannerContainer>
			</React.Fragment>
		);
	}
}

export default Hero;
