import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import IconGithub from "../../assets/images/icons/brands/github.svg";
import IconLinkedIn from "../../assets/images/icons/brands/linkedin.svg";
import IconTwitter from "../../assets/images/icons/brands/twitter.svg";
import IconYouTube from "../../assets/images/icons/brands/youtube.svg";

const FooterComponent = styled.footer`
	background: ${props => props.theme.offWhite};
	color: ${props => props.theme.black};

	.footer__contents {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1506px;
		padding: 90px 30px;
		width: 100%;
	}

	a {
		align-items: center;
		display: flex;
		justify-content: center;

		color: ${props => props.theme.black};
		font-weight: 400;
		text-decoration: none;
		transition: 0.2s all ease;

		svg {
			margin-right: 8px;
		}
	}

	nav {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	svg {
		fill: ${props => props.theme.black};
		width: 24px;

		transition: 0.2s all ease;

		&:active,
		&:focus,
		&:hover {
			fill: ${props => props.theme.grey400};
		}
	}

	.footer__arrow {
		height: 2px;
		position: relative;
		width: 60px;

		background: ${props => props.theme.black};
		transition: 0.2s all ease;

		&:after {
			content: "";
			display: block;
			height: 16px;
			position: absolute;
			right: 0;
			top: -7px;
			width: 16px;

			border: 2px solid ${props => props.theme.black};
			border-bottom: none;
			border-left: none;
			transform: rotate(45deg);
		}
	}

	.footer__contact {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		margin-left: 16px;

		font-size: 12px;

		* + * {
			margin-top: 8px;
		}

		a {
			font-size: 16px;
			font-weight: 500;
		}
	}

	.footer__cta {
		&:active,
		&:focus,
		&:hover {
			.footer__arrow {
				transform: translateX(32px);
			}
		}
	}

	.footer__cta__content {
		display: flex;
		flex-direction: column;
		margin-left: 64px;
	}

	.footer__name {
		font-size: 36px;
		font-weight: 900;
		text-transform: uppercase;
	}

	.footer__social {
		font-size: 0px;

		a {
			+ a {
				margin-left: 8px;
			}
		}
	}

	.footer__tagline {
		font-style: italic;
		font-size: 24px;
		line-height: 32px;
		font-family: "Baskerville", "Times New Roman", Times, serif;
	}
`;

export default class Footer extends Component {
	render() {
		return (
			<FooterComponent>
				<div className="footer__contents">
					<nav className="footer__cta">
						<a href="mailto:jack@noface.co.uk">
							<div className="footer__arrow" />
							<div className="footer__cta__content">
								<span className="footer__tagline">
									Always available for a chat
								</span>
								<span className="footer__name">Jack Pritchard</span>
							</div>
						</a>
					</nav>
					<nav className="footer__contact">
						<span>Southampton, United Kingdom</span>
						<a href="tel:07393 357520">07393 357520</a>
						<a href="mailto:jack@noface.co.uk">jack@noface.co.uk</a>
					</nav>
					<nav className="footer__social">
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
				</div>
			</FooterComponent>
		);
	}
}
