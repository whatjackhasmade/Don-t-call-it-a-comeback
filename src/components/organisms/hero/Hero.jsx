import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

import Duotone from "./Duotone";

const HeroComponent = styled.section`
	align-items: center;
	display: flex;
	justify-content: center;
	left: 50%;
	margin-left: -50vw;
	min-height: 80vh;
	min-height: ${props => props.height};
	overflow: hidden;
	position: relative;
	width: 100vw;
	z-index: 9;

	background: ${props =>
		props.background ? props.background : props.theme.primary};
	color: ${props => props.theme.white};
	text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

	@media ${device.xs} {
		min-height: 50vh;
	}

	a {
		color: ${props => props.theme.white};
		text-decoration: none;

		&:active,
		&:focus,
		&:hover {
			text-decoration: underline;
		}
	}

	h4 {
		font-size: 18px;
		font-weight: 500;
		line-height: 28px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.hero__contents {
		margin: 0 auto 0 0;
		max-width: 806px;
		position: relative;
		width: 100%;
		z-index: 3;
	}

	.duotone,
	.duotone img,
	.hero__media,
	.hero__media img {
		display: none;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 1;

		object-fit: cover;

		@media ${device.md} {
			display: block;
		}
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
		const { data, media } = this.props;

		const background =
			data && data.background_colour ? data.background_colour : `#0652DD`;

		return (
			<HeroComponent background={background}>
				<div className="hero__wrapper">
					{data && data.content ? (
						<div
							className="hero__contents"
							dangerouslySetInnerHTML={{ __html: data.content }}
						/>
					) : (
						<div className="hero__contents">{this.props.children}</div>
					)}
					{media && (
						<Duotone
							className="hero__media"
							highlight={props => props.theme.primary}
							shadow={`#000`}
						>
							<img src={media} alt="" />
						</Duotone>
					)}
				</div>
			</HeroComponent>
		);
	}
}
