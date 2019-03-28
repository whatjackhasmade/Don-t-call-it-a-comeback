import React, { Component } from "react";

export default class Paragraph extends Component {
	render() {
		return <p>{this.props.children}</p>;
	}
}
