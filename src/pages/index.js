import React from 'react'
// import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
	return (
		<>
			<Header />
			<section className="intro" id="home">
				<h1 className="section__title section__title--intro">
					Hi, I am <strong>Daniel Ramirez</strong>
				</h1>
				<p className="section__subtitle section__subtitle--intro">
					front-end dev
				</p>
				<img alt="" />
			</section>
			<Footer />
		</>
	)
}
