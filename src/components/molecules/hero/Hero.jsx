import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const HeroComponent = styled.section`
	align-items: center;
	display: flex;
	justify-content: center;
	left: 50%;
	margin-left: -50vw;
	min-height: 80vh;
	min-height: ${props => props.height};
	position: relative;
	width: 100vw;

	background: ${props => props.theme.primary};
	color: ${props => props.theme.white};

	@media ${device.xs} {
		min-height: 50vh;
	}

	.hero__contents {
		margin: 0 auto 0 0;
		max-width: 806px;
		width: 100%;
	}

	.hero__wrapper {
		margin: 0 auto;
		max-width: 1506px;
		padding: 30px;
		width: 100%;
	}
`;

export default class Hero extends Component {
	render() {
		return (
			<HeroComponent>
				<div className="hero__wrapper">
					<div className="hero__contents">{this.props.children}</div>
				</div>
			</HeroComponent>
		);
	}
}
