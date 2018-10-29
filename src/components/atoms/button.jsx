import React, { Component } from "react";
import styled from "styled-components";

const Btn = styled.button`
	border-radius: 3px;
	padding: 8px 16px;

	background: none;
	border: 1px solid blue;
	color: blue;
	cursor: pointer;
	transition: 0.2s all ease;

	&:active,
	&:hover,
	&:focus {
		background: blue;
		color: white;
	}
`;

class Button extends Component {
	constructor(props) {
		super(props);
	}

	handleClick(e) {
		console.log("clicked");
	}

	render() {
		return <Btn onClick={e => this.handleClick(e)}>Yo</Btn>;
	}
}

export default Button;
