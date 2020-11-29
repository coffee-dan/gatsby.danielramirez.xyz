// To implement a Gatsby API, you export a function with the name
// of the API from this file (gatsby-node.js)

// the thought process here is to grab markdown nodes
// create a slug and then add it to the node for future use

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// 1. Query data with GraphQL
exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` })
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}
}

// 2. Map the query results to pages
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	// **Note:** The graphql function call returns a Promise
	// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
	const result = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/templates/portfolio-item.js`),
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				slug: node.fields.slug,
			},
		})
	})
}
