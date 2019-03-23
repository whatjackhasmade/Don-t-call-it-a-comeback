import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import IconGithub from "../../assets/images/icons/brands/github.svg";
import IconLinkedIn from "../../assets/images/icons/brands/linkedin.svg";
import IconTwitter from "../../assets/images/icons/brands/twitter.svg";
import IconYouTube from "../../assets/images/icons/brands/youtube.svg";

const FooterComponent = styled.footer`
	background: ${props => props.theme.primary};

	.footer__contents {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1506px;
		padding: 90px 30px;
	}

	a {
		align-items: center;
		display: flex;
		justify-content: center;

		color: ${props => props.theme.white};
		font-weight: 400;
		letter-spacing: 1px;
		text-decoration: none;
		text-transform: uppercase;
		transition: 0.2s alle ease;

		+ a {
			margin-top: 8px;
		}

		svg {
			margin-right: 8px;
		}
	}

	nav {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
	}

	svg {
		fill: ${props => props.theme.white};
		width: 24px;
	}
`;

export default class Footer extends Component {
	render() {
		return (
			<FooterComponent>
				<div className="footer__contents">
					<nav>
						<Link to="/">Homepage</Link>
						<Link to="/work">Work</Link>
						<Link to="/insights">Insights</Link>
						<Link to="/about">About</Link>
						<Link to="/services">Services</Link>
					</nav>
					<nav>
						<a href="#">
							<IconTwitter /> Twitter
						</a>
						<a href="#">
							<IconGithub /> Github
						</a>
						<a href="#">
							<IconLinkedIn /> LinkedIn
						</a>
						<a href="#">
							<IconYouTube /> YouTube
						</a>
					</nav>
					<nav>
						<a href="#">Twitter</a>
						<a href="#">Github</a>
						<a href="#">LinkedIn</a>
						<a href="#">YouTube</a>
					</nav>
					<nav>
						<a href="#">Twitter</a>
						<a href="#">Github</a>
						<a href="#">LinkedIn</a>
						<a href="#">YouTube</a>
					</nav>
				</div>
			</FooterComponent>
		);
	}
}
