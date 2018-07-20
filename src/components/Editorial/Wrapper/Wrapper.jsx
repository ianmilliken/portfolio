import React from "react"
import "./Wrapper.css"


class Wrapper extends React.Component {
	render() {
		return (
			<div className="item__wrapper" style={{ backgroundColor: this.props.color }}>
				{this.props.children}
			</div>
		)
	}
}


export default Wrapper