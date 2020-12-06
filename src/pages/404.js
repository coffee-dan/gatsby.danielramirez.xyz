import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import SEO from '../components/seo'

export default function the404() {
	return (
		<body>
			<SEO title="404" />
			<Header />

			<p>404</p>

			<Footer />
		</body>
	)
}
