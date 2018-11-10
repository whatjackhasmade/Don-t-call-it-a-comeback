const axios = require("axios");
const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");
const createNodeHelpers = require("gatsby-node-helpers").default;

const postNodes = [];

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	let slug;
	if (node.internal.type === "MarkdownRemark") {
		const fileNode = getNode(node.parent);
		const parsedFilePath = path.parse(fileNode.relativePath);
		if (
			Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
			Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
		) {
			slug = `/${_.kebabCase(node.frontmatter.title)}`;
		} else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
			slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
		} else if (parsedFilePath.dir === "") {
			slug = `/${parsedFilePath.name}/`;
		} else {
			slug = `/${parsedFilePath.dir}/`;
		}

		if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
			if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
				slug = `/${_.kebabCase(node.frontmatter.slug)}`;
			if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
				const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
				if (!date.isValid)
					console.warn(`WARNING: Invalid date.`, node.frontmatter);

				createNodeField({
					node,
					name: "date",
					value: date.toISOString()
				});
			}
		}
		createNodeField({ node, name: "slug", value: slug });
		postNodes.push(node);
	}
};

const { createNodeFactory, generateNodeId } = createNodeHelpers({
	typePrefix: `Blog`
});

const Post = createNodeFactory(`Posts`);

exports.createPages = async ({ actions: { createPage } }) => {
	await axios
		.get(`https://noface.co.uk/wp-json/wp/v2/posts/`)
		.then(function(response) {
			if (response.data) {
				response.data.forEach(e => {
					const post = Post(e, {
						id: generateNodeId(`Post`, e.id),
						component: path.resolve(`./src/templates/blog-post.jsx`),
						path: e.slug,
						context: {
							id: `123456`,
							slug: e.slug
						}
					});

					createPage(post);
					return post;
				});
			}
		});
	return;
};
