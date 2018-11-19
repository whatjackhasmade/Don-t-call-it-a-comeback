import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Footer = styled.footer`
	align-items: center;
	display: flex;
`;

class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<Footer>
					<nav>
						<ul>
							<li>
								<a href="tel:07777777777">07777 777777</a>
							</li>
							<li>
								<a href="tel:07777777777">07777 777777</a>
							</li>
						</ul>
					</nav>
				</Footer>
			</React.Fragment>
		);
	}
}

export default Footer;
