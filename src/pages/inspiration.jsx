import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Base from "../components/templates/Base";

import Button from "../components/atoms/Button";

import Hero from "../components/organisms/hero/Hero";
import Grid from "../components/organisms/grid/Grid";

export default props => (
	<StaticQuery
		query={graphql`
			query {
				allInspiration {
					edges {
						node {
							category {
								name
							}
							media
							title
						}
					}
				}
			}
		`}
		render={query => <Inspiration query={query} {...props} />}
	/>
);

const InspiratioNavigation = styled.nav`
	margin: 64px 0 0;

	button {
		opacity: 0.5;

		&:active,
		&:focus,
		&:hover {
			opacity: 1;
		}
	}

	button + button {
		margin-left: 8px;
	}

	.focused {
		opacity: 1;
	}
`;

class Inspiration extends Component {
	state = {
		category: ""
	};

	setCategory = (e, category) => {
		e.preventDefault();

		if (this.state.category === category) {
			this.setState({ category: "" });
		} else {
			this.setState({ category });
		}
	};

	render() {
		const { query } = this.props;
		const nodes = query.allInspiration.edges;
		const categories = nodes.map(node => node.node.category[0].name);

		return (
			<Base>
				<Hero>
					<h1>Get Inspired</h1>
					<p>You are only limited by your imagination.</p>
					<p>
						Let all these little things happen. Don't fight them. Learn to use
						them. You can't make a mistake.
					</p>
					<p>
						Anything that happens you can learn to use - and make something
						beautiful out of it.
					</p>
					<p>This is your world, whatever makes you happy you can put in it.</p>
					<p>Go crazy.</p>
				</Hero>
				<InspiratioNavigation>
					{categories.map(cat => (
						<button
							className={
								this.state.category
									? this.state.category === cat && `focused`
									: `focused`
							}
							onClick={e => {
								this.setCategory(e, cat);
							}}
						>
							{cat}
						</button>
					))}
				</InspiratioNavigation>

				<Grid items={nodes} type="images" filter={this.state.category} />
			</Base>
		);
	}
}
