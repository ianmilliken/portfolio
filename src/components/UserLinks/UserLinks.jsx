import React, { Component } from "react"
import "./UserLinks.css"


class UserLinks extends Component {

	getLinkElements() {
		const { userLinks } = this.props.config
		const { labeled, icon } = this.props
		return userLinks.map(link => (
			<li key={link.label}>
				<a href={link.url}>
					{labeled ? <span>{link.label}</span> : ""}
					{icon ? <i className={link.iconClassName} /> : ""}
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
