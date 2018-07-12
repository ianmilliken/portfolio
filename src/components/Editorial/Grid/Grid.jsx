import React from "react"
import "./Grid.css"


class Grid extends React.Component {
	render() {
		return (
			<div className={`grid grid--${this.props.columns}`}>
				{this.props.children}
			</div>
		)
	}
}


export default Grid