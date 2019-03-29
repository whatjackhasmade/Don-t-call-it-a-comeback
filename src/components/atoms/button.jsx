import React, { Component } from "react";
import styled from "styled-components";

const Btn = styled.button`
	display: inline-flex;
	padding: 16px 24px;

	background-color: ${props => props.theme.primary};
	border: none;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	color: ${props => props.theme.white};
	cursor: pointer;
	font-weight: 700;
	line-height: 1;
	outline: none;
	text-decoration: none;
	transition: all 0.15s ease;
	white-space: nowrap;

	&:hover {
		transform: translateY(-1px);
	}

	&:focus,
	&:hover {
		box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
	}

	&.active {
		background: ${props => props.theme.primary};
		color: white;
	}

	&.secondary {
		border: 1px solid ${props => props.theme.secondary};
		color: ${props => props.theme.secondary};

		&:active,
		&:hover,
		&:focus {
			background: ${props => props.theme.secondary};
			color: white;
		}

		&.active {
			background: ${props => props.theme.secondary};
			color: white;
		}
	}
`;

export default class Button extends Component {
	render() {
		const { className, disabled, onClick, text, type } = this.props;

		return (
			<Btn
				className={`${className} ${type}`}
				onClick={onClick}
				disabled={disabled}
			>
				{this.props.children}
			</Btn>
		);
	}
}
