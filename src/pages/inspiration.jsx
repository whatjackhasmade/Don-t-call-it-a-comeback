import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Base from "../components/templates/Base";

import Heading from "../components/atoms/Heading";

import Hero from "../components/molecules/hero/Hero";

import Grid from "../components/organisms/grid/Grid";
import Row from "../components/organisms/row/Row";

export const query = graphql`
	query {
		allInspiration {
			edges {
				node {
					imageFull
					title
				}
			}
		}
	}
`;

export default ({ data }) => {
	return (
		<Base>
			<Hero>
				<h1>Get Inspired</h1>
				<p>
					You are only limited by your imagination. Let all these little things
					happen. Don't fight them. Learn to use them. You can't make a mistake.
					Anything that happens you can learn to use - and make something
					beautiful out of it. This is your world, whatever makes you happy you
					can put in it. Go crazy.
				</p>
			</Hero>
			<Grid items={data.allInspiration.edges} type="images" />
		</Base>
	);
};
