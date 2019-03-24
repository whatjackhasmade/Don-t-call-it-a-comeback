import React from "react";

import Base from "./Base";

import ACFParser from "../particles/ACFParser";

export default class PageTemplate extends React.Component {
	render() {
		const { content } = this.props.pageContext;

		return (
			<Base>
				<ACFParser content={content} />
			</Base>
		);
	}
}
