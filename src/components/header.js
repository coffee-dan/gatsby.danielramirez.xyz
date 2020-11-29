import React from 'react'
import { Link } from 'gatsby'

export default function Header({ buttons }) {
	return (
		<header>
			<Link to={`/`} className="logo">
				<img src={'/img/logo.png'} alt="Me" />
			</Link>
		</header>
	)
}
