import React from "react"
import Helmet from "react-helmet"
import anime from "animejs"
import WebFont from 'webfontloader'

import Header from "../components/Header/Header"
import Nav from "../components/Nav/Nav"
import MobileNav from "../components/Nav/MobileNav"
import Footer from "../components/Footer/Footer"
import Triangle from "../components/Icons/Triangle"
import Circle from "../components/Icons/Circle"
import UserLinks from "../components/UserLinks/UserLinks"

import Transition from "../components/Transition/Transition"
import DefaultTransition from "../components/Transition/DefaultTransition"

import config from "../../data/SiteConfig"
import "./index.css"


export default class MainLayout extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			mobileMenu: false
		}
		this.handleMobileMenu = this.handleMobileMenu.bind(this)
	}

	componentDidMount() {
		WebFont.load({
			typekit: {
				id: 'txz5lhd'
			}
		})

		const circle_animation = anime({
		  targets: '.shape--left',
		  translateX: function() { return anime.random(-100, 25) + '%'; },
		  translateY: function() { return anime.random(-75, 150) + '%'; },
		  duration: function() { return anime.random(20000, 25000); },
		  direction: 'alternate',
		  loop: true,
		  easing: 'easeInOutSine'
		})

		const triangle_animation = anime({
		  targets: '.shape--right',
		  translateX: function() { return anime.random(-75, 75) + '%'; },
		  translateY: function() { return anime.random(-50, 75) + '%'; },
		  duration: function() { return anime.random(15000, 20000); },
		  direction: 'alternate',
		  loop: true,
		  easing: 'easeInOutSine'
		})
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

	handleMobileMenu(e) {
		e.preventDefault()
		const { mobileMenu } = this.state
		this.setState({
			mobileMenu: mobileMenu ? false : true
		})
	}

  	render() {
		const { children } = this.props
		const { pathname } = this.props.location
		let backgroundColor
		let textColor
		let locationClass
		if (pathname.includes("/work/")) {
			backgroundColor = "#f9f9f9"
			textColor = "#111310"
			locationClass = "work"
		} else if (pathname === "/about/") {
			backgroundColor = "#21e3b1"
			textColor = "#ffffff"
			locationClass = "about"
		} else {
			backgroundColor = "#0d1720"
			textColor = "#ffffff"
			locationClass = "index"
		}
		return (
			<div className={locationClass} style={{ backgroundColor: backgroundColor, color: textColor, paddingLeft: `${this.state.leftActive ? "4rem" : "0"}` }} onMouseMove={this.onMouseMove}>
				<Helmet>
					<title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
					<meta name="description" content={config.siteDescription} />
				</Helmet>
				<Circle classes="shape shape--left" color="#00DEA1" />
				<Triangle classes="shape shape--right" color="#00DEA1" />
				<DefaultTransition><Header config={config} currentPath={pathname} handleMobileMenu={this.handleMobileMenu} /></DefaultTransition>
				<Nav menu={this.props.data.allMarkdownRemark.edges} currentPath={pathname} />
				<main>{children()}</main>
				<Footer config={config} />
				<MobileNav active={this.state.mobileMenu} handleMobileMenu={this.handleMobileMenu} />
				<div className={`overlay ${ this.state.mobileMenu ? `is-active` : ``}`} />
			</div>
		)
	}
}


export const navQuery = graphql`
	query navQuery {
		allMarkdownRemark(
			filter: { fields: { name: { eq: "work" } } }
			sort: {fields: [frontmatter___date], order: DESC}
		) {
			edges {
				node {
					frontmatter {
						title
					}
					fields {
						slug
					}
				}
			}
		}
	}
`
