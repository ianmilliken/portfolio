import React from "react"
import "./Header.css"
 
 
class Header extends React.Component {

	render() {
		return (
			<div className="c-header">
				<h2>{this.props.title}</h2>
				<p>{this.props.intro}</p>
			</div>
		)
    }
}


export default Header