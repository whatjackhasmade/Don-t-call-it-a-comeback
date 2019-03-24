import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const PresentationsComponent = styled.section`
	display: flex;
	margin: 32px 0;
	min-height: 400px;

	@media ${device.xs} {
		margin: 64px 0;
	}

	h3 {
		margin-top: 0;

		font-weight: bold;
		font-size: 24px;
	}

	img {
		display: block;
		width: 100%;
	}

	.presentations__contents {
		max-width: 600px;
		width: 100%;
	}

	.presentations__overflow {
		margin-left: 144px;
		position: relative;
		width: 100%;
	}

	.presentations__events {
		align-items: flex-start;
		display: flex;
		flex: 1;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		width: 1000%;

		a {
			display: block;
			text-decoration: none;
		}

		p {
			margin: 0;
		}
	}

	.presentations__event__meta {
		padding: 16px;
	}

	.presentations__event__thumbnail {
		border-radius: 3px 3px 0 0;
		position: relative;
	}

	.presentations__event__logo {
		height: 32px;
		position: absolute;
		right: -16px;
		top: -16px;
		width: 32px;

		background: #ea4c89;
		border-radius: 50%;
		fill: #c32361;
	}

	.presentations__event {
		border-radius: 0 0 3px 3px;
		width: 250px;

		background: ${props => props.white};
		box-shadow: 0px 2px 6px rgba(20, 18, 19, 0.1);
		opacity: 0;
		transition: 0.2s all ease;

		&:active,
		&:focus,
		&:hover {
			box-shadow: 0px 2px 10px rgba(20, 18, 19, 0.3);
		}

		+ .presentations__event {
			margin-left: 32px;
		}

		&[data-index="0"] {
			opacity: 1;
		}

		&[data-index="1"] {
			opacity: 1;
		}

		&[data-index="2"] {
			opacity: 0.8;
		}

		&[data-index="3"] {
			opacity: 0.5;
		}

		&[data-index="4"] {
			opacity: 0.2;
		}
	}
`;

export default props => (
	<StaticQuery
		query={graphql`
			query {
				allEvent {
					edges {
						node {
							imageFull
							title
						}
					}
				}
			}
		`}
		render={query => <Presentations query={query} {...props} />}
	/>
);

class Presentations extends Component {
	render() {
		const { data, query } = this.props;

		return (
			<PresentationsComponent>
				<div
					className="presentations__contents"
					dangerouslySetInnerHTML={{
						__html: data.content
					}}
				/>
				<div className="presentations__overflow">
					<Events
						className="presentations__events"
						events={query.allEvent.edges}
					/>
				</div>
			</PresentationsComponent>
		);
	}
}

class Events extends Component {
	render() {
		const { events } = this.props;

		return (
			events &&
			events.map((event, index) => (
				<div
					className="presentations__event"
					data-index={index}
					index={index}
					key={event.node.title}
				>
					<img
						alt={event.node.title}
						className="presentations__event__thumbnail"
						src={event.node.imageFull}
					/>
					<div className="presentations__event__meta">
						<h3>{event.node.title}</h3>
					</div>
				</div>
			))
		);
	}
}
