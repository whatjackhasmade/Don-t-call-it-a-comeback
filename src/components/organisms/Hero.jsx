import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import heroImage from "../../assets/images/jack-pritchard.jpg";
import Twitter from "../../assets/images/twitter.svg";
import YouTube from "../../assets/images/youtube.svg";

// import Button from "../../components/atoms/Button";

var today = new Date();
var curHr = today.getHours();
var touchHr = curHr + 1;
if (touchHr > 13) {
	touchHr -= 12;
	touchHr += "PM";
} else {
	touchHr += "AM";
}
var greeting;

const HeroContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 50vh;
	overflow: hidden;
	position: relative;
	width: 100%;

	background-color: blue;
	background-color: var(--primary);
	text-align: center;

	@media screen and (min-width: 768px) {
		min-height: 90vh;
	}

	&:before {
		content: "";
		display: block;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 1;

		background-color: blue;
		background-color: var(--primary);
		opacity: 0.5;
	}

	& > * {
		position: relative;
		z-index: 2;
	}

	h1,
	h2 {
		background: blue;
		background: var(--primary);
		color: white;

		padding: 0 24px;
	}

	h1 {
		font-size: 32px;
		font-weight: 700;
		letter-spacing: 4px;
		text-transform: uppercase;

		@media screen and (min-width: 768px) {
			font-size: 64px;
		}
	}

	h2 {
		padding: 8px 24px;
	}

	iframe {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		position: absolute;
	}

	.videoWrapper {
		display: none;
		position: absolute;
		padding-bottom: 56.25%; /* 16:9 */
		padding-top: 25px;
		height: 0;
		width: 100%;
		z-index: 0;

		@media screen and (min-width: 768px) {
			display: block;
		}
	}
`;

class Hero extends Component {
	constructor(props) {
		super(props);

		// Bind the this context to the handler function
		this.copyClipboard = this.copyClipboard.bind(this);

		// Set some state
		this.state = {
			count: 0,
			text: "Click here to get my email address"
		};
	}

	componentDidMount() {
		let rootVariables = document.querySelector("html");
		let konamiMode = false;

		if (window.addEventListener) {
			var kkeys = [],
				konami = "38,38,40,40,37,39,37,39";
			window.addEventListener(
				"keydown",
				function(e) {
					kkeys.push(e.keyCode);
					if (kkeys.toString().indexOf(konami) >= 0) {
						kkeys = [];
						if (konamiMode === false) {
							konamiMode = true;
							rootVariables.style.setProperty("--primary", "red");
						} else {
							konamiMode = false;
							let rootVariables = document.querySelector("html");
							rootVariables.style.setProperty("--primary", "blue");
						}
					}
				},
				true
			);
		}
	}

	// This method will be sent to the child component
	copyClipboard() {
		this.setState({
			count: this.state.count + 1
		});

		if (this.state.count === 0) {
			this.setState({
				text: "You now have my email address, I'm trusting you"
			});
		} else if (this.state.count === 1) {
			this.setState({ text: "You can stop clicking now" });
		} else if (this.state.count === 2) {
			this.setState({ text: "You've got what you need, ping me an email" });
		} else if (this.state.count === 3) {
			this.setState({
				text: "We can always touch base at " + touchHr + "?"
			});
		} else if (this.state.count === 4) {
			this.setState({ text: "I guess you think you're funny huh?" });
		} else if (this.state.count === 5) {
			this.setState({ text: "😶" });
		} else {
			this.setState({ text: "📩 - Jack@noface.co.uk" });
		}

		var input = document.createElement("input");
		input.setAttribute("value", "jack@noface.co.uk");
		document.body.appendChild(input);
		input.select();
		var result = document.execCommand("copy");
		document.body.removeChild(input);
		return result;
	}

	render() {
		return (
			<div>
				<HeroContainer>
					<div>
						<h2>Award Winning Web Developer</h2>
						<h1>Jack Pritchard</h1>
						<button class="primary" onClick={this.copyClipboard}>
							{this.state.text}
						</button>
					</div>
					<div class="videoWrapper">
						<iframe
							src="https://www.youtube.com/embed/_674lrm30sY?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&HD=1&frameborder=0&playlist=_674lrm30sY"
							frameborder="0"
							allowfullscreen
						/>
					</div>
				</HeroContainer>
			</div>
		);
	}
}

export default Hero;
