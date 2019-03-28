import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const ContactComponent = styled.form`
	left: 50%;
	margin-left: -50vw;
	position: relative;
	width: 100vw;
	z-index: 9;

	background-color: ${props => props.theme.primary};
	color: ${props => props.theme.white};

	button {
		margin: 24px 0 16px;
		padding: 16px 24px;
		width: 100%;

		background-color: ${props => props.theme.white};
		border: none;
		box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
		color: ${props => props.theme.primary};
		cursor: pointer;
		font-weight: 700;
		line-height: 1;
		outline: none;
		text-align: center;
		text-decoration: none;
		transition: all 0.15s ease;
		white-space: nowrap;

		&:active,
		&:focus,
		&:hover {
			transform: translateY(-1px);
			box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
				0 3px 6px rgba(0, 0, 0, 0.08);
		}

		@media ${device.xs} {
			display: flex;
			width: auto;

			text-align: left;
		}
	}

	button,
	input,
	label,
	textarea {
		border-radius: 3px;
	}

	input,
	label,
	textarea {
		display: block;
		width: 100%;
	}

	input,
	textarea {
		padding: 16px;

		border: none;
	}

	label {
		margin: 16px 0 8px;

		font-weight: 500;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	h2 {
		text-align: center;
	}

	.contact__wrapper {
		margin: 0 auto;
		max-width: 806px;
		padding: 45px 30px;
	}
`;

export default class Contact extends Component {
	render() {
		return (
			<ContactComponent
				name="contact"
				method="post"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
			>
				<div className="contact__wrapper">
					<h2>Got a Project In Mind?</h2>
					<input type="hidden" name="bot-field" />
					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name" />
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" />
					<label htmlFor="message">Message</label>
					<textarea name="message" id="message" rows="6" />
					<button type="submit" value="Send Message">
						Send Message
					</button>
				</div>
			</ContactComponent>
		);
	}
}
