import React, { Component } from "react"
import Logo from "../Logo/Logo"
import "./Footer.css"


class Footer extends Component {
	render() {
		const { config } = this.props
		const copyright = config.copyright
		if (!copyright) {
			return null
		}

		return (
			<footer className="footer">
				<Logo color="#FFFFFF" width="34" height="32" />
				<div className="footer__credit">Ian Milliken</div>
				<p className="footer__selline">UI & UX Design<span>  &#47;&#47;  </span>Front End Development<span>  &#47;&#47; </span>Branding</p>
				<a className="label" href={`mailto:${config.userEmail}`}>{config.userEmail}</a>
				<p className="label">{copyright}</p>
			</footer>
		)
	}
}


export default Footer;
