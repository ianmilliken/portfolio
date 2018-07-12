import React from "react"
import Helmet from "react-helmet"
import anime from "animejs"

import Header from "../components/Header/Header"
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"
import Triangle from "../components/Icons/Triangle"
import Circle from "../components/Icons/Circle"

import config from "../../data/SiteConfig"
import "./index.css"
import "./font-awesome.css"


export default class MainLayout extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			contact: false
		}
		this.handleContactLink = this.handleContactLink.bind(this)
	}

	componentDidMount() {
	/* var circle_animation = anime({
	  targets: '.shape--left',
	  translateX: function() { return anime.random(-100, 25) + '%'; },
	  translateY: function() { return anime.random(-75, 150) + '%'; },
	  duration: function() { return anime.random(15000, 20000); },
	  direction: 'alternate',
	  loop: true,
	  easing: 'easeInCubic'
	});
	var triangle_animation = anime({
	  targets: '.shape--right',
	  translateX: function() { return anime.random(-75, 75) + '%'; },
	  translateY: function() { return anime.random(-50, 75) + '%'; },
	  duration: function() { return anime.random(10000, 15000); },
	  direction: 'alternate',
	  loop: true,
	  easing: 'easeInCubic'
	}); */
	}

	getLocalTitle() {
		function capitalize(string) {
			return string.charAt(0).toUpperCase() + string.slice(1)
		}
		const pathPrefix = config.pathPrefix ? config.pathPrefix : "/"
		const currentPath = this.props.location.pathname.replace(pathPrefix, "").replace("/", "")
		let title = ""
		if (currentPath === "") {
			title = "Home"
		} else if (currentPath === "tags/") {
			title = "Tags"
		} else if (currentPath === "categories/") {
			title = "Categories"
		} else if (currentPath === "about/") {
			title = "About"
		} else if (currentPath === "work/") {
			title = "Work"
		} else if (currentPath.indexOf("posts")) {
			title = "Article"
		} else if (currentPath.indexOf("tags/")) {
			const tag = currentPath.replace("tags/", "").replace("/", "").replace("-", " ")
			title = `Tagged in ${capitalize(tag)}`
		} else if (currentPath.indexOf("categories/")) {
			const category = currentPath.replace("categories/", "").replace("/", "").replace("-", " ")
			title = `${capitalize(category)}`
		}
		return title
	}

	getLocalMenu() {
		const pathPrefix = config.pathPrefix ? config.pathPrefix : "/"
		const currentPath = this.props.location.pathname.replace(pathPrefix, "").replace("/", "")
		let menu = 0;
		if (currentPath === "work/") {
			menu = 1
		}
		return menu
	}

	handleContactLink(e) {
		e.preventDefault()
		const { contact} = this.state
		this.setState({
			contact: contact ? false : true
		})
	}

  	render() {
		const { children } = this.props
		const { pathname } = this.props.location
		let backgroundColor
		let textColor
		let locationClass
		if (pathname.includes("/work/")) {
			backgroundColor = "#F9F9F9"
			textColor = "#111310"
			locationClass = "work"
		} else if (pathname === "/about/") {
			backgroundColor = "#00DEA1"
			textColor = "#FFFFFF"
			locationClass = "about"
		} else {
			backgroundColor = "#111310"
			textColor = "#FFFFFF"
			locationClass = "index"
		}
		return (
			<div className={locationClass} style={{ backgroundColor: backgroundColor, color: textColor }}>
				<Helmet>
					<title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
					<meta name="description" content={config.siteDescription} />
				</Helmet>
				<Circle classes="shape shape--left" color="#00DEA1" />
				<Triangle classes="shape shape--right" color="#00DEA1" />
				<Header config={config} />
				<Nav menu={this.getLocalMenu()} onContactLink={this.handleContactLink} />
				<main>{children()}</main>
				<Footer config={config} />
				<div className={`overlay ${ this.state.contact ? `is-active` : ``}`} />
				<div className={`contact-panel ${ this.state.contact ? `is-active` : ``}`}>
					<h2>Get in touch</h2>
				</div>
			</div>
		)
	}
}
