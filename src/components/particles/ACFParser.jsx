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

		if (content && content[0]) {
			content = content.filter(block => block.blockName !== null);
			const pageComponents = content.map((component, index) => {
				if (component.blockName === `acf/dribbble`) {
					return <Dribbble index={index} data={component.attrs.data} />;
				}
				if (component.blockName === `acf/github`) {
					return <Github index={index} data={component.attrs.data} />;
				}
				if (component.blockName === `acf/hero`) {
					return <Hero index={index} data={component.attrs.data} />;
				}
				if (component.blockName === `acf/intro`) {
					return <Intro index={index} data={component.attrs.data} />;
				}
				if (component.blockName === `acf/presentations`) {
					return <Presentations index={index} data={component.attrs.data} />;
				}
				if (component.blockName === `acf/row`) {
					return <Row index={index} data={component.attrs.data} />;
				}
				if (component.blockName === `acf/testimonials`) {
					return <Testimonials index={index} data={component.attrs.data} />;
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
