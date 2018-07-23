import React from "react"
import Link from "gatsby-link"
import Logo from "../Logo/Logo"
import UserLinks from "../UserLinks/UserLinks"
import "./Header.css"


class Header extends React.Component {
	render() {
		const { config } = this.props
		return (
			<div className="header">
				<Link to="/" className="header__link"><Logo color={this.props.currentPath !== "/about/" ? "#00dea1" : ""} /></Link>
				<UserLinks config={config} color={this.props.currentPath.includes("/work/") ? "#656565" : ""} icon />
			</div>
		)
	}
}


export default Header