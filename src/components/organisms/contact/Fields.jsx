import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const ContactFormComponent = styled.form`
	max-height: 100%;
	overflow: hidden;
	transition: all 1s ease;

	&.contact__form--hidden {
		max-height: 0;
	}

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
`;

export default class ContactForm extends Component {
	render() {
		const {
			bot,
			company,
			handleChange,
			handleSubmit,
			name,
			email,
			message,
			submitted
		} = this.props;

		return (
			<ContactFormComponent
				name="contact"
				method="post"
				data-netlify="true"
				data-netlify-honeypot="bot"
				onSubmit={e => handleSubmit(e)}
				className={
					!submitted ? `contact__form` : `contact__form contact__form--hidden`
				}
			>
				<input
					type="hidden"
					name="bot"
					id="bot"
					onChange={handleChange}
					value={bot}
				/>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					onChange={handleChange}
					value={name}
				/>
				<label htmlFor="email">Email</label>
				<input
					type="text"
					name="email"
					id="email"
					onChange={handleChange}
					value={email}
				/>
				<label htmlFor="company">Company</label>
				<input
					type="text"
					name="company"
					id="company"
					onChange={handleChange}
					value={company}
				/>
				<label htmlFor="message">Tell Me About Your Project</label>
				<textarea
					name="message"
					id="message"
					rows="6"
					onChange={handleChange}
					value={message}
				/>
				<button type="submit" value="Send Message">
					Send Message
				</button>
			</ContactFormComponent>
		);
	}
}
