import React from 'react'
import { graphql } from 'gatsby'
// import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home({ data }) {
	return (
		<body>
			<Header />

			{/* Introduction section */}
			<section className="intro" id="home">
				<h1 className="section__title section__title--intro">
					Hi, I am <strong>Daniel Ramirez</strong>
				</h1>
				<p className="section__subtitle section__subtitle--intro">
					front-end dev
				</p>
				<img src={'/img/me-1.jpg'} alt="" className="intro__img" />
			</section>

			{/* My Services section */}
			<section className="my-services" id="services">
				<h2 className="section__title section__title--services">
					What I do
				</h2>
				<div className="services">
					<div className="service">
						<h3>Design + Development</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</p>
					</div>

					<div className="service">
						<h3>E-Commerce</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</p>
					</div>

					<div className="service">
						<h3>WordPress</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</p>
					</div>
				</div>

				<a href="#work" className="btn">
					My Work
				</a>
			</section>

			{/* About Me */}
			<section className="about-me" id="about">
				<h2 className="section__title section__title--about">
					Who I am
				</h2>

				<p className="section__subtitle section__subtitle--about">
					Designer & developer based out of DFW
				</p>

				<div className="about-me__body">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
				</div>

				<img src="/img/me-2.jpeg" alt="" className="about-me__img" />
			</section>

			{/* My Work */}
			<section className="my-work" id="work">
				<h2 className="section__title section__title--work">My work</h2>
				<p className="section__subtitle section__subtitle--work">
					A selection of my range of work
				</p>

				<div className="portfolio">
					{data.allMarkdownRemark.edges.map(({ node }) => (
						<a
							key={node.id}
							href={node.fields.slug}
							alt=""
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
