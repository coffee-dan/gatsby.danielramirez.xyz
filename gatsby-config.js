/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: `Daniel Ramirez Portfolio`,
		author: `Daniel Ramirez`,
		description: `Information about Daniel Ramirez.`,
		url: `https://danielramirez.xyz`,
	},
	plugins: [
		`gatsby-plugin-sharp`,
		`gatsby-plugin-fontawesome-css`,
		`gatsby-transformer-sharp`,
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/pages/`,
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`source sans pro\:300,900`, `source code pro\:400,900`],
				display: 'swap',
			},
		},
	],
}
