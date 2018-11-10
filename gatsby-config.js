const config = require("./data/SiteConfig");
const urljoin = require("url-join");

module.exports = {
	pathPrefix: config.pathPrefix,
	siteMetadata: {
		siteUrl: urljoin(config.siteUrl, config.pathPrefix),
		rssMetadata: {
			site_url: urljoin(config.siteUrl, config.pathPrefix),
			feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
			title: config.siteTitle,
			description: config.siteDescription,
			image_url: `${urljoin(
				config.siteUrl,
				config.pathPrefix
			)}/logos/logo-512.png`,
			author: config.userName,
			copyright: config.copyright
		}
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-source-wordpress"
		},
		"gatsby-plugin-lodash",
		"gatsby-plugin-sass",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "assets",
				path: `${__dirname}/static/`
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "posts",
				path: `${__dirname}/content/`
			}
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 690
						}
					},
					{
						resolve: "gatsby-remark-responsive-iframe"
					},
					"gatsby-remark-prismjs",
					"gatsby-remark-copy-linked-files",
					"gatsby-remark-autolink-headers"
				]
			}
		},
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: config.googleAnalyticsID
			}
		},
		{
			resolve: "gatsby-plugin-nprogress",
			options: {
				color: config.themeColor
			}
		},
		"gatsby-plugin-sharp",
		"gatsby-plugin-catch-links",
		"gatsby-plugin-twitter",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: config.siteTitle,
				short_name: config.siteTitleShort,
				description: config.siteDescription,
				start_url: config.pathPrefix,
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: "minimal-ui",
				icons: [
					{
						src: "/logos/logo-192x192.png",
						sizes: "192x192",
						type: "image/png"
					},
					{
						src: "/logos/logo-512x512.png",
						sizes: "512x512",
						type: "image/png"
					}
				]
			}
		},
		"gatsby-plugin-offline"
	]
};
