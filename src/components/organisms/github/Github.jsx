import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

import Intro from "../intro/Intro";

const GithubComponent = styled.section`
	margin: 96px 0;

	@media ${device.xs} {
		margin: 96px 0;
	}

	@media ${device.md} {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.github__calendar {
		margin: 32px auto;
	}

	.intro {
		margin-bottom: 0;
		margin-top: 0;
	}
`;

export default class Github extends Component {
	render() {
		const { data } = this.props;

		return (
			<GithubComponent>
				<Intro
					heading={`Development Activity`}
					subheading={`I love GitHub and open source projects`}
					marginReduced
				/>
				<a
					className="github__calendar"
					href="https://github.com/whatjackhasmade"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img
						src="https://ghchart.rshah.org/whatjackhasmade"
						alt="2016rshah's Github chart"
					/>
				</a>
				<div
					dangerouslySetInnerHTML={{
						__html: data.content
					}}
				/>
			</GithubComponent>
		);
	}
}
