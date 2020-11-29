import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
	return (
		<div className="footer">
			<ul className="social-list">
				<li className="social-list__item">
					<a className="social-list__link" href="https://github.com">
						<i className="fab"></i> {/* codepen icon */}
					</a>
				</li>
				<li className="social-list__item">
					<a className="social-list__link" href="https://github.com">
						<i className="fab"></i> {/* dribble icon */}
					</a>
				</li>
				<li className="social-list__item">
					<a className="social-list__link" href="https://github.com">
						<i className="fab"></i> {/* twitter icon */}
					</a>
				</li>
				<li className="social-list__item">
					<a className="social-list__link" href="https://github.com">
						<FontAwesomeIcon
							icon={['fab', 'github']}
							className="social-list__icon"
							color="white"
						/>
					</a>
				</li>
			</ul>
		</div>
	)
}
