import React from "react"
import "./Grid.css"


class Grid extends React.Component {

	renderNarrow() {
		return (
			<div className={`container gutter-top padder--vertical fill--${this.props.fill}`}>
				<div className={`grid grid--${this.props.columns}`}>
					{this.props.children}
				</div>
			</div>
		)
	}

	renderNormal() {
		return (
			<div className={`grid grid--${this.props.columns} gutter-top fill--${this.props.fill}`}>
				{this.props.children}
			</div>
		)
	}

	render() {
		return (
			this.props.narrow ? this.renderNarrow() : this.renderNormal()
		)
	}
}


export default Grid