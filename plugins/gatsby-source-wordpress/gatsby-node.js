const fetch = require("node-fetch");
const queryString = require("query-string");
const crypto = require("crypto");

exports.sourceNodes = async (
	{ boundActionCreators: { createNode }, createNodeId },
	{ plugins, ...options }
) => {
	const apiUrl = `https://noface.co.uk/wp-json/wp/v2/posts/`;
	const response = await fetch(apiUrl);
	const data = await response.json();

	data.forEach(insight => {
		createNode({
			...insight,
			id: createNodeId(`pixabay-insight-${insight.id}`),
			parent: null,
			children: [],
			internal: {
				type: "NoFaceInsight",
				content: JSON.stringify(insight),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(insight))
					.digest("hex")
			}
		});
	});
};
