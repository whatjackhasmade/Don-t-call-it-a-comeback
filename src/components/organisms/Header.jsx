import React, { Component } from "react";
import styled from "styled-components";

const HeaderComponent = styled.header`
	background: white;

	.header__contents {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1536px;
	}

	nav {
		a {
			color: ${props => props.theme.grey600};
			letter-spacing: 1px;
			text-decoration: none;
			text-transform: uppercase;

			+ a {
				margin-left: 32px;
			}
		}
	}

	nav + a {
		display: none;
	}
`;

export default class Header extends Component {
	render() {
		return (
			<HeaderComponent>
				<div className="header__contents">
					<img src="https://dummyimage.com/32x32.png" alt="" />
					<nav>
						<a href="#">Homepage</a>
						<a href="#">Work</a>
						<a href="#">Insights</a>
						<a href="#">About</a>
						<a href="#">Services</a>
					</nav>
					<a>Hire Me</a>
					<button>
						Menu
						<span> Navigation</span>
					</button>
				</div>
			</HeaderComponent>
		);
	}
}
