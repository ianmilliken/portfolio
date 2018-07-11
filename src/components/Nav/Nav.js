import React from "react"
import Link from "gatsby-link"
import "./Nav.css"


class Nav extends React.Component {

	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		this.props.onContactLink(e)
	}

	render() {
		const { menu } = this.props
		if (this.props.menu === 0) {
			return (
				<nav className="nav">
					<div className="nav__link nav__link--l">
						<span className="nav__line"></span>
						<a href="/" onClick={this.handleClick}><span>Contact</span></a>
					</div>
					<div className="nav__link nav__link--r">
						<span className="nav__line"></span>
						<Link to="/about/">
							<span>About</span>
						</Link>
					</div>
				</nav>
			)
		} else {
			return (
				<nav className="nav">
					<div className="nav__link nav__link--l">
						<span className="nav__line"></span>
						<Link to="/">
							<span>Previous</span>
						</Link>
					</div>
					<div className="nav__link nav__link--r">
						<span className="nav__line"></span>
						<Link to="/">
							<span>Next</span>
						</Link>
					</div>
				</nav>
			)
		}
	}
}

export default Nav