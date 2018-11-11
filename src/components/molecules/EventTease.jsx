import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Image from "react-image-webp";

const Event = styled.div`
	margin-top: 24px;
	max-width: 100%;
	position: relative;

	@media screen and (min-width: 576px) {
		max-width: 33.333%;
		max-width: calc(33.333% - 16px);
	}

	a,
	img {
		display: block;
	}

	a {
		overflow: hidden;

		&:active,
		&:focus,
		&:hover {
			img {
				transform: scale(1.1);
			}
		}
	}

	img {
		transform: scale(1);
		transition: 0.4s all ease;
	}
`;

class EventTease extends Component {
	render() {
		return (
			<Event className="event--single">
				<a href={this.props.link} target="_blank">
					<Image src={this.props.image} webp={this.props.imageWebP} alt="" />
				</a>
			</Event>
		);
	}
}

export default EventTease;
