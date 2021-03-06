import React, { Component } from "react"
import BrandIcon from "../Icons/BrandIcon"
import "./UserLinks.css"


class UserLinks extends Component {

	getLinkElements() {
		const { userLinks } = this.props.config
		const { labeled, icon } = this.props
		return userLinks.map(link => (
			<li key={link.label} className="header__link">
				<a href={link.url}>
					{labeled ? <span>{link.label}</span> : ""}
					{icon ? <BrandIcon name={link.iconClassName} color={this.props.color} /> : ""}
				</a>
			</li>
		));
	}

	render() {
		const { userLinks } = this.props.config;
		if (!userLinks) {
			return null
		}
		return <ul className="user-links">{this.getLinkElements()}</ul>
	}
}


export default UserLinks
