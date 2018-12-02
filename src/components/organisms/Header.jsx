import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import logoImage from "../../assets/images/icons/logo-48.png";

const HeaderContainer = styled.header`
	align-items: center;
	display: flex;
	left: 0;
	padding: 16px 32px;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 9999;

	color: white;

	img {
		filter: invert(100%);
	}

	li {
		display: inline-block;
		margin-left: 16px;

		font-size: 16px;
		font-weight: 700;
		letter-spacing: 1px;
		text-transform: uppercase;
		transition: 0.2s font-size ease;
	}

	nav {
		display: none;
		margin-left: auto;

		@media screen and (min-width: 768px) {
			display: block;
		}
	}

	ul {
		margin: 0;
		padding: 0;

		list-style: none;
	}
`;

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<HeaderContainer>
					<Link to="/">
						<img src={logoImage} alt="" />
					</Link>
					<nav>
						<ul>
							<li>
								<Link to="/">Homepage</Link>
							</li>
							<li>
								<Link to="/posts">Posts</Link>
							</li>
							<li>
								<Link to="/facts">Facts</Link>
							</li>
							<li>
								<a
									href="https://www.youtube.com/channel/UCIOm-HME4V_STS9yWM5aXIg"
									target="_blank"
								>
									YouTube
								</a>
							</li>
							<li>
								<a href="/">Hire Me</a>
							</li>
						</ul>
					</nav>
				</HeaderContainer>
			</React.Fragment>
		);
	}
}

export default Header;
