import React from "react";

import Base from "./Base";

import Hero from "../organisms/hero/Hero";

export default class PostTemplate extends React.Component {
	render() {
		const { content, title } = this.props.pageContext;

		return (
			<Base>
				<Hero>
					<h1>{title}</h1>
				</Hero>
				<article dangerouslySetInnerHTML={{ __html: content }} />
			</Base>
		);
	}
}
