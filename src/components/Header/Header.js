import React from "react"
import Link from "gatsby-link"
import Logo from "../../assets/logo.svg"
import UserLinks from "../UserLinks/UserLinks"
import "./Header.css";

class Header extends React.Component {
	render() {
		const { config } = this.props
		return (
			<div className="header">
				<Link to="/"><Logo /></Link>
				<UserLinks config={config} icon />
			</div>
		)
	}
}

export default Header