import React, { Component } from "react";

import Dribbble from "../organisms/dribbble/Dribbble";
import Github from "../organisms/github/Github";
import Hero from "../organisms/hero/Hero";
import Intro from "../organisms/intro/Intro";
import Presentations from "../organisms/presentations/Presentations";
import Row from "../organisms/row/Row";
import Testimonials from "../organisms/testimonials/Testimonials";

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
				if (component.name === `acf/dribbble`) {
					return (
						<Dribbble
							id={component.id}
							index={index}
							key={component.id}
							name={component.name}
							data={component.data}
						/>
					);
				}
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
							duotone={component.data.duotone}
							media={component.data.media}
							overlay={component.data.overlay}
						/>
					);
				}
				if (component.name === `acf/intro`) {
					return (
						<Intro
							id={component.id}
							index={index}
							key={component.id}
							name={component.name}
							data={component.data}
						/>
					);
				}
				if (component.name === `acf/presentations`) {
					return (
						<Presentations
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
							group={component.data.group}
						/>
					);
				}
				if (component.name === `acf/testimonials`) {
					return (
						<Testimonials
							id={component.id}
							index={index}
							key={component.id}
							name={component.name}
							testimonials={component.data.testimonials}
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
