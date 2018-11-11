import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { decodeHTML } from "../helpers";

import CodepenTease from "../molecules/CodepenTease";

const CodepenContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin: 64px auto 0;
	max-width: 1300px;
	width: 90%;
`;

class Codepens extends Component {
	render() {
		return (
			<CodepenContainer>
				<h2>My Most Popular Codepens</h2>
				{this.props.queryData.map(node => (
					<CodepenTease
						key={node.node.id}
						loves={node.node.loves.slice(0, -6)}
						title={decodeHTML(node.node.title)}
						url={node.node.link}
						views={node.node.views.slice(0, -6)}
					/>
				))}
			</CodepenContainer>
		);
	}
}

export default Codepens;
