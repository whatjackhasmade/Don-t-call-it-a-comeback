import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const RowComponent = styled.section``;

export default class Row extends Component {
	render() {
		return (
			<RowComponent>
				<div className="hero__wrapper">
					<div className="hero__contents">{this.props.children}</div>
				</div>
			</RowComponent>
		);
	}
}
