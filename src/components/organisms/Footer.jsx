import React, { Component } from "react";
import styled from "styled-components";

const FooterComponent = styled.footer`
	background: ${props => props.theme.offWhite};

	.footer__contents {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1506px;
		padding: 45px 30px;
	}

	a {
		color: ${props => props.theme.grey600};
		font-weight: 700;
		letter-spacing: 1px;
		text-decoration: none;
		text-transform: uppercase;
		transition: 0.2s alle ease;

		+ a {
			margin-left: 32px;
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
