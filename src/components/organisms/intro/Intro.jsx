import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const IntroComponent = styled.section`
	margin: 64px 0 32px;

	color: ${props => props.theme.black};

	@media ${device.xs} {
		margin: 64px 0;
	}

	@media ${device.lg} {
		margin: 96px 0;
	}

	h1 {
		margin: 0 0 24px;
		padding-left: 8px;
		position: relative;

		color: ${props => props.theme.primary};
		font-size: 16px;
		font-weight: 500;
		letter-spacing: 0.1em;
		line-height: 24px;
		text-transform: uppercase;

		&:before {
			content: "";
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 2px;
			background: ${props => props.theme.primary};
		}
	}

	h2 {
		margin: 0 0 24px;

		font-size: 48px;
		line-height: 1;

		@media ${device.lg} {
			font-size: 64px;
		}
	}

	.intro__contents {
		margin: 0 auto 0 0;
		max-width: 624px;
		width: 100%;
	}

	.intro__wrapper {
		margin: 0 auto 0 0;
		max-width: 706px;
		width: 100%;
	}
`;

export default class Intro extends Component {
	render() {
		const { data, heading, subheading } = this.props;

		if (data) {
			return (
				<IntroComponent>
					<div className="intro__wrapper">
						<h1 className="h4">{data.subheading}</h1>
						<h2 className="h1">{data.heading}</h2>
						<div
							className="intro__contents"
							dangerouslySetInnerHTML={{ __html: data.content }}
						/>
					</div>
				</IntroComponent>
			);
		} else {
			return (
				<IntroComponent>
					<div className="intro__wrapper">
						<h1 className="h4">{subheading}</h1>
						<h2 className="h1">{heading}</h2>
						<div className="intro__contents">{this.props.children}</div>
					</div>
				</IntroComponent>
			);
		}
	}
}
