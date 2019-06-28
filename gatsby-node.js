const axios = require("axios");
const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === "build-html") {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /mailtoui/,
						use: loaders.null()
					}
				]
			}
		});
	}
};
