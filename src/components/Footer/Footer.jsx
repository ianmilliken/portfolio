import React, { Component } from "react"
import Logo from "../Logo/Logo"
import "./Footer.css"


class Footer extends Component {
	render() {
		const { config } = this.props
		const { copyright } = config
		if (!copyright) {
			return null
		}

		return (
			<footer className="footer">
				<div className="footer__info">
					<Logo classes="footer__logo" color="#21e3b1" width="34" height="32" />
					<div className="footer__l">
						<div className="footer__credit">Ian Milliken</div>
						<p className="footer__selline">UI <span>+</span> UX Design<span>+</span> Front End <span>+</span> Branding</p>
					</div>
				</div>
				<div className="footer__r">
					<a className="label" href={`mailto:${config.userEmail}`}>{config.userEmail}</a>
					<p className="label">{copyright}</p>
				</div>
			</footer>
		)
	}
}


export default Footer;
