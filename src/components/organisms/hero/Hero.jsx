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
	z-index: 9;

	background: ${props =>
		props.background ? props.background : props.theme.primary};
	color: ${props => props.theme.white};

	@media ${device.xs} {
		min-height: 50vh;
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
		const { data } = this.props;

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
				</div>
			</HeroComponent>
		);
	}
}
