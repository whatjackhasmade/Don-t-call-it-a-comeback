const fetch = require("node-fetch");
const queryString = require("query-string");
const crypto = require("crypto");
const path = require("path");

const WordPressDomain = `https://wjhm.noface.app`;

exports.sourceNodes = async (
	{ actions: { createNode }, createNodeId },
	{ plugins, ...options }
) => {
	const eventURL = `${WordPressDomain}/wp-json/event/v2/all`;
	const eventResponse = await fetch(eventURL);
	const eventData = await eventResponse.json();

	eventData.forEach(inspo => {
		createNode({
			...inspo,
			id: createNodeId(`event-${inspo.id}`),
			parent: null,
			children: [],
			internal: {
				type: "Event",
				content: JSON.stringify(inspo),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(inspo))
					.digest("hex")
			}
		});
	});

	const inspirationURL = `${WordPressDomain}/wp-json/inspiration/v2/all`;
	const inspirationResponse = await fetch(inspirationURL);
	const inspirationData = await inspirationResponse.json();

	inspirationData.forEach(inspo => {
		createNode({
			...inspo,
			id: createNodeId(`inspiration-${inspo.id}`),
			parent: null,
			children: [],
			internal: {
				type: "Inspiration",
				content: JSON.stringify(inspo),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(inspo))
					.digest("hex")
			}
		});
	});

	const pagesURL = `${WordPressDomain}/wp-json/pages/v2/all`;
	const pagesResponse = await fetch(pagesURL);
	const pagesData = await pagesResponse.json();

	pagesData.forEach(e => {
		createNode({
			...e,
			id: createNodeId(`page-${e.id}`),
			parent: null,
			children: [],
			internal: {
				type: "Page",
				content: JSON.stringify(e),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(e))
					.digest("hex")
			}
		});
	});

	const postsURL = `${WordPressDomain}/wp-json/posts/v2/all`;
	const postsResponse = await fetch(postsURL);
	const postsData = await postsResponse.json();

	postsData.forEach(e => {
		createNode({
			...e,
			id: createNodeId(`post-${e.id}`),
			parent: null,
			children: [],
			internal: {
				type: "Post",
				content: JSON.stringify(e),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(e))
					.digest("hex")
			}
		});
	});
};

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return new Promise((resolve, reject) => {
		graphql(`
			{
				allPage {
					edges {
						node {
							content {
								blockName
								attrs {
									id
									data {
										background_colour
										content
										heading
										link
										media {
											thumbnail
											medium
											medium_large
											large
											ratio
											featured_xs
											featured_sm
											featured_md
											featured_lg
											featured_xl
											full
										}
										subheading
									}
								}
							}
							id
							imageXS
							imageSM
							imageMD
							imageLG
							imageXL
							imageFull
							slug
							title
							yoast {
								description
								image
								slug
								title
							}
						}
					}
				}
				allPost {
					edges {
						node {
							content
							id
							imageFull
							slug
							title
						}
					}
				}
			}
		`).then(result => {
			result.data.allPage.edges.forEach(({ node }) => {
				const slug =
					node.slug === "home" || node.slug === "homepage" ? `/` : node.slug;
				createPage({
					path: slug,
					component: path.resolve(`./src/components/templates/Page.jsx`),
					context: {
						content: node.content,
						id: node.id,
						imageXS: node.imageXS,
						imageSM: node.imageSM,
						imageMD: node.imageMD,
						imageLG: node.imageLG,
						imageXL: node.imageXL,
						imageFull: node.imageFull,
						slug: node.slug,
						title: node.title,
						yoast: node.yoast
					}
				});
			});
			result.data.allPost.edges.forEach(({ node }) => {
				createPage({
					path: node.slug,
					component: path.resolve(`./src/components/templates/Post.jsx`),
					context: {
						content: node.content,
						id: node.id,
						image: node.imageFull,
						title: node.title,
						slug: node.slug
					}
				});
			});
			resolve();
		});
	});
};
