const fetch = require("node-fetch");
const queryString = require("query-string");
const crypto = require("crypto");
const path = require("path");

exports.sourceNodes = async (
	{ actions: { createNode }, createNodeId },
	{ plugins, ...options }
) => {
	const codepenURL = `https://cpv2api.com/pens/popular/jackpritchard`;
	const codepenResponse = await fetch(codepenURL);
	const codepenData = await codepenResponse.json();

	codepenData.data.forEach(pen => {
		createNode({
			...pen,
			id: createNodeId(`codepen-${pen.id}`),
			parent: null,
			children: [],
			internal: {
				type: "Codepen",
				content: JSON.stringify(pen),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(pen))
					.digest("hex")
			}
		});
	});

	const inspirationURL = `https://wjhm.noface.app/wp-json/inspiration/v2/all`;
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

	const nofaceCasesURL = `https://wp.noface.app/wp-json/cases/v2/all`;
	const nofaceCasesResponse = await fetch(nofaceCasesURL);
	const nofaceCasesData = await nofaceCasesResponse.json();

	nofaceCasesData.forEach(e => {
		createNode({
			...e,
			id: createNodeId(`case-${e.id}`),
			parent: null,
			children: [],
			internal: {
				type: "Case",
				content: JSON.stringify(e),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(e))
					.digest("hex")
			}
		});
	});

	const pagesURL = `https://wjhm.noface.app/wp-json/pages/v2/all`;
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

	const postsURL = `https://wjhm.noface.app/wp-json/posts/v2/all`;
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
								id
								align
								data {
									rows {
										column
									}
								}
								mode
								name
								status
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
			}
		`).then(result => {
			result.data.allPage.edges.forEach(({ node }) => {
				createPage({
					path: node.slug,
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
			resolve();
		});
	});
};
