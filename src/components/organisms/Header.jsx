import React, { Component } from "react";
import styled from "styled-components";

const HeaderComponent = styled.footer`
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
			color: #595959;
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
						<a href="#">Homepage</a>
						<a href="#">Homepage</a>
						<a href="#">Homepage</a>
						<a href="#">Homepage</a>
					</nav>
					<a>Homepage</a>
					<button>
						Menu
						<span> Navigation</span>
					</button>
				</div>
			</HeaderComponent>
		);
	}
}
