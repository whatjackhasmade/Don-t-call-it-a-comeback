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
		display: inline-flex;
		margin: 16px 0 0;
		padding: 16px 24px;

		background-color: ${props => props.theme.white};
		border: none;
		box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
		color: ${props => props.theme.primary};
		cursor: pointer;
		font-weight: 700;
		line-height: 1;
		outline: none;
		text-decoration: none;
		transition: all 0.15s ease;
		white-space: nowrap;

		&:active,
		&:focus,
		&:hover {
			box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
				0 3px 6px rgba(0, 0, 0, 0.08);
		}

		&:hover {
			transform: translateY(-1px);
		}

		+ a {
			@media ${device.xs} {
				margin-left: 8px;
			}
		}

		@media ${device.MXxs} {
			justify-content: center;
			width: 100%;
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
		max-width: 686px;
		position: relative;
		width: 100%;
		z-index: 3;
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
		const { data, duotone, media, overlay } = this.props;

		const background =
			data && data.background_colour ? data.background_colour : `#0652DD`;

		const overlayBoolean = overlay === "1";

		return (
			<HeroComponent background={background} overlay={overlayBoolean}>
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
						<HeroMedia
							duotone={duotone}
							media={media}
							overlay={overlayBoolean}
						/>
					)}
				</div>
			</HeroComponent>
		);
	}
}

const HeroMediaComponent = styled.div`
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 1;

	@media ${device.md} {
		&:before {
			content: "";
			display: block;
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: 100%;
			z-index: 2;

			background: ${props =>
				props.background ? props.background : props.theme.primary};
			opacity: ${props => (props.overlay ? `0.7` : `0`)};
		}
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
`;

class HeroMedia extends Component {
	render() {
		const { duotone, media, overlay } = this.props;

		if (duotone) {
			return (
				<HeroMediaComponent overlay={overlay}>
					<Duotone
						className="hero__media"
						highlight={props => props.theme.primary}
						shadow={`#000`}
					>
						<img src={media} alt="" />
					</Duotone>
				</HeroMediaComponent>
			);
		} else {
			return (
				<HeroMediaComponent overlay={overlay}>
					<img src={media} alt="" />
				</HeroMediaComponent>
			);
		}
	}
}
