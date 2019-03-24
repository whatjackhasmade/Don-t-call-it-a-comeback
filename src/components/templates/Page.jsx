import React from "react";

import Base from "./Base";

import ACFParser from "../particles/ACFParser";

import Hero from "../molecules/hero/Hero";

export default class PageTemplate extends React.Component {
	render() {
		const { content, title } = this.props.pageContext;

		return (
			<Base>
				<Hero>
					<h1>{title}</h1>
				</Hero>
				<ACFParser content={content} />
			</Base>
		);
	}
}
