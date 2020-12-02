// Template for portfolio pages, to be hydrated by graphql queries to the
// markdown files located in /pages
import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import SEO from '../components/seo'

export default function BlogPost({ data }) {
	const post = data.markdownRemark

	return (
		<>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<Header />

			<section className="intro">
				<h1 className="section__title section__title--intro">
					<strong>{post.frontmatter.title}</strong>
				</h1>
				<p className="section__subtitle section__subtitle--intro">
					{post.frontmatter.subtitle}
				</p>
				<img
					src={post.frontmatter.featuredImage}
					alt=""
					className="intro__img"
				/>
			</section>

			<div className="portfolio-item-individual">
				<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
			</div>

			<Footer />
		</>
	)
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				subtitle
				featuredImage
			}
		}
	}
`
