import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const IntroComponent = styled.section`
	margin: ${props =>
		props.marginReduced === true ? `64px 0 32px 0` : `32px 0 16px`};

	color: ${props => props.theme.black};

	@media ${device.xs} {
		margin: ${props => (props.marginReduced === true ? `64px 0` : `32px 0`)};
	}

	@media ${device.lg} {
		margin: ${props => (props.marginReduced === true ? `96px 0` : `48px 0`)};
	}

	h1,
	.intro__subheading {
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

		@media ${device.sm} {
			padding-left: 12px;
		}
	}

	.intro__heading {
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
		const { data, heading, index, marginReduced, subheading } = this.props;

		const Subheading = index === 0 ? `h1` : `h2`;
		const Heading = index === 0 ? `h2` : `h3`;

		if (data) {
			return (
				<IntroComponent
					className="intro"
					marginReduced={marginReduced ? false : true}
				>
					<div className="intro__wrapper">
						<Subheading className="h4 intro__subheading">
							{data.subheading}
						</Subheading>
						<Heading className="h1 intro__heading">{data.heading}</Heading>
						<div
							className="intro__contents"
							dangerouslySetInnerHTML={{ __html: data.content }}
						/>
					</div>
				</IntroComponent>
			);
		} else {
			return (
				<IntroComponent
					className="intro"
					marginReduced={marginReduced ? false : true}
				>
					<div className="intro__wrapper">
						<Subheading className="h4 intro__subheading">
							{subheading}
						</Subheading>
						<Heading className="h1 intro__heading">{heading}</Heading>
						<div className="intro__contents">{this.props.children}</div>
					</div>
				</IntroComponent>
			);
		}
	}
}
