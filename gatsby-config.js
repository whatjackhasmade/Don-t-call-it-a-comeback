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
		`gatsby-plugin-catch-links`,
		`gatsby-plugin-layout`,
		`gatsby-plugin-lodash`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-twitter`,
		{
			resolve: `gatsby-source-wordpress`
		},
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
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: config.siteTitle,
				short_name: config.siteTitleShort,
				description: config.siteDescription,
				start_url: config.pathPrefix,
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: `minimal-ui`,
				icons: [
					{
						src: `/logos/logo-192x192.png`,
						sizes: `192x192`,
						type: `image/png`
					},
					{
						src: `/logos/logo-512x512.png`,
						sizes: `512x512`,
						type: `image/png`
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: `./src/assets/images/favicon.png`
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
			resolve: `gatsby-plugin-robots-txt`,
			options: {
				host: `https://www.example.com`,
				sitemap: `https://www.example.com/sitemap.xml`,
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
