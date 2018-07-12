import React from "react"
 
 
class Header extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log(this.props)
		return (
			<div className="">
				<h1>{this.props.title}</h1>
				{this.props.children}
			</div>
		)
    }
}


export default Header