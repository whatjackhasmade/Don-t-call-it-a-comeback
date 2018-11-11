import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import CodepenTease from "../molecules/CodepenTease";

const CodepenContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin: 0 auto;
	max-width: 1300px;
	width: 90%;
`;

class Codepens extends Component {
	render() {
		return (
			<CodepenContainer>
				<h2>My Codepen Experiments</h2>
				{this.props.queryData.map(node => (
					<CodepenTease
						key={node.node.id}
						loves={node.node.loves}
						title={node.node.title}
						url={node.node.link}
						views={node.node.views}
					/>
				))}
			</CodepenContainer>
		);
	}
}

export default Codepens;
