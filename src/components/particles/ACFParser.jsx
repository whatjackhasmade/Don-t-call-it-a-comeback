import React, { Component } from "react";

import Hero from "../organisms/hero/Hero";
import Github from "../organisms/github/Github";
import Row from "../organisms/row/Row";

export default class CreateMarkup extends Component {
	render() {
		let content = this.props.content;

		if (
			content &&
			content[0] &&
			content[0].hasOwnProperty("data") &&
			content[0].data !== null
		) {
			let componentsArray = [];
			let newArrayDataOfOjbect = Object.values(content);

			for (var key in newArrayDataOfOjbect) {
				if (newArrayDataOfOjbect.hasOwnProperty(key))
					componentsArray.push(newArrayDataOfOjbect[key]);
			}

			const pageComponents = componentsArray.map((component, index) => {
				if (component.name === `acf/github`) {
					return (
						<Github
							id={component.id}
							index={index}
							key={component.id}
							name={component.name}
							data={component.data}
						/>
					);
				}
				if (component.name === `acf/hero`) {
					return (
						<Hero
							id={component.id}
							index={index}
							key={component.id}
							name={component.name}
							data={component.data}
						/>
					);
				}
				if (component.name === `acf/row`) {
					return (
						<Row
							id={component.id}
							index={index}
							key={component.id}
							name={component.name}
							rows={component.data.rows}
						/>
					);
				}
				return null;
			});

			if (pageComponents) {
				return pageComponents;
			}
		} else {
			return null;
		}
	}
}
