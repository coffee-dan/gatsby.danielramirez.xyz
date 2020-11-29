// Template for portfolio pages, to be hydrated by graphql queries to the
// markdown files located in /pages
import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'

export default function BlogPost({ data }) {
	const post = data.markdownRemark

	return (
		<>
			<Header />

			<section className="intro">
				<h1 className="section__title section__title--intro">
					{post.frontmatter.title}
				</h1>
				<p className="section__subtitle section__title--intro">
					Insert subtitle
				</p>
				<img
					src={post.frontmatter.featuredImage}
					alt=""
					className="intro__img"
				/>
			</section>

			<div className="portfolio-item-individual">
				<p dangerouslySetInnerHTML={{ __html: post.html }}></p>
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
				featuredImage
			}
		}
	}
`
