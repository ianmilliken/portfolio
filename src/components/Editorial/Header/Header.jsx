import React from "react"
 
 
class Header extends React.Component {

	render() {
		return (
			<div className="">
				<h1>{this.props.title}</h1>
				{this.props.children}
			</div>
		)
    }
}


export default Header