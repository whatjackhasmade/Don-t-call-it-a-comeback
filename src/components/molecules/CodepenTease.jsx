import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Codepen = styled.div`
	margin-top: 32px;
	width: 100%;

	@media screen and (min-width: 768px) {
		margin-right: 30px;
		width: 30%;
		width: calc(33% - 30px);
	}

	h3 {
		margin-bottom: 0;
		margin-top: 16px;
	}
`;

class CodepenTease extends Component {
	render() {
		return (
			<Codepen>
				<a href={this.props.url} target="_blank">
					<img src={this.props.image} />
					<h3>{this.props.title}</h3>
					<p>👀 Viewed by {this.props.views} Humans</p>
					<p>❤ Loved by {this.props.loves} Humans</p>
				</a>
			</Codepen>
		);
	}
}

export default CodepenTease;
