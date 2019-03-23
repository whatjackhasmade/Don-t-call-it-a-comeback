import React from "react";
import { graphql } from "gatsby";

import Base from "../components/templates/Base";

import Hero from "../components/molecules/hero/Hero";

import Grid from "../components/organisms/grid/Grid";

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

export default ({ data }) => (
	<Base>
		<Hero>
			<h1>Get Inspired</h1>
			<p>You are only limited by your imagination.</p>
			<p>
				Let all these little things happen. Don't fight them. Learn to use them.
				You can't make a mistake.
			</p>
			<p>
				Anything that happens you can learn to use - and make something
				beautiful out of it.
			</p>
			<p>This is your world, whatever makes you happy you can put in it.</p>
			<p>Go crazy.</p>
		</Hero>
		<Grid items={data.allInspiration.edges} type="images" />
	</Base>
);
