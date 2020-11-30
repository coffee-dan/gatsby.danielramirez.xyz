import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
	return (
		<header>
			<Link to={`/`} className="logo">
				home
			</Link>
		</header>
	)
}
