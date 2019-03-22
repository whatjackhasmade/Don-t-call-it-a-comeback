import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../particles/MediaQueries";

import Logo from "../../assets/images/logo/logo.svg";
import IconBars from "../../assets/images/icons/solid/bars.svg";

const HeaderComponent = styled.header`
	background: white;

	a,
	button {
		color: ${props => props.theme.grey600};
		font-weight: 500;
		letter-spacing: 1px;
		text-decoration: none;
		text-transform: uppercase;
		transition: 0.2s alle ease;

		&:active,
		&:focus,
		&:hover {
			color: ${props => props.theme.black};
		}

		+ a {
			margin-left: 32px;
		}
	}

	button {
		align-items: center;
		display: flex;
		justify-content: center;
		padding: 8px;

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
		padding: 15px 30px;

		@media ${device.sm} {
			padding: 23px 30px;
		}
	}

	.header__logo {
		width: 32px;

		@media ${device.sm} {
			width: 48px;
		}
	}
`;

export default class Header extends Component {
	render() {
		return (
			<HeaderComponent>
				<div className="header__contents">
					<Logo className="header__logo" />
					<nav>
						<a href="#">Homepage</a>
						<a href="#">Work</a>
						<a href="#">Insights</a>
						<a href="#">About</a>
						<a href="#">Services</a>
					</nav>
					<a href="#">Hire Me</a>
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
