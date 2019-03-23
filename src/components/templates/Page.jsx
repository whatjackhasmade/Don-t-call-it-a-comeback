import React from "react";

import Base from "./Base";

import Hero from "../molecules/hero/Hero";

export default class PageTemplate extends React.Component {
	render() {
		console.log(this.props);
		const { title, slug } = this.props.pageContext;

		return (
			<Base>
				<Hero>
					<h1>{title}</h1>
				</Hero>
			</Base>
		);
	}
}
