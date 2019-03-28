import React, { Component } from "react";
import styled from "styled-components";
import { Link, StaticQuery, graphql } from "gatsby";
import moment from "moment";

import { device } from "../components/particles/MediaQueries";

import Base from "../components/templates/Base";

import Intro from "../components/organisms/intro/Intro";

const CollectionMenu = styled.nav`
	display: none;
	flex-direction: column;
	position: fixed;
	left: 0;
	padding: 8px;
	top: 50%;
	z-index: 2;

	font-size: 12px;
	font-weight: 400;
	letter-spacing: 1px;
	text-transform: uppercase;
	transform: translateY(-50%);

	@media ${device.xxl} {
		display: flex;
	}

	a {
		color: ${props => props.theme.grey100};
		text-decoration: none;
		transition: 0.2s color ease;

		&:active,
		&:focus,
		&:hover {
			color: ${props => props.theme.black};
		}

		+ a {
			margin-top: 4px;
		}
	}
`;

const CollectionWrapper = styled.section`
	margin-bottom: 96px;
	position: relative;
	z-index: 1;

	a {
		color: inherit;
		text-decoration: none;
	}

	h2 {
		padding-top: 64px;
		margin-top: 64px;

		border-top: 1px solid ${props => props.theme.grey600};
		color: ${props => props.theme.black};
		font-size: 12px;
		font-weight: 400;
		letter-spacing: 1px;
		text-transform: uppercase;
	}
`;

export default props => (
	<StaticQuery
		query={graphql`
			query {
				allPost {
					edges {
						node {
							id
							content
							date
							slug
							title
						}
					}
				}
			}
		`}
		render={query => <Archive query={query} {...props} />}
	/>
);

function datesGroupByComponent(dates, token) {
	return dates.reduce((val, obj) => {
		let comp = moment(obj.node["date"]).format(token);
		(val[comp] = val[comp] || []).push(obj);
		return val;
	}, {});
}

class Archive extends Component {
	render() {
		const { query } = this.props;
		const posts = query.allPost.edges;

		const sortedByWeek = datesGroupByComponent(posts, "YYYY-MM");

		let datesArray = [];

		Object.keys(sortedByWeek).map((key, index) => {
			if (sortedByWeek[key] !== undefined) datesArray.push(key);
			return null;
		});

		return (
			<Base>
				<Intro heading={`Insights`} subheading={`Insights`}>
					<p>
						Welcome one and all! With over 200 blog posts, in 14 different
						categories, it's safe to say I can get carried away with my posts.
					</p>
					<p>
						I am passionate about my industry and want to share and discuss
						topics from user interface design to photography!
					</p>
					<p>
						Feel free to browse through my thoughts and let me know what you
						think.
					</p>
				</Intro>
				<CollectionNavigation ids={datesArray} />
				<CollectionWrapper>
					{Object.keys(sortedByWeek).map((key, index) => (
						<Collection posts={sortedByWeek[key]} date={key} />
					))}
				</CollectionWrapper>
			</Base>
		);
	}
}

class Collection extends Component {
	render() {
		const { date, posts } = this.props;

		if (posts) {
			return posts.map((post, index) => (
				<>
					{index === 0 ? (
						<h2
							className="h3"
							id={`${moment(date).format("YYYY-MM")}`}
						>{`${moment(date).format("MMMM YYYY")}`}</h2>
					) : null}
					<Link to={post.node.slug}>
						<h3 className="h5" key={post.node.id}>
							{post.node.title}
						</h3>
					</Link>
				</>
			));
		}

		return null;
	}
}

class CollectionNavigation extends Component {
	render() {
		const { ids } = this.props;

		return (
			<CollectionMenu>
				{ids.map(id => (
					<a href={`#${id}`}>{moment(id, "YYYY-MM").format("MMM YYYY")}</a>
				))}
			</CollectionMenu>
		);
	}
}
