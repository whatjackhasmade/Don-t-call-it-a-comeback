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
	console.log(data);
	return (
		<Base>
			<Hero>
				<h1>Get Inspired</h1>
				<p>
					Our archived collection of discussions on current events and topics
					related to our industry. Join in the conversation and let us know what
					you think.
				</p>
			</Hero>
			<Grid items={data.allInspiration.edges} type="images" />
		</Base>
	);
};
