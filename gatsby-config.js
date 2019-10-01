const config = require(`./data/SiteConfig`);
const urljoin = require(`url-join`);

const activeEnv =
	process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`;

console.log(`Using environment config: "${activeEnv}"`);

require(`dotenv`).config({
	path: `.env.${activeEnv}`
});

module.exports = {
	pathPrefix: config.pathPrefix,
	siteMetadata: {
		siteUrl: urljoin(config.siteUrl)
	},
	plugins: [
		`gatsby-plugin-favicon`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-layout`,
		`gatsby-plugin-lodash`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		`gatsby-source-wordpress`,
		{
			resolve: `gatsby-plugin-hotjar`,
			options: {
				id: `1261093`,
				sv: `6`
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: config.googleAnalyticsID
			}
		},
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				rule: {
					include: /assets/
				}
			}
		},
		{
			resolve: `gatsby-plugin-html-attributes`,
			options: {
				lang: `en`
			}
		},
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				mergeLinkHeaders: false,
				mergeCachingHeaders: false
			}
		},
		{
			resolve: `gatsby-plugin-robots-txt`,
			options: {
				host: `https://www.whatjackhasmade.co.uk`,
				sitemap: `https://www.whatjackhasmade.co.uk/sitemap.xml`,
				resolveEnv: () => activeEnv,
				env: {
					development: {
						policy: [{ userAgent: `*`, disallow: [`/`] }]
					},
					production: {
						policy: [
							{
								userAgent: `*`,
								allow: `/`,
								disallow: [`/inspiration`, `/assets`, `/client/*`, `/twitter`]
							}
						]
					}
				}
			}
		},
		{
			resolve: `gatsby-plugin-polyfill-io`,
			options: {
				features: [
					`Array.prototype.map`,
					`fetch`,
					`IntersectionObserver`,
					`IntersectionObserverEntry`
				]
			}
		}
	]
};
