import React, { Component } from "react";
import { InView } from "react-intersection-observer";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const RowComponent = styled.section`
	align-items: center;
	display: flex;
	margin: 48px 0;

	opacity: 0;
	transform: translateX(-100px);
	transition: 0.6s all ease;

	@media ${device.sm} {
		margin: 64px 0;
	}

	@media ${device.xl} {
		margin: 128px 0;
	}

	@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
		opacity: 1;
		transform: translateX(0px);
	}

	&.row--right {
		transform: translateX(100px);
	}

	&.row--show {
		opacity: 1;
		transform: translateX(0px);
	}

	h1 {
		margin-top: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		@media ${device.md} {
			margin-top: 0;
		}

		p + & {
			margin-top: 24px;
		}
	}

	img {
		margin-top: 32px;
		max-height: 400px;
		width: 100%;

		object-fit: cover;

		@media ${device.md} {
			margin-top: 0;
		}
	}

	p:last-of-type {
		margin-bottom: 0;
	}

	+ .row {
		flex-direction: row-reverse;

		.row__column {
			+ .row__column {
				margin-left: 0;
				margin-right: auto;
			}
		}
	}

	.row__column {
		max-width: 40%;

		+ .row__column {
			margin-left: auto;
			max-width: 50%;
		}
	}
`;

export default class Row extends Component {
	render() {
		const { index, name, rows } = this.props;

		return (
			<InView threshold={0.25} triggerOnce={true}>
				{({ inView, ref }) => (
					<RowComponent className={inView ? `row row--show` : `row`} ref={ref}>
						<div className="row__column">
							<h2>User Experience Design</h2>
							<p>
								Our archived collection of discussions on current events and
								topics related to our industry. Join in the conversation and let
								us know what you think.
							</p>
							<p>
								Our archived collection of discussions on current events and
								topics related to our industry. Join in the conversation and let
								us know what you think.
							</p>
							<p>
								Our archived collection of discussions on current events and
								topics related to our industry. Join in the conversation and let
								us know what you think.
							</p>
							<p>
								Our archived collection of discussions on current events and
								topics related to our industry. Join in the conversation and let
								us know what you think.
							</p>
						</div>
						<div className="row__column">
							<img src="https://placehold.it/1000x1000" alt="" />
						</div>
						{/* {Object.keys(rows).map(column => (
							<div
								className="row__column"
								dangerouslySetInnerHTML={{
									__html: rows[column].content
								}}
							/>
						))} */}
					</RowComponent>
				)}
			</InView>
		);
	}
}
