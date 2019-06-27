const fetch = require(`node-fetch`);
const queryString = require(`query-string`);
const crypto = require(`crypto`);
const path = require(`path`);

const WordPressDomain = `https://wjhm.noface.app`;
// const WordPressDomain = `http://local-whatjackhasmade.co.uk`;

exports.sourceNodes = async (
	{ actions: { createNode }, createNodeId },
	{ plugins, ...options }
) => {
	const accessToken = `9422ed733294915d402ad516d509f33f618c1ddde539c9fddd94415530e127e3`;
	const dribbbleURL = `https://api.dribbble.com/v2/user/shots?access_token=${accessToken}`;
	const dribbbleResponse = await fetch(dribbbleURL);
	const dribbbleData = await dribbbleResponse.json();

	dribbbleData.forEach(inspo => {
		createNode({
			...inspo,
			id: createNodeId(`dribbble-${inspo.id}`),
			parent: null,
			children: [],
			internal: {
				type: "Dribbble",
				content: JSON.stringify(inspo),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(inspo))
					.digest("hex")
			}
		});
	});

	const GAPI = `AIzaSyArCR7gVx2-HT0wXvjLl3GHOPqolqVINoA`;
	const PlayListID = `UUIOm-HME4V_STS9yWM5aXIg`;
	const NumberResults = 12;
	const youtubeURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${PlayListID}&key=${GAPI}&maxResults=${NumberResults}`;
	const youtubeResponse = await fetch(youtubeURL);
	const youtubeData = await youtubeResponse.json();

	youtubeData.forEach(video => {
		createNode({
			...video,
			id: createNodeId(`youtube-${video.id}`),
			parent: null,
			children: [],
			internal: {
				type: "Youtube",
				content: JSON.stringify(video),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(video))
					.digest("hex")
			}
		});
	});

	const caseURL = `${WordPressDomain}/wp-json/cases/v2/all`;
	const caseResponse = await fetch(caseURL);
	const caseData = await caseResponse.json();

	caseData.forEach(inspo => {
		createNode({
			...inspo,
			id: createNodeId(`case-${inspo.id}`),
			parent: null,
			children: [],
			internal: {
				type: "Case",
				content: JSON.stringify(inspo),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(inspo))
					.digest("hex")
			}
		});
	});

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

const createThePages = true;

if (createThePages) {
	exports.createPages = ({ graphql, actions }) => {
		const { createPage } = actions;
		return new Promise((resolve, reject) => {
			graphql(`
				{
					allCase {
						edges {
							node {
								id
								slug
								title
								yoast {
									description
									image
									slug
									title
								}
								content {
									blocks {
										fields {
											title
											column_one
											column_two
										}
									}
									devices {
										desktop
										mobile
									}
									gallery {
										alt
										url
										sizes {
											thumbnail
											medium
											large
											ratio
											featured_xs
											featured_sm
											featured_md
											featured_lg
											featured_xl
										}
									}
									intro {
										subtitle
										title
										description
										illustration
									}
									related {
										id
										date
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
									siteURL
									testimonials {
										testimonial {
											author
											role
											logo {
												url
											}
											media {
												url
											}
											testimonial
										}
									}
								}
							}
						}
					}
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
											testimonials {
												author
												logo
												media {
													thumbnail
													medium
													medium_large
													ratio
													featured_xs
													featured_sm
													featured_md
													full
												}
												role
												testimonial
											}
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
								id
								content
								date
								excerpt
								imageFull
								related {
									id
									date
									excerpt
									imageXS
									imageSM
									imageMD
									imageLG
									imageXL
									imageFull
									slug
									title
								}
								title
								slug
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
				result.data.allCase.edges.forEach(({ node }) => {
					createPage({
						path: node.slug,
						component: path.resolve(`./src/components/templates/Case.jsx`),
						context: {
							content: node.content,
							id: node.id,
							imageXS: node.imageXS,
							imageSM: node.imageSM,
							imageMD: node.imageMD,
							imageLG: node.imageLG,
							imageXL: node.imageXL,
							imageFull: node.imageFull,
							title: node.title,
							slug: node.slug,
							yoast: node.yoast
						}
					});
				});
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
							excerpt: node.excerpt,
							id: node.id,
							image: node.imageFull,
							related: node.related,
							title: node.title,
							slug: node.slug
						}
					});
				});
				resolve();
			});
		});
	};
}
