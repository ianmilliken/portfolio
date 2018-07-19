import React from "react"
import Link from "gatsby-link"
import _ from "lodash"
import "./Nav.css"


class Nav extends React.Component {

	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		this.props.onContactLink(e)
	}

	getNextLink() {
		const edges = this.props.menu

		const urls = _.map(edges, (obj) => {
			return obj.node.fields.slug
		})

		let value = _.findIndex(urls, (i) => {
			return i === this.props.currentPath
		})

		if (value < urls.length - 1) {
			value = value + 1
		} else {
			value = 0
		}
		
		return urls[value]
	}

	getPreviousLink() {
		const edges = this.props.menu

		const urls = _.map(edges, (obj) => {
			return obj.node.fields.slug
		})

		let value = _.findIndex(urls, (i) => {
			return i === this.props.currentPath
		})

		if (value > 0) {
			value = value - 1
		} else {
			value = urls.length - 1
		}
		
		return urls[value]
	}

	render() {
		if (!this.props.currentPath.includes("/work/")) {
			return (
				<nav className="nav">
					<div className="nav__link nav__link--l">
						<span className="nav__line" />
						<a href="/" onClick={this.handleClick}><span>Contact</span></a>
					</div>
					<div className="nav__link nav__link--r">
						<span className="nav__line" />
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
						<span className="nav__line" />
						<Link to={this.getPreviousLink()}>
							<span>Previous</span>
						</Link>
					</div>
					<div className="nav__link nav__link--r">
						<span className="nav__line" />
						<Link to={this.getNextLink()}>
							<span>Next</span>
						</Link>
					</div>
				</nav>
			)
		}
	}
}


export default Nav