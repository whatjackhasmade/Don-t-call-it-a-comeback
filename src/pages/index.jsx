import React from "react";

import Base from "../components/templates/Base";

import Heading from "../components/atoms/Heading";

import Hero from "../components/molecules/hero/Hero";

import Carousel from "../components/organisms/carousel/Carousel";

export default ({ data }) => (
	<Base>
		<Hero>
			<h1>Jack Pritchard</h1>
			<p>
				Our archived collection of discussions on current events and topics
				related to our industry. Join in the conversation and let us know what
				you think.
			</p>
		</Hero>
		<Carousel
			heading={`I’ve helped my clients achieve their goals and improve their businesses`}
		/>
		<Heading level={2}>What Goes In To Building Exceptional Products?</Heading>
	</Base>
);
