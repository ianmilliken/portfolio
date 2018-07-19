import React from "react"
import "./Grid.css"


class Grid extends React.Component {

	renderNarrow() {
		const bgColor = this.props.background ? this.props.background : "#ffffff"
		return (
			<div className={`container gutter-top padder--vertical fill--${this.props.fill}`} style={{ backgroundColor: bgColor }}>
				<div className={`grid grid--${this.props.columns}`}>
					{this.props.children}
				</div>
			</div>
		)
	}

	renderNormal() {
		const bgColor = this.props.background ? this.props.background : "#ffffff"
		return (
			<div className={`grid grid--${this.props.columns} gutter-top fill--${this.props.fill}`} style={{ backgroundColor: bgColor }}>
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