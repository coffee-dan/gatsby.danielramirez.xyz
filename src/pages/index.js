import React from 'react'
// import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
	return (
		<>
			<Header />

			{/* Introduction section */}
			<section className="intro" id="home">
				<h1 className="section__title section__title--intro">
					Hi, I am <strong>Daniel Ramirez</strong>
				</h1>
				<p className="section__subtitle section__subtitle--intro">
					front-end dev
				</p>
				<img alt="" />
			</section>

			{/* My Services section */}
			<section class="my-services" id="services">
				<h2 class="section__title section__title--services">
					What I do
				</h2>
				<div class="services">
					<div class="service">
						<h3>Design + Development</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</p>
					</div>

					<div class="service">
						<h3>E-Commerce</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</p>
					</div>

					<div class="service">
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

				<a href="#work" class="btn">
					My Work
				</a>
			</section>

			{/* About Me */}
			<section class="about-me" id="about">
				<h2 class="section__title section__title--about">Who I am</h2>

				<p class="section__subtitle section__subtitle--about">
					Designer & developer based out of NYC
				</p>

				<div class="about-me__body">
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

				<img alt="" class="about-me__img" />
			</section>

			{/* My Work */}
			<section class="my-work" id="work">
				<h2 class="section__title section__title--work">My work</h2>
				<p class="section__subtitle section__subtitle--work">
					A selection of my range of work
				</p>

				<div class="portfolio">
					<a href="https://google.com" class="portfolio__item">
						<img alt="" class="portfolio__img" />
					</a>

					<a href="https://google.com" class="portfolio__item">
						<img alt="" class="portfolio__img" />
					</a>

					<a href="https://google.com" class="portfolio__item">
						<img alt="" class="portfolio__img" />
					</a>
				</div>
			</section>

			<Footer />
		</>
	)
}
