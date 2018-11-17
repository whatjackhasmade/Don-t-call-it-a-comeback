const fetch = require("node-fetch");
const queryString = require("query-string");
const crypto = require("crypto");

exports.sourceNodes = async (
	{ actions: { createNode }, createNodeId },
	{ plugins, ...options }
) => {
	const nofaceInsightsURL = `https://noface.co.uk/wp-json/insights/v2/all`;
	const nofaceInsightsResponse = await fetch(nofaceInsightsURL);
	const nofaceInsightsData = await nofaceInsightsResponse.json();

	nofaceInsightsData.forEach(insight => {
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

	const nofaceCasesURL = `https://noface.co.uk/wp-json/cases/v2/all`;
	const nofaceCasesResponse = await fetch(nofaceCasesURL);
	const nofaceCasesData = await nofaceCasesResponse.json();

	nofaceCasesData.forEach(e => {
		createNode({
			...e,
			id: createNodeId(`noface-case-${e.id}`),
			parent: null,
			children: [],
			internal: {
				type: "NoFaceCase",
				content: JSON.stringify(e),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(e))
					.digest("hex")
			}
		});
	});

	const wjhmURL = `https://wjhm.noface.app/wp-json/bloggies/v2/all`;
	const wjhmResponse = await fetch(wjhmURL);
	const wjhmData = await wjhmResponse.json();

	wjhmData.forEach(e => {
		createNode({
			...e,
			id: createNodeId(`wjhm-post-${e.id}`),
			parent: null,
			children: [],
			internal: {
				type: "WJHMPost",
				content: JSON.stringify(e),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(e))
					.digest("hex")
			}
		});
	});
};
