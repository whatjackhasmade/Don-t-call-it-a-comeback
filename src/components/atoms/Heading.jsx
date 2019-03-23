import React, { Component } from "react";

export default class Button extends Component {
	render() {
		const { level, style } = this.props;

		const HeadingComponent = `h${level}`;

		return (
			<HeadingComponent className={style && `h${style}`}>
				{this.props.children}
			</HeadingComponent>
		);
	}
}
