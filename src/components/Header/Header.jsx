import React from "react"
import Link from "gatsby-link"
import Logo from "../Logo/Logo"
import UserLinks from "../UserLinks/UserLinks"
import "./Header.css"


class Header extends React.Component {

	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		e.preventDefault()
		this.props.handleMobileMenu(e)
	}

	render() {
		const { config } = this.props
		return (
			<div className="header">
				<Link to="/" className="header__link"><Logo color={this.props.currentPath !== "/about/" ? "#00dea1" : ""} /></Link>
				<div className="show-at-tablet">
					<UserLinks config={config} color={this.props.currentPath.includes("/work/") ? "#656565" : ""} icon />
				</div>
				<div className="hide-at-tablet">	
					<a href="#" onClick={this.handleClick}>
						<svg width="21px" height="10px" viewBox="0 0 21 10" version="1.1">
						    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
						        <g transform="translate(-271.000000, -34.000000)" stroke="#21E3B1">
						            <g id="Group" transform="translate(271.000000, 34.000000)">
						                <path d="M0.5,1.25 L20.5,1.25" />
						                <path d="M0.5,9.25 L20.5,9.25" />
						            </g>
						        </g>
						    </g>
						</svg>
					</a>
				</div>
			</div>
		)
	}
}


export default Header