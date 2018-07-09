import React from "react"
import Link from "gatsby-link"
import "./Nav.css"

class Nav extends React.Component {
	render() {
		const { menu } = this.props
		return (
			<nav className="nav">
				<div className="nav__link nav__link--l">
					<span className="nav__line"></span>
					<Link to="/contact/">
						<span>Contact</span>
					</Link>
				</div>
				<div className="nav__link nav__link--r">
					<span className="nav__line"></span>
					<Link to="/about/">
						<span>About</span>
					</Link>
				</div>
			</nav>
		)
	}
}

export default Nav