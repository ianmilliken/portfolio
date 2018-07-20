import React from "react"
import Revealer from "../../Revealer/Revealer"
import "./Grid.css"


class Grid extends React.Component {

	renderNarrow() {
		const bgColor = this.props.background ? this.props.background : "#ffffff"
		return (
			<Revealer>
				<div className={`container gutter-top padder--vertical fill--${this.props.fill}`} style={{ backgroundColor: bgColor }}>
					<div className={`grid grid--${this.props.columns}`}>
						{this.props.children}
					</div>
				</div>
			</Revealer>
		)
	}

	renderNormal() {
		const bgColor = this.props.background ? this.props.background : "#ffffff"
		return (
			<Revealer>
				<div className={`grid grid--${this.props.columns} gutter-top fill--${this.props.fill}`} style={{ backgroundColor: this.props.fill ? bgColor : "" }}>
					{this.props.children}
				</div>
			</Revealer>
		)
	}

	render() {
		return (
			this.props.narrow ? this.renderNarrow() : this.renderNormal()
		)
	}
}


export default Grid