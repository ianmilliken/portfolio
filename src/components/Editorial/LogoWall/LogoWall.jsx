import React from "react"
import "./LogoWall.css"


class LogoWall extends React.Component {
	render() {
		console.log(this.props.source)
		return (
			<div className="logowall container container--wide">
				<img src={this.props.source} alt="ALT" onError="Image error has occured" />
			</div>
		)
	}
}


export default LogoWall