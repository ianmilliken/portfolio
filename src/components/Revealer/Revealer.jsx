import React from "react"
import Waypoint from "react-waypoint"
import "./Revealer.css"


class Revealer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			inView: false
		}
		this.handleEnter = this.handleEnter.bind(this)
		this.handleLeave = this.handleLeave.bind(this)
	}

	handleEnter({ previousPosition }) {
		this.setState({ 
			inView: true,
			prevPosition: previousPosition
		})
	}

	handleLeave() {
		this.setState({ inView: false })
	}

	render() {
		const marginTop = this.props.margin ? "12rem" : "";
		return (
			<Waypoint onEnter={this.handleEnter} onLeave={this.handleLeave}>

				{/* 
					.reveal-wrapper needs to be the Waypoint child because transforms are applied 
					to .reveal which effect it's position for the onEnter event
				*/}

				<div className="reveal-wrapper" style={{ marginTop: marginTop }}>
					<div className={`reveal${this.state.inView && this.state.prevPosition !== "above" ? " is-active" : ""}${this.props.container ? " container" : ""}${this.props.curtain ? " has-curtain" : ""}`}>
						<div className={`reveal-blind${this.state.inView ? " is-active" : ""}`}></div>
						{this.props.children}
					</div>
				</div>
			</Waypoint>
		)
	}
}


export default Revealer