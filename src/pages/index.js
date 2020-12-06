// Main page
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Header from '../components/header'
import Footer from '../components/footer'
import SEO from '../components/seo'

export default function Home({ data }) {
	// Grab array of portfolio images to transform into
	// dictionary that is referred to when creating portfolio display section
	const portfolioImagesArray = data.portfolioImages.edges
	let pImgs = portfolioImagesArray.reduce(
		(a, { node }) => ({
			...a,
			[node.base]: node.childImageSharp,
		}),

		{}
	)

	return (
		<>
			<SEO title="Home" />
			<Header />

			{/* Introduction section */}
			<section className="intro" id="home">
				<h1 className="section__title section__title--intro">
					<strong>Daniel Gerard Ramirez</strong>
				</h1>
				<p className="section__subtitle section__subtitle--intro">
					Software Developer
				</p>
				<Img
					title="Daniel Gerard Ramirez"
					alt="Me"
					className="intro__img"
					fluid={data.mainImage.childImageSharp.fluid}
				/>
			</section>

			{/* About Me */}
			<section className="about-me" id="about">
				<div className="about-me__body">
					<p>Education - Bachelor of Computer Science</p>
					<a href="github.com/coffee-dan" className="about-me__cv">
						CV
					</a>
				</div>
			</section>

			{/* My Work */}
			<section className="my-work" id="work">
				<h2 className="section__title section__title--work">
					<strong>My Work</strong>
				</h2>

				<div className="portfolio">
					{data.allMarkdownRemark.edges.map(({ node }) => (
						<a
							key={node.id}
							href={node.fields.slug}
							className="portfolio__item"
						>
							<Img
								title={node.frontmatter.title}
								alt=""
								className="portfolio__img"
								fluid={
									pImgs[node.frontmatter.featuredImage].fluid
								}
							/>
						</a>
					))}
				</div>
			</section>

			<Footer />
		</>
	)
}

// Query fragment for generating fluid gatsby image data
export const fragQuery = graphql`
	fragment Fluid on File {
		childImageSharp {
			fluid(maxWidth: 1280) {
				...GatsbyImageSharpFluid
			}
		}
	}
`

export const query = graphql`
	query {
		# Retrieve markdown portfolio writeups from pages/
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
						featuredImage
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
		# Main image; picture of daniel ramirez
		mainImage: file(relativePath: { eq: "me-1.jpg" }) {
			...Fluid
		}
		# Portfolio images; for the portfolio gallery
		portfolioImages: allFile(
			filter: {
				relativeDirectory: { eq: "portfolio" }
				extension: { regex: "/(gif|jpe?g|png|webp)$/i" }
			}
		) {
			edges {
				node {
					base
					...Fluid
				}
			}
		}
	}
`
