import React from "react"
import { Transition as ReactTransition } from "react-transition-group"
import getTransitionStyle from "../../utils/getTransitionStyle"
import { historyExitingEventType, timeout } from "../../../gatsby-browser"


class Transition extends React.Component {

	static getDerivedStateFromProps({ exiting }) {
		if (exiting) {
			return { exiting: false }
		}
		return null
	}

	constructor(props) {
		super(props)
		this.state = { exiting: false }
		this.listenerHandler = this.listenerHandler.bind(this)
	}

	componentDidMount() {
		window.addEventListener(historyExitingEventType, this.listenerHandler)
	}

	componentWillUnmount() {
		window.removeEventListener(historyExitingEventType, this.listenerHandler)
	}

	listenerHandler(event) {
		this.setState({ exiting: true })
	}

	render() {
		const transitionProps = {
			timeout: {
				enter: timeout,
				exit: timeout,
			},
			appear: true,
			in: !this.state.exiting,
		}

		return (
			<ReactTransition {...transitionProps}>
				{status => (
					<div className={`wipe wipe--${status}`}>
						<div className={`anim anim--${status}`} />
						{this.props.children}
					</div>
				)}
			</ReactTransition>
		)
	}
}


export default Transition