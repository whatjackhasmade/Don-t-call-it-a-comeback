import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const GithubComponent = styled.section`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 32px 0;

	@media ${device.xs} {
		margin: 64px 0;
	}

	@media ${device.md} {
		flex-direction: row;
	}

	@media ${device.lg} {
		margin: 96px 0;
	}

	.github__calendar {
		margin-top: 32px;

		@media ${device.md} {
			margin-left: 144px;
			margin-top: 0;
		}
	}

	.github__contents {
		width: 100%;

		@media ${device.md} {
			max-width: 600px;
		}
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
