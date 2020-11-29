import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home({ data }) {
	return (
		<body>
			<Header />

			{/* Introduction section */}
			<section className="intro" id="home">
				<h1 className="section__title section__title--intro">
					<strong>Daniel Gerard Ramirez</strong>
				</h1>
				<p className="section__subtitle section__subtitle--intro">
					Software Developer
				</p>
				<img src={'/img/me-1.jpg'} alt="" className="intro__img" />
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
							<img
								src={node.frontmatter.featuredImage}
								alt=""
								className="portfolio__img"
							/>
						</a>
					))}
				</div>
			</section>

			<Footer />
		</body>
	)
}

export const query = graphql`
	query {
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
	}
`
