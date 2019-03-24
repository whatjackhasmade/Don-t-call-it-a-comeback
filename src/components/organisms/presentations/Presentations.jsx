import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const PresentationsComponent = styled.section`
	align-items: center;
	display: flex;
	justify-content: center;
	margin: 32px 0;

	@media ${device.xs} {
		margin: 64px 0;
	}

	.presentations__contents {
		max-width: 600px;
		width: 100%;
	}

	.presentations__items {
		margin-left: 144px;
	}
`;

export default class Presentations extends Component {
	render() {
		const { data } = this.props;

		return (
			<PresentationsComponent>
				<div
					className="presentations__contents"
					dangerouslySetInnerHTML={{
						__html: data.content
					}}
				/>
			</PresentationsComponent>
		);
	}
}
