import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

import ContactForm from "./Fields";

const ContactComponent = styled.section`
	margin-top: 32px;
	left: 50%;
	margin-left: -50vw;
	position: relative;
	width: 100vw;
	z-index: 9;

	background-color: ${props => props.theme.primary};
	color: ${props => props.theme.white};

	button {
		@media ${device.MXxs} {
			justify-content: center;
		}
	}

	h2,
	p {
		text-align: center;
	}

	.contact__wrapper {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin: 0 auto;
		max-width: 806px;
		padding: 45px 30px;
		position: relative;
	}
`;

const encode = data => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};

export default class Contact extends Component {
	state = {
		bot: "",
		company: "",
		elementHeight: 0,
		email: "",
		firstname: "",
		lastname: "",
		message: "",
		submitted: false
	};

	/* Here’s the juicy bit for posting the form submission */

	handleSubmit = e => {
		e.preventDefault();

		if (this.state.bot !== "") alert("You've entered the bot field with data");

		console.log("handleSubmit");

		fetch("/", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: encode({
				"form-name": "contact",
				...this.state
			})
		})
			.then(() => this.setState({ submitted: true }))
			.catch(error => alert(error));
	};

	handleChange = e =>
		this.setState({
			[e.target.name]: e.target.value
		});

	render() {
		return (
			<ContactComponent>
				<div className="contact__wrapper">
					<h2>
						{!this.state.submitted
							? `Tell Me About Your Project`
							: `Awesome, I've Got The Info`}
					</h2>
					{this.state.submitted && (
						<p>
							I'll send you an email in the next few hours and we can go from
							there{" "}
							<span role="img" aria-label="smiling face">
								😊
							</span>
						</p>
					)}
					<ContactForm
						bot={this.state.bot}
						company={this.state.company}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
						email={this.state.email}
						firstname={this.state.firstname}
						lastname={this.state.lastname}
						message={this.state.message}
						submitted={this.state.submitted}
					/>
				</div>
			</ContactComponent>
		);
	}
}
