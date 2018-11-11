const fetch = require("node-fetch");
const queryString = require("query-string");
const crypto = require("crypto");

exports.sourceNodes = async (
	{ boundActionCreators: { createNode }, createNodeId },
	{ plugins, ...options }
) => {
	const nofaceInsightsURL = `https://noface.co.uk/wp-json/insights/v2/all`;
	const nofaceInsightsResponse = await fetch(nofaceInsightsURL);
	const nofaceData = await nofaceInsightsResponse.json();

	nofaceData.forEach(insight => {
		createNode({
			...insight,
			id: createNodeId(`noface-insight-${insight.id}`),
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
};
