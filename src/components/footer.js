import React from 'react'

export default function Footer() {
	return (
		<div className="footer">
			<a href="https://github.com">email@email.com</a>
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
						<i className="fab"></i> {/* github icon */}
					</a>
				</li>
			</ul>
		</div>
	)
}
