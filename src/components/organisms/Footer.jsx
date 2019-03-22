import React, { Component } from "react";
import styled from "styled-components";

const FooterComponent = styled.footer`
	background: white;

	.footer__contents {
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
`;

export default class Footer extends Component {
	render() {
		return (
			<FooterComponent>
				<div className="footer__contents">
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
