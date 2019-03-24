import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

import Logo from "../../../assets/images/logo/logo.svg";
import IconBars from "../../../assets/images/icons/solid/bars.svg";

const HeaderComponent = styled.header`
	background: white;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

	a,
	button {
		padding: 8px;
		position: relative;

		color: ${props => props.theme.grey600};
		font-weight: 500;
		letter-spacing: 1px;
		text-decoration: none;
		text-transform: uppercase;
		transition: 0.2s alle ease;

		&[aria-current="page"],
		&:active,
		&:focus,
		&:hover {
			color: ${props => props.theme.black};

			&:after {
				transform: scaleX(1);
			}
		}

		&:after {
			bottom: -4px;
			content: "";
			display: block;
			height: 1px;
			left: 0;
			position: absolute;
			width: 100%;

			background: ${props => props.theme.grey600};
			transform: scaleX(0);
			transition: 0.2s all ease;
		}

		+ a {
			margin-left: 16px;
		}
	}

	button {
		align-items: center;
		display: flex;
		justify-content: center;

		background: none;
		border: none;
		color: inherit;
		cursor: pointer;
		font: inherit;
		outline: none;
		transform: translateX(8px);

		span + span {
			display: none;
			margin-left: 4px;

			@media ${device.xs} {
				display: inline-block;
			}
		}

		svg {
			margin-left: 8px;
			width: 24px;
		}

		@media ${device.sm} {
			display: none;
		}
	}

	nav {
		display: none;

		@media ${device.sm} {
			display: block;
		}
	}

	nav + a {
		display: none;

		color: ${props => props.theme.black};
		font-weight: 900;

		@media ${device.sm} {
			display: block;
		}
	}

	.header__contents {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1506px;
		padding: 7px 30px;

		@media ${device.sm} {
			padding: 15px 30px;
		}
	}

	.header__logo {
		&:after {
			display: none;
		}

		svg {
			display: block;
			width: 32px;

			@media ${device.sm} {
				width: 48px;
			}
		}
	}
`;

export default class Header extends Component {
	render() {
		return (
			<HeaderComponent>
				<div className="header__contents">
					<Link to="/" className="header__logo">
						<Logo />
					</Link>
					<nav>
						<Link to="/">Homepage</Link>
						<Link to="/work">Work</Link>
						<Link to="/insights">Insights</Link>
						<Link to="/about">About</Link>
						<Link to="/services">Services</Link>
					</nav>
					<a href="mailto:jack@noface.co.uk">Hire Me</a>
					<button>
						<span>Menu</span>
						<span> Navigation</span>
						<IconBars />
					</button>
				</div>
			</HeaderComponent>
		);
	}
}
