import React, { Component } from "react";
import styled from "styled-components";

const ArchiveComponent = styled.section`
	ul {
		list-style: none;
	}
`;

export default class Archive extends Component {
	render() {
		return (
			<ArchiveComponent>
				<h2 className="carousel__heading">{heading}</h2>
			</ArchiveComponent>
		);
	}
}
