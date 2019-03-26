import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const GithubComponent = styled.section`
	align-items: center;
	display: flex;
	justify-content: center;
	margin: 32px 0;

	@media ${device.xs} {
		margin: 64px 0;
	}

	@media ${device.lg} {
		margin: 96px 0;
	}

	.github__calendar {
		margin-left: 144px;
	}

	.github__contents {
		max-width: 600px;
		width: 100%;
	}
`;

export default class Github extends Component {
	render() {
		const { data } = this.props;

		return (
			<GithubComponent>
				<div
					className="github__contents"
					dangerouslySetInnerHTML={{
						__html: data.content
					}}
				/>
				<div className="github__calendar" target="_blank">
					<a href="https://github.com/whatjackhasmade">
						<img
							src="https://ghchart.rshah.org/whatjackhasmade"
							alt="2016rshah's Github chart"
						/>
					</a>
				</div>
			</GithubComponent>
		);
	}
}
