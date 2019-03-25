import React, { Component } from "react";
import { InView } from "react-intersection-observer";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const RowComponent = styled.section`
	align-items: center;
	display: flex;
	margin: 48px 0;

	opacity: 0;
	transform: translateX(-50px);
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
		flex-direction: row-reverse;

		transform: translateX(50px);

		.row__column {
			+ .row__column {
				margin-left: 0;
				margin-right: auto;
			}
		}

		.row__image {
			img {
				transform: translateX(-100%);
			}
		}
	}

	&.row--show {
		opacity: 1;
		transform: translateX(0px);

		.row__image {
			img {
				opacity: 1;
				transform: translateX(0%);
			}
		}
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
		display: block;
		margin-top: 32px;
		height: 400px;
		width: 100%;

		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
		object-fit: cover;

		@media ${device.md} {
			margin-top: 0;
		}
	}

	p:last-of-type {
		margin-bottom: 0;
	}

	.row__column {
		max-width: 50%;
		width: 100%;

		+ .row__column {
			margin-left: auto;
			max-width: 40%;
		}
	}

	.row__image {
		overflow: hidden;

		img {
			opacity: 0;
			transform: translateX(100%);
			transition: 0.6s all ease;
			transition-delay: 0.4s;
		}
	}
`;

export default class Row extends Component {
	prepareContent = content => {
		return content.replace(
			`/wp-content/uploads/`,
			`https://wjhm.noface.app/wp-content/uploads/`
		);
	};

	render() {
		const { id, index, group } = this.props;

		const alignment = index % 2 === 0 ? `left` : `right`;

		return (
			<InView threshold={0.25} triggerOnce={true}>
				{({ inView, ref }) => (
					<RowComponent
						className={
							inView
								? `row row--${alignment} row--show`
								: `row row--${alignment}`
						}
						ref={ref}
					>
						<div className="row__column">
							<div className="row__image">
								<img src={group.media} />
							</div>
						</div>
						<div
							className="row__column"
							dangerouslySetInnerHTML={{
								__html: this.prepareContent(group.content)
							}}
						/>
					</RowComponent>
				)}
			</InView>
		);
	}
}
