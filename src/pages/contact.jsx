import React, { Component } from "react";

import Base from "../components/templates/Base";

import Contact from "../components/organisms/contact/Contact";
import Hero from "../components/organisms/hero/Hero";

export default class ContactPage extends Component {
	render() {
		return (
			<Base>
				<Contact />
			</Base>
		);
	}
}
