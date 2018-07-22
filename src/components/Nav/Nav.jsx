import React from "react"
import Link from "gatsby-link"
import _ from "lodash"
import DefaultTransition from "../Transition/DefaultTransition"
import "./Nav.css"


class Nav extends React.Component {

	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		this.props.onContactLink(e)
	}

	getLink( query, direction ) {
		const edges = this.props.menu

		const urls = _.map(edges, (obj) => {
			return { 
				url: obj.node.fields.slug,
				title: obj.node.frontmatter.title
			}
		})

		let value = _.findIndex(urls, (i) => {
			return i.url === this.props.currentPath
		})

		if (direction === "next") {
			if (value < urls.length - 1) {
				// Increment by 1
				value = value + 1
			} else {
				// Increment to first entry
				value = 0
			}
		}

		else if (direction === "previous") {
			if (value > 0) {
				// Decrement by 1
				value = value - 1
			} else {
				// Decrement to last entry
				value = urls.length - 1
			}
		}

		if (query === "url") {
			return urls[value].url
		} 
		else if (query === "title") {
			return urls[value].title
		}
	}

	render() {
		if (!this.props.currentPath.includes("/work/")) {
			return (
				<DefaultTransition>
					<div className="nav">
						<div className="nav__link nav__link--l">
							<span className="nav__line" />
							<a href="/contact/">
								<span className="nav__text">Contact</span>
							</a>
						</div>
						<div className="nav__link nav__link--r">
							<span className="nav__line" />
							<a href="/about/">
								<span className="nav__text">About</span>
							</a>
						</div>
					</div>	
				</DefaultTransition>
			)
		} else {
			return (
				<DefaultTransition>
					<nav className="nav">
						<div className="nav__link nav__link--l">
							<span className="nav__line" />
							<Link to={this.getLink("url", "previous")}>
								<span className="nav__text">Previous</span>
								<span className="nav__reveal">{this.getLink("title", "previous")}</span>
							</Link>
						</div>
						<div className="nav__link nav__link--r">
							<span className="nav__line" />
							<Link to={this.getLink("url", "next")}>
								<span className="nav__text">Next</span>
								<span className="nav__reveal">{this.getLink("title", "next")}</span>
							</Link>
						</div>
					</nav>
				</DefaultTransition>
			)
		}
	}
}


export default Nav