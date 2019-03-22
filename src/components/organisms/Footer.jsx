import React, { Component } from "react";
import styled from "styled-components";

const FooterComponent = styled.footer`
	align-items: center;
	display: flex;
`;

export default class Footer extends Component {
	render() {
		return (
			<FooterComponent>
				<nav />
			</FooterComponent>
		);
	}
}
