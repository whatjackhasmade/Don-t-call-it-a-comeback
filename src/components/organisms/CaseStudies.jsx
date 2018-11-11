import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import CaseTease from "../molecules/CaseTease";

const CaseContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin: 0 auto;
	max-width: 1300px;
	width: 90%;
`;

class Cases extends Component {
	render() {
		return (
			<CaseContainer>
				<h2>My Portfolio of Work 👨‍🎨</h2>
				{this.props.queryData.map(node => (
					<CaseTease
						key={node.node.id}
						excerpt={node.node.excerpt}
						image={node.node.image}
						link={node.node.link}
						title={node.node.title}
					/>
				))}
			</CaseContainer>
		);
	}
}

export default Cases;
