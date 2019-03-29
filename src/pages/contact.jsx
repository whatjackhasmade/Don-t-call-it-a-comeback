import React, { Component } from "react";

import Base from "../components/templates/Base";

import Contact from "../components/organisms/contact/Contact";
import Hero from "../components/organisms/hero/Hero";

class ContactPage extends Component {
	render() {
		return (
			<Base>
				<Hero>
					<h1>Contact</h1>
				</Hero>
				<Contact />
			</Base>
		);
	}
}
