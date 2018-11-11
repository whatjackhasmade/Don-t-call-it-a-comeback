import React, { Component } from "react";
import styled from "styled-components";

const Btn = styled.button`
	border-radius: 3px;
	padding: 8px 16px;

	background: var(--primary);
	border: 1px solid var(--primary);
	color: white;
	cursor: pointer;
	font-size: 2rem;
	font-weight: 700;
	letter-spacing: 1px;
	transition: 0.2s all ease;
	text-transform: uppercase;

	&.secondary {
		border: 1px solid var(--secondary);
		color: var(--secondary);

		&:active,
		&:hover,
		&:focus {
			background: var(--secondary);
			color: white;
		}

		&.active {
			background: var(--secondary);
			color: white;
		}
	}

	&.active {
		background: var(--primary);
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
		return (
			<Btn
				className={this.props.type}
				onClick={e => this.handleClick(e)}
				disabled={this.props.disabled}
			>
				{this.props.text}
			</Btn>
		);
	}
}

export default Button;
