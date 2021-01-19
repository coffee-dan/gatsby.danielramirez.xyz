import React from 'react'
import {
	faGithub,
	faLinkedin,
	faHackerrank,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
	return (
		<div className="footer">
			<a href="mailto:danramirezdev@gmail.com" class="footer__link">
				danramirezdev@gmail.com
			</a>
			<ul className="social-list">
				<li className="social-list__item">
					<a
						className="social-list__link"
						alt="Github"
						href="https://github.com/coffee-dan"
					>
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</li>
				<li className="social-list__item">
					<a
						className="social-list__link"
						alt="LinkedIn"
						href="https://www.linkedin.com/in/danramirezdev/"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</li>
				<li className="social-list__item">
					<a
						className="social-list__link"
						alt="HackerRank"
						href="https://www.hackerrank.com/coffee_dan"
					>
						<FontAwesomeIcon icon={faHackerrank} />
					</a>
				</li>
			</ul>
		</div>
	)
}
